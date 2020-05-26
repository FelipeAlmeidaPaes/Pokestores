import React, { useState } from "react";
import _ from "lodash";
import './style.css';

function PokeListItem({ pokemon, addCart }) {
  const [quantity, setQuantity] = useState(1);
  const max_quantity = 6;
  const name = pokemon.name;
  const image = pokemon.sprites["front_default"];
  const price = pokemon.order + ",00";
  const abilities = pokemon.abilities.map((ability) => {
    return ability.ability.name;
  });

  return (
    <>
      <li className="poke">
        <img className="image" src={image ? image : ""} alt={"pokemon.img"} />
        <p className="name">{name}</p>
        <p className="price">
          <b>R$ {price}</b>
        </p>
        <div className="form-control">
          <label>qtd:</label>
          <select
            className="select__quantity"
            onChange={(e) => setQuantity(e.target.value)}
          >
            {_.range(1, max_quantity + 1).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <button
          className="addCartButton"
          onClick={() => addCart(name, price, image, quantity)}
        >
          Adicionar
        </button>

        <span className="tooltip-text">
          habilidades: {abilities.join(", ")}
        </span>
      </li>
    </>
  );
}

export default PokeListItem;
