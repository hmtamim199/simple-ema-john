import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../reviewItem/ReviewItem';

const Orders = () => {
  const {products , previousCart} = useLoaderData();
  const [cart, setCart]= useState(previousCart)
  return (
    <div className='shop'>
     <div className='review-container'>
    {
      cart.map(product => <ReviewItem 
      key={product.id}
      product={product}
      ></ReviewItem>)
    }
     </div>
     <div className='cart-container'>
    <Cart cart={cart}></Cart>
     </div>
    </div>
  );
};

export default Orders;