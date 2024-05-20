import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ item, handleClick }) => {
  const { title, price, img, id } = item;

  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <Link to={`/product/${id}`} className="link">
          <p className="aaa">{title}</p>
        </Link>
        <p>Цена - {price}руб.</p>
        <button className="details1" onClick={() => handleClick(item)}>
          в корзину
        </button>
      </div>
    </div>
  );
};

export default Cards;
