import React from 'react';
import "./Cart.css"

const Cart = (props) => {

  const {cart} = props;
console.log(cart)
  let total = 0;
  let shipping = 0;

  for(const product of cart){
    total = total+product.price
    shipping = shipping+product.shipping
  }
  const tax = (total*0.1).toFixed(2);
  

  return (
    <div className='cart'>
      <h1>this is cart</h1>
      <p>selected item:{cart.length}</p>
      <p>total price${total}</p>
      <p>total shipping:${shipping}</p>
      <p>tax:${tax}</p>
      <h5>grand total:</h5>
    </div>
  );
};

export default Cart;