import PokemonDetails from "@/components/pokemon-details";
import { getPokemonClient } from "@/lib/apollo-wrappers";
import { GET_POKEMON_DETAILS } from "@/queries/pokemon";
import { Pokemon } from "@/types/pokemon";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function PokemonResult({
  searchParams,
}: Readonly<{
  searchParams: Promise<{ name: string }>;
}>) {
  const client = getPokemonClient();
  const { name } = await searchParams;

  const response = await client.query<{ pokemon: Pokemon }>({
    query: GET_POKEMON_DETAILS,
    variables: { name },
    fetchPolicy: "cache-first",
  });

  const pokemon = response?.data?.pokemon || null;

  if (!pokemon) {
    notFound();
  }

  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center p-4">
      <PokemonDetails pokemon={pokemon} />

      <Link href="/" className="mt-4 text-sm text-primary">
        &larr; Back to search
      </Link>
    </main>
  );
}
