import React from 'react';
import './product.css';
import { useStateValue } from './Stateprovider';

const Product = ({ id, title, image, price, rating }) => {
  const [, dispatch] = useStateValue(); // Destructure only dispatch

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button> {/* Fix onClick */}
    </div>
  );
};

export default Product;
