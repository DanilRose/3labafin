import React from 'react';
import Cart from "./components/cart";

const CartPage = ({ cart, setCart, handleChange }) => {
  return <Cart cart={cart} setCart={setCart} handleChange={handleChange} />;
};

export default CartPage;