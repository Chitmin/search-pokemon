import { HttpLink } from "@apollo/client";
import { ApolloCache } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import "../../envConfig.js";

const makeClient = (cache?: ApolloCache) =>
  new ApolloClient({
    link: new HttpLink({ uri: process.env.POKEMON_API_URL }),
    cache: cache ?? new InMemoryCache(),
  });

export { makeClient };
