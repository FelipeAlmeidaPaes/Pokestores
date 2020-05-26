import React from "react";
import PokeList from "./Pokelist";
import renderer from "react-test-renderer";

const pokelist = [
  {
    name: "cloyster",
    order: 131,
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
    },
    abilities: [
      {
        ability: {
          name: "shell-armor",
        },
      },
      {
        ability: {
          name: "overcoat",
        },
      },
    ],
  },
  {
    name: "jynx",
    order: 183,
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
    },
    abilities: [
      {
        ability: {
          name: "dry-skin",
        },
      },
      {
        ability: {
          name: "forewarn",
        },
      },
    ],
  },
];

test("snapshot", () => {
  const tree = renderer.create(<PokeList pokelist={pokelist} />).toJSON();
  expect(tree).toMatchSnapshot();
});
