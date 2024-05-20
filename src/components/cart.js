import React, { useState, useEffect } from "react";
import "../styles/cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const newCart = cart.filter(item => item.id!== id);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  const handleQuantity = (item, quantity) => {
    if (quantity === -1 && item.amount === 1) {
      return; 
    }

    const updatedCart = cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        return {
          ...cartItem,
          amount: cartItem.amount + quantity,
        };
      }
      return cartItem;
    });
    setCart(updatedCart);
    handlePrice();
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleQuantity(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleQuantity(item, -1)} disabled={item.amount === 1}>
              -
            </button>
          </div>
          <div>
            <span>
              <span>{item.amount * item.price} руб.</span>
            </span>
            <button onClick={() => handleRemove(item.id)}>Удалить товар+</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Сумма:</span>
        <span>{price} руб.</span>
      </div>
    </article>
  );
};

export default Cart;