import React from 'react';
import Amazon from "./components/amazon";
import Cart from "./components/cart";

const HomeRoute = ({ cart, setCart, handleNewChange, show, handleNewClick, products }) => {
  return show ? (
    <Amazon handleClick={handleNewClick} products={products} />
  ) : (
    <Cart cart={cart} setCart={setCart} handleChange={handleNewChange} />
  );
};
export default HomeRoute;