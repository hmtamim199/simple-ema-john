import React from 'react';

import "./Cart.css"

const Cart = (props) => {

  const {cart, clearCart, children} = props;
  
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for(const product of cart){
    quantity = quantity + product.quantity;
    total = total+product.price *product.quantity;
    shipping = shipping+product.shipping
  }
  const tax = parseFloat((total*0.1).toFixed(2));
  
  const grandTotal = total+shipping+tax;
  return (
    <div className='cart'>
      <h1>this is cart</h1>
      <p>selected item:{quantity}</p>
      <p>total price${total}</p>
      <p>total shipping:${shipping}</p>
      <p>tax:${tax}</p>
      <h5>grand total:${grandTotal}</h5>
      <button onClick={clearCart}>clear Cart</button>
      {children}
    </div>
  );
};

export default Cart;