"use client";

import SearchPokemon from "@/components/search-pokemon";
import { BasePokemon } from "@/types/pokemon";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import NoPokemon from "./no-pokemon";
import { Button } from "@/components/ui/button";

export default function PokemonFinder({
  pokemons,
}: Readonly<{ pokemons?: BasePokemon[] }>) {
  const searchParams = useSearchParams();
  const [term, setTerm] = useState("");
  const [notFound, setNotFound] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const name = searchParams.get("name") || "";
    setTerm(name);
    setNotFound(false);
  }, [searchParams]);

  const onSubmit = (name: string) => {
    const pokemon = pokemons?.find(
      (p) => p.name.toLowerCase() === name.toLowerCase()
    );

    if (pokemon) {
      const params = new URLSearchParams();
      params.set("name", pokemon.name);
      router.push(`/search?${params.toString()}`);
    } else {
      setNotFound(true);
    }
  };

  return (
    <>
      <h1 className="mb-4 text-xl font-bold">Search Pokemon</h1>
      <div className="flex flex-col items-start space-y-4">
        <SearchPokemon query={term} onChange={setTerm} onSubmit={onSubmit} />
        {notFound && (
          <NoPokemon>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setNotFound(false);
                setTerm("");
              }}
            >
              Reset
            </Button>
          </NoPokemon>
        )}
      </div>
    </>
  );
}
