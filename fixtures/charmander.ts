const Charmander = {
  id: "UG9rZW1vbjowMDQ=",
  name: "Charmander",
  image: "https://img.pokemondb.net/artwork/charmander.jpg",
  weight: {
    minimum: "7.44kg",
    maximum: "9.56kg",
  },
  height: {
    minimum: "0.53m",
    maximum: "0.68m",
  },
  classification: "Lizard Pokémon",
  types: ["Fire"],
  resistant: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
  weaknesses: ["Water", "Ground", "Rock"],
  attacks: {
    fast: [
      {
        name: "Ember",
        type: "Fire",
        damage: 10,
      },
      {
        name: "Scratch",
        type: "Normal",
        damage: 6,
      },
    ],
    special: [
      {
        name: "Flame Burst",
        type: "Fire",
        damage: 30,
      },
      {
        name: "Flame Charge",
        type: "Fire",
        damage: 25,
      },
      {
        name: "Flamethrower",
        type: "Fire",
        damage: 55,
      },
    ],
  },
  evolutions: [
    {
      id: "UG9rZW1vbjowMDU=",
      name: "Charmeleon",
      classification: "Flame Pokémon",
    },
    {
      id: "UG9rZW1vbjowMDY=",
      name: "Charizard",
      classification: "Flame Pokémon",
    },
  ],
};

export default Charmander;
