import React from 'react';
import "./Cart.css"

const Cart = ({cart}) => {
  return (
    <div className='cart'>
      <h1>this is cart</h1>
      <p>selected item:{cart.length}</p>
    </div>
  );
};

export default Cart;