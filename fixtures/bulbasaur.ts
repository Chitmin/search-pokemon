const Bulbasaur = {
  id: "UG9rZW1vbjowMDE=",
  name: "Bulbasaur",
  image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
  weight: {
    minimum: "6.04kg",
    maximum: "7.76kg",
  },
  height: {
    minimum: "0.61m",
    maximum: "0.79m",
  },
  classification: "Seed Pokémon",
  types: ["Grass", "Poison"],
  resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
  weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  attacks: {
    fast: [
      {
        name: "Tackle",
        type: "Normal",
        damage: 12,
      },
      {
        name: "Vine Whip",
        type: "Grass",
        damage: 7,
      },
    ],
    special: [
      {
        name: "Power Whip",
        type: "Grass",
        damage: 70,
      },
      {
        name: "Seed Bomb",
        type: "Grass",
        damage: 40,
      },
      {
        name: "Sludge Bomb",
        type: "Poison",
        damage: 55,
      },
    ],
  },
  evolutions: [
    {
      id: "UG9rZW1vbjowMDI=",
      name: "Ivysaur",
      classification: "Seed Pokémon",
    },
    {
      id: "UG9rZW1vbjowMDM=",
      name: "Venusaur",
      classification: "Seed Pokémon",
    },
  ],
};

export default Bulbasaur;
