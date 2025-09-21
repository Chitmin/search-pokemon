import PokemonDetailsSkeleton from "@/components/pokemon-details-skeleton";

export default function Loading() {
  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center p-4">
      <PokemonDetailsSkeleton />
    </main>
  );
}
