import React, { useState } from "react";

import "./style.css";
import PokeListItem from "../PokeListItem/PokeListItem";

function PokeList(props) {
  const { pokelist, getData } = props;
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddCart = (name, price, image, quantity) => {
    getData(name, price, image, quantity);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <input
        id="searchInput"
        type="text"
        placeholder="Pesquisar"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul id="pokelist">
        {pokelist.map((pokemon, index) => {
          if (!pokemon.name.includes(searchTerm)) {
            return null;
          }

          return <PokeListItem key={index} pokemon={pokemon} addCart={handleAddCart} />;
        })}
      </ul>
    </>
  );
}

export default PokeList;
