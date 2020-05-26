import React from "react";
import PokeList from "./PokeListItem";
import renderer from "react-test-renderer";
import PokeListItem from "./PokeListItem";

const pokemon = {
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
};

test("snapshot", () => {
  const tree = renderer.create(<PokeListItem pokemon={pokemon} />).toJSON();
  expect(tree).toMatchSnapshot();
});
