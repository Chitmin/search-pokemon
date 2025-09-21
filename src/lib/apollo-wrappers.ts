import { InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/client-integration-nextjs";
import { makeClient } from "./apollo-factory";

export const pokemonCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        pokemon: {
          keyArgs: ["name"],
          merge(existing, incoming) {
            return { ...existing, ...incoming };
          },
        },
        pokemons: {
          keyArgs: false,
          merge(existing = [], incoming) {
            return [...existing, ...incoming];
          },
        },
      },
    },
    Pokemon: {
      keyFields: ["id"],
    },
  },
});

export const { getClient: pokemonClient } = registerApolloClient(() => {
  return makeClient(pokemonCache);
});
