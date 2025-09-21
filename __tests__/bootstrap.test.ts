import path from "node:path";

jest.mock("@/lib/apollo-factory", () => ({
  makeClient: jest.fn(),
}));

jest.mock("node:fs", () => ({
  existsSync: jest.fn(),
  mkdirSync: jest.fn(),
  unlinkSync: jest.fn(),
  writeFileSync: jest.fn(),
}));

import { makeClient } from "@/lib/apollo-factory";
import fs from "node:fs";

describe("store pokemons list as a side-effects on import", () => {
  function getPaths() {
    const dir = path.join(process.cwd(), "/data");
    const filename = path.join(dir, "/pokemons.json");
    return { dir, filename };
  }

  it("creates data dir and writes pokemons.json when fetch succeeds and file does not exist", async () => {
    const { dir, filename } = getPaths();

    (fs.existsSync as jest.Mock).mockImplementation((p: string) => {
      if (p === dir) return false;
      if (p === filename) return false;
      return false;
    });

    const fakePokemons = [{ id: 25, name: "Pikachu" }];
    (makeClient as jest.Mock).mockReturnValue({
      query: jest.fn().mockResolvedValue({ data: { pokemons: fakePokemons } }),
    });

    await import("../src/bootstrap");
    await new Promise((r) => setTimeout(r, 0));

    expect(fs.mkdirSync).toHaveBeenCalledWith(dir);
    expect(fs.unlinkSync).not.toHaveBeenCalled();
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      filename,
      JSON.stringify(fakePokemons, null, 2)
    );
  });
});
