import { gql } from "@apollo/client";

export const GET_POKEMONS_INDEX = gql`
  query GetPokemons($count: Int!) {
    pokemons(first: $count) {
      id
      name
      image
      evolutions {
        id
        name
        classification
      }
    }
  }
`;

export const GET_POKEMON_DETAILS = gql`
  query GetPokemonDetails($name: String!) {
    pokemon(name: $name) {
      id
      name
      image
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
      evolutions {
        id
        name
        classification
      }
    }
  }
`;
