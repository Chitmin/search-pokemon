import { BasePokemon } from "@/types/pokemon";

export default function PokemonCard({
  pokemon,
}: Readonly<{ pokemon: BasePokemon }>) {
  return <div>{pokemon.name}</div>;
}
