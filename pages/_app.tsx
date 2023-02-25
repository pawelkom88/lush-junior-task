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
  const [keyword, setKeyword] = useState<string>("");

  return (
    // Implement a provider on a highest lvl in app, so other components(children) have access to it.
    <ApolloProvider client={client}>
      <Navigation onSetKeyword={setKeyword} />
      <Component {...pageProps} keyword={keyword} />
      <Footer />
      <FooterMobile />
    </ApolloProvider>
  );
}
