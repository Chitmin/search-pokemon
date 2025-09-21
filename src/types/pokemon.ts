export interface PokemonIndex {
  id: string;
  name: string;
  image: string;
  evolutions: PokemonEvolution[];
}

export interface BasePokemon extends PokemonIndex {
  slug: string;
}

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
  attacks: {
    fast: PokemonAttack[];
    special: PokemonAttack[];
  };
  weight: {
    minimum: string;
    maximum: string;
  };
  height: {
    minimum: string;
    maximum: string;
  };
  classification: string;
  types: string[];
  resistant: string[];
  weaknesses: string[];
}
