"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dispatch, FormEvent, SetStateAction } from "react";

export default function SearchPokemon({
  query,
  onChange,
  onSubmit,
}: Readonly<{
  query: string;
  onChange: Dispatch<SetStateAction<string>>;
  onSubmit: (name: string) => void;
}>) {
  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const search = e.currentTarget.querySelector("input")?.value;

    if (search && search.trim()) {
      onSubmit(search);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="w-full min-w-sm max-w-md space-x-2 flex"
    >
      <Input
        name="search"
        placeholder="pikachu ..."
        value={query}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      <Button variant="ghost" size="icon" aria-label="View" type="submit">
        <Search className="w-4 h-4" />
      </Button>
    </form>
  );
}
