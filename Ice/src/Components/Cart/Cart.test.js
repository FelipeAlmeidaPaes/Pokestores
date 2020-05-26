import React from "react";
import Cart from "./Cart";
import renderer from "react-test-renderer";

const cart = [
  {
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
    name: "cloyster",
    price: "131,00",
    quantity: "1",
  },
  {
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
    name: "dewgong",
    price: "125,00",
    quantity: "2",
  },
];

test("snapshot", () => {
  const tree = renderer.create(<Cart cart={cart} />).toJSON();
  expect(tree).toMatchSnapshot();
});
