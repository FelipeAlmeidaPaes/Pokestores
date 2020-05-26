import React, { useState, useEffect } from "react";
import Modal from "react-modal";

import "./style.css";

const ModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#f3f3f3",
    textAlign: "center",
    border: "5px dashed #a2a2a2",
    padding: "10px",
  },
};

if (process.env.NODE_ENV !== "test") Modal.setAppElement("#root");

function Cart({ cart, onSetCart }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("CartFight", JSON.stringify(cart));
    }
  }, [cart]);

  const openModalAndCheckout = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    onSetCart();
  };

  const closeModal = () => {
    setIsOpen(false);
    window.location.reload(false);
  };

  const total = cart
    .map((item) => parseInt(item.price) * parseInt(item.quantity))
    .reduce((acc, cur) => {
      return parseInt(acc) + parseInt(cur);
    }, 0);

  return (
    <>
      <ul id="cartList">
        <li id="title">
          <h4>CARRINHO</h4>
        </li>
        {cart.map((item, index) => {
          return (
            <li key={index}>
              <img className="pokeImage" src={item.image} alt="poke img" />
              <p className="pokeInfo">
                <span className="pokeQuantity">{item.quantity} x</span>
                <span className="pokeName">{item.name}</span>
                <span className="pokePrice">
                  {parseInt(item.price) * parseInt(item.quantity)},00
                </span>
              </p>
            </li>
          );
        })}

        <li id="total">
          <span>Total: </span>
          <span>
            <b>R$ {parseFloat(total).toFixed(2)}</b>
          </span>
        </li>

        <li id="buyButton">
          <button
            onClick={openModalAndCheckout}
            disabled={cart.length > 0 ? false : true}
          >
            Finalizar
          </button>
        </li>
      </ul>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={ModalStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal} id="closeModal" />
        <h2>Obrigado!</h2>
        <p>Você ganhou de volta R$ {(5 * total) / 100}</p>
      </Modal>
    </>
  );
}

export default Cart;
