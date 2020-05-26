import React, { useState, useEffect } from "react";
import PokeList from "../../Components/PokeList/Pokelist";
import Cart from "../../Components/Cart/Cart";
import _ from "lodash";

import "./style.css";

function Home() {
  const [pokelist, setPokelist] = useState([]);
  const [cartList, setCartList] = useState(
    localStorage.getItem("Cart") !== null
      ? JSON.parse(localStorage.getItem("Cart"))
      : []
  );

  async function gatherPokemonData() {
    const typeInfo = await fetch("https://pokeapi.co/api/v2/type/15");
    const typeInfoResponse = await typeInfo.json();
    const pokemon = typeInfoResponse.pokemon.map(async (p) => {
      const result = await fetch(p.pokemon.url);
      return result.json();
    });

    return Promise.all(pokemon);
  }

  useEffect(() => {
    gatherPokemonData().then((response) => {
      setPokelist(response);
    });
  }, []);

  const updateCartList = (name, price, image, quantity) => {
    const exists = _.findIndex(cartList, { name: name }) !== -1 ? true : false;
    if (exists) {
      const index = _.findIndex(cartList, { name: name });
      setCartList(
        cartList.map((item) => {
          if (item === cartList[index]) return { ...item, quantity: quantity };
          return item;
        })
      );
    } else {
      setCartList((prevCartList) => [
        ...prevCartList,
        {
          name: name,
          price: price,
          image: image,
          quantity: quantity,
        },
      ]);
    }
  };

  const getPokeList = (name, price, image, quantity) => {
    updateCartList(name, price, image, quantity);
  };

  const checkout = () => {
    localStorage.removeItem("Cart");
  };

  return (
    <div id="home" className="home">
      <PokeList pokelist={pokelist} getData={getPokeList} />
      <Cart cart={cartList} onSetCart={checkout} />
    </div>
  );
}

export default Home;
