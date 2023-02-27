import { useState } from "react";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { client } from "./client/client";
import Navigation from "@components/navigation/Navigation";
import Footer from "@components/footer/Footer";
import FooterMobile from "@components/footer/FooterMobile";
import "@fontsource/figtree";
import "@styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  const [productQuery, setProductQuery] = useState<string>("");

  return (
    <ApolloProvider client={client}>
      <Navigation onProductQuery={setProductQuery} />
      <Component {...pageProps} keyword={productQuery} />
      <Footer />
      <FooterMobile />
    </ApolloProvider>
  );
}
