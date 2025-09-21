export interface BasePokemon {
  id: string;
  name: string;
  image: string;
  evolutions: PokemonEvolution[];
}

export interface PokemonAttack {
  name: string;
  type: string;
  damage: number;
}

export interface PokemonEvolution {
  id: string;
  name: string;
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
