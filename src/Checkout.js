import React from 'react'
import "./checkout.css";
import SUBTOTAL from './Subtotal';
import { useStateValue } from './Stateprovider';
import Checkoutproduct from './Checkoutproduct';
const Checkout = () => {
  const[{basket},dispatch]=useStateValue();
  return (
    <div className='checkout'>
   <div className="checkout__left">
    <img className='checkout__ad' src="offerimage.jpg" alt="" />
    <div>
        <h2 className='checkout__title'>Your Shopping Basket</h2>
        {basket.map(item =>(
          <Checkoutproduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          />
        ))}


    </div>
   </div>
      <div className='checkout__right'>
      <SUBTOTAL />
       
      </div>
    </div>
  )
}

export default Checkout
