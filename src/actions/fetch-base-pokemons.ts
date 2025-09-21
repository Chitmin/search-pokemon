import { makeClient } from "@/lib/apollo-client";
import { GET_POKEMONS_INDEX } from "@/queries/pokemon";
import { BasePokemon } from "@/types/pokemon";

export async function fetchBasePokemons() {
  const client = makeClient();

  try {
    const response = await client.query<{ pokemons: BasePokemon[] }>({
      query: GET_POKEMONS_INDEX,
      variables: { count: -1 },
      fetchPolicy: "network-only",
    });

    return response?.data?.pokemons || [];
  } catch (error) {
    console.error("Error fetching data:", error);

    return [];
  }
}
