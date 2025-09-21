import PokemonFinder from "@/components/pokemon-finder";
import { getPokemonsIndex } from "@/services/pokemon";

export default async function Home() {
  const pokemons = await getPokemonsIndex();

  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center p-4">
      <PokemonFinder pokemons={pokemons} />
    </main>
  );
}
