const Squirtle = {
  id: "UG9rZW1vbjowMDc=",
  name: "Squirtle",
  image: "https://img.pokemondb.net/artwork/squirtle.jpg",
  weight: {
    minimum: "7.88kg",
    maximum: "10.13kg",
  },
  height: {
    minimum: "0.44m",
    maximum: "0.56m",
  },
  classification: "Tiny Turtle Pokémon",
  types: ["Water"],
  resistant: ["Fire", "Water", "Ice", "Steel"],
  weaknesses: ["Electric", "Grass"],
  attacks: {
    fast: [
      {
        name: "Bubble",
        type: "Water",
        damage: 25,
      },
      {
        name: "Tackle",
        type: "Normal",
        damage: 12,
      },
    ],
    special: [
      {
        name: "Aqua Jet",
        type: "Water",
        damage: 25,
      },
      {
        name: "Aqua Tail",
        type: "Water",
        damage: 45,
      },
      {
        name: "Water Pulse",
        type: "Water",
        damage: 35,
      },
    ],
  },
  evolutions: [
    {
      id: "UG9rZW1vbjowMDg=",
      name: "Wartortle",
      classification: "Turtle Pokémon",
    },
    {
      id: "UG9rZW1vbjowMDk=",
      name: "Blastoise",
      classification: "Shellfish Pokémon",
    },
  ],
};

export default Squirtle;
