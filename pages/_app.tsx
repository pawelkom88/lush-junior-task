import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { client } from "./client/client";
import "@fontsource/figtree";
import "@styles/globals.scss";
import Navigation from "@components/navigation/Navigation";
import Footer from "@components/footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // Implement a provider on a highest lvl in app, so other components(children) have access to it.
    <ApolloProvider client={client}>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  );
}
