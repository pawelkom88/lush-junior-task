import { ApolloClient, InMemoryCache } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_APOLLO_CLIENT_URI,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          products: relayStylePagination([]),
        },
      },
    },
  }),
});
