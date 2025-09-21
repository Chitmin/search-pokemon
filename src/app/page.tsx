import PokemonFinder, {
  PokemonFinderSkeleton,
} from "@/components/pokemon-finder";
import { getPokemonsIndex } from "@/services/pokemon";
import { Suspense } from "react";

export default async function Home() {
  const pokemons = await getPokemonsIndex();

  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center p-4">
      <Suspense fallback={<PokemonFinderSkeleton />}>
        <PokemonFinder pokemons={pokemons} />
      </Suspense>
    </main>
  );
}
