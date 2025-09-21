export interface BasePokemon {
  id: string;
  name: string;
  image: string;
}

// UG9rZW1vbjowMDE= Bulbasaur

export interface PokemonAttack {
  name: string;
  type: string;
  damage: number;
}

export interface PokemonEvolution {
  id: string;
  name: number;
  classification: string;
}

export interface Pokemon extends BasePokemon {
  attack: Record<"fast" | "special", PokemonAttack[]>;
  evolutions: PokemonEvolution[];
}
