import { getPokemonClient } from "@/lib/apollo-wrappers";
import { GET_POKEMONS_INDEX } from "@/queries/pokemon";
import { BasePokemon } from "@/types/pokemon";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

export async function getPokemonsIndex(): Promise<BasePokemon[]> {
  const filename = path.join(process.cwd(), "data", "pokemons.json");

  if (existsSync(filename)) {
    return Promise.resolve(
      JSON.parse(readFileSync(filename, { encoding: "utf-8" }))
    );
  }

  const response = await getPokemonClient().query<{ pokemons: BasePokemon[] }>({
    query: GET_POKEMONS_INDEX,
    variables: { count: -1 },
  });

  return response?.data?.pokemons || [];
}
