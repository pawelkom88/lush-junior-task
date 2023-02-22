import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { client } from "./client/client";
import "@styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // Implement a provider on a highest lvl in app, so other components(children) have access to it.
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
