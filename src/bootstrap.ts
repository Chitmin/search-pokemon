import { fetchBasePokemons } from "./actions/fetch-base-pokemons";
import { exit } from "node:process";
import { existsSync, mkdirSync, unlinkSync, writeFileSync } from "node:fs";
import path from "node:path";

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
    console.log(error);

    exit(1);
  }
});
