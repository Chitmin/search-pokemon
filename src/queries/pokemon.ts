import { gql } from "@apollo/client";

export const GET_POKEMONS_INDEX = gql`
  query GetPokemons($count: Int!) {
    pokemons(first: $count) {
      id
      name
      image
    }
  }
`;

export const GET_POKEMON_DETAILS = gql`
  query GetPokemonDetails($id: String, $name: String) {
    pokemon(id: $id, name: $name) {
      id
      name
      image
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
