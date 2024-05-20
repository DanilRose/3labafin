import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import list from '../data';
import Rating from '@mui/material/Rating';
import '../styles/ProductDetails.css';

const ProductDetails = ({ handleClick }) => {
  const { id } = useParams();
  const product = list.find((item) => item.id === parseInt(id));

  const [rating, setRating] = useState(0);

  useEffect(() => {
    const savedRating = localStorage.getItem(`rating_${product.id}`);
    if (savedRating) {
      setRating(parseFloat(savedRating));
    } else {
      setRating(product.rating || 0);
    }
  }, [product.id, product.rating]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const { title, price, img, amount, description } = product;

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
    localStorage.setItem(`rating_${product.id}`, newValue);
  };

  return (
    <div className="product-details-container">
      <div className="product-image-container">
        <img src={img} alt={title} />
      </div>
      <div className="product-info-container">
        <div className="product-title-price-button-container">
          <div className="product-title-price-container">
            <h2>{title}</h2>
            <p className="product-price">Цена: {price} руб.</p>
          </div>
          <div className="button-rating-container">
            <button className="add-to-cart-button" onClick={() => handleClick(product)}>
              в корзину
            </button>
            <div className="product-rating">
              <Rating
                name="product-rating"
                value={rating}
                onChange={handleRatingChange}
                size="large"
              />
            </div>
          </div>
        </div>
        <div className="product-description-container">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
