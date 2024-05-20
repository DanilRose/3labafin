import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar";
import CartPage from './CartPage';
import HomeRoute from './HomeRoute';
import ProductDetails from "./components/ProductDetails";
import list from './data'; 

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleNewClick = (item) => {
    setCart([...cart, item]);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const handleNewChange = (item, d) => {
    const ind = cart.findIndex(i => i.id === item.id); 
    const arr = [...cart];
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart(arr);
  };

  useEffect(() => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      setCart(JSON.parse(cartData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const products = list;

  return (
    <BrowserRouter>
      <Navbar setShow={setShow} size={cart.length} />
      <Routes>
        <Route path="/" element={<HomeRoute cart={cart} setCart={setCart} handleNewChange={handleNewChange} show={show} handleNewClick={handleNewClick} products={products} />} />
        <Route path="/product/:id" element={<ProductDetails handleClick={handleNewClick} />} />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} handleChange={handleNewChange} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
