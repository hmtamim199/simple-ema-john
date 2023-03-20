import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Orders = () => {
  const {products , previousCart} = useLoaderData();
  const [cart, setCart]= useState(previousCart)
  return (
    <div className='shop'>
     <div className='product-container'>

     </div>
     <div className='cart-container'>
    <Cart cart={cart}></Cart>
     </div>
    </div>
  );
};

export default Orders;