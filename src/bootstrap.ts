import { exit } from "node:process";
import { existsSync, mkdirSync, unlinkSync, writeFileSync } from "node:fs";
import path from "node:path";
import { makeClient } from "@/lib/apollo-factory";
import { GET_POKEMONS_INDEX } from "@/queries/pokemon";
import { BasePokemon } from "@/types/pokemon";

async function fetchBasePokemons() {
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

fetchBasePokemons().then((res) => {
  const dir = path.join(process.cwd(), "/data");

  try {
    if (!existsSync(dir)) {
      mkdirSync(dir);
    }

    const filename = path.join(dir, "/pokemons.json");

    if (existsSync(filename)) {
      unlinkSync(filename);
    }

    writeFileSync(filename, JSON.stringify(res, null, 2));
  } catch (error) {
    console.error(error);

    exit(1);
  }
});
