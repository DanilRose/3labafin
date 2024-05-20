import React, { useState } from "react";
import { Slider } from "@mui/material";
import list from "../data";
import Cards from "./card";
import "../styles/amazon.css";
// import { Link } from 'react-router-dom';

const Amazon = ({ handleClick }) => {
  const [searchText, setSearchText] = useState("");
  const [priceRange, setPriceRange] = useState([0, 150]);

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const handlePriceRange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const filteredProducts = list.filter((product) => {
    const titleMatch = product.title
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const priceMatch =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    return titleMatch && priceMatch;
  });

  return (
    <section className="amazon-container">
      <div className="product-list">
        {filteredProducts.map((item) => (
          <div key={item.id} className="product-card">
            <Cards item={item} handleClick={handleClick} />
          </div>
        ))}
      </div>
      <div className="filters">
        <input
          type="text"
          placeholder="Поиск по названию"
          value={searchText}
          onChange={handleSearch}
        />
        <Slider
          value={priceRange}
          onChange={handlePriceRange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          min={0}
          max={150}
        />
      </div>
    </section>
  );
};


export default Amazon;