jest.mock("node:fs", () => ({
  existsSync: jest.fn(),
  readFileSync: jest.fn(),
}));

jest.mock("@/lib/apollo-wrappers", () => ({
  getPokemonClient: jest.fn(),
}));

import fs from "node:fs";
import Bulbasaur from "../../fixtures/bulbasaur";
import Charmander from "../../fixtures/charmander";
import Squirtle from "../../fixtures/squirtle";
import { getPokemonClient } from "@/lib/apollo-wrappers";

describe("pokemon related services", () => {
  it("can read from the local file if it is exists", async () => {
    (fs.existsSync as jest.Mock).mockReturnValue(true);
    (fs.readFileSync as jest.Mock).mockReturnValue(
      JSON.stringify([Bulbasaur, Charmander, Squirtle])
    );

    const { getPokemonsIndex } = await import("@/services/pokemon");

    await getPokemonsIndex();

    expect(fs.existsSync).toHaveBeenCalledTimes(1);
    expect(fs.readFileSync).toHaveBeenCalledTimes(1);
  });

  it("can call client if no local file exists", async () => {
    (fs.existsSync as jest.Mock).mockReturnValue(false);

    const { getPokemonsIndex } = await import("@/services/pokemon");

    const pokemons = [Bulbasaur, Charmander, Squirtle];
    (getPokemonClient as jest.Mock).mockImplementation(() => {
      return {
        query: jest.fn(() => ({
          data: { pokemons: pokemons },
        })),
      };
    });

    const result = await getPokemonsIndex();

    expect(fs.existsSync).toHaveBeenCalledTimes(1);
    expect(getPokemonClient).toHaveBeenCalledTimes(1);

    expect(result).toHaveLength(pokemons.length);
  });
});
