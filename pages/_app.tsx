import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { client } from "./client/client";
import Navigation from "@components/navigation/Navigation";
import Footer from "@components/footer/Footer";
import FooterMobile from "@components/footer/FooterMobile";
import { useLocalStorage } from "react-use";
import { useCheckoutCreateMutation, useCheckoutFetchAddedProductsQuery } from "@generated/api";
import "@fontsource/figtree";
import "@styles/globals.scss";

function Root({ Component, pageProps }: AppProps) {
  const [productQuery, setProductQuery] = useState<string>("");
  const [token, setToken] = useLocalStorage<string>("token");
  const [checkoutCreate] = useCheckoutCreateMutation();

  const { data } = useCheckoutFetchAddedProductsQuery({
    variables: { checkoutToken: token },
    skip: !token,
  });

  useEffect(() => {
    async function doCheckout() {
      const { data } = await checkoutCreate();
      const token: string = data?.checkoutCreate?.checkout?.token;

      setToken(token);
    }

    doCheckout();
  }, [checkoutCreate, setToken]);

  return (
    <>
      <Navigation
        onProductQuery={setProductQuery}
        checkoutProductsTotal={data?.checkout?.lines?.length ?? 0}
      />
      <Component {...pageProps} keyword={productQuery} token={token} />;
    </>
  );
}

export default function App(props: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Root {...props} />
      <Footer />
      <FooterMobile />
    </ApolloProvider>
  );
}
