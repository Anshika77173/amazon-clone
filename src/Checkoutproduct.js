import React from 'react';
import './Checkoutproduct.css';
import {useStateValue} from "./Stateprovider";

const Checkoutproduct = ({ id, image, title, price, rating }) => {
    const [{basket},dispatch] = useStateValue();
    const removeFromBasket=()=>{
        // remove the item from basket
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id, 
        })
    }
  return (
    <div className='checkoutProduct'> {/* Changed to match CSS */}
      <img className='checkoutProduct__image' src={image} alt={title} />
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
        <button onClick={removeFromBasket}> Remove from basket</button>
      </div>
    </div>
  );
};

export default Checkoutproduct;
