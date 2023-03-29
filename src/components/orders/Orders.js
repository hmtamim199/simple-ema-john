import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../reviewItem/ReviewItem';

const Orders = () => {
  const { previousCart} = useLoaderData();
  const [cart, setCart]= useState(previousCart)

  const handleRemoveItem = (id)=>{
    const remaining = cart.filter(product => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  const clearCart = () =>{
    setCart([]);
    deleteShoppingCart();
  }
  return (
    <div className='shop'>
     <div className='review-container'>
    {
      cart.map(product => <ReviewItem 
      key={product.id}
      product={product}
      handleRemoveItem={handleRemoveItem}
      ></ReviewItem>)
    }

    {
      cart.length === 0 && <h2>you have no item for review <Link to='/'>shop more</Link></h2>
    }
     </div>
     <div className='cart-container'>
    <Cart 
    clearCart={clearCart}
    cart={cart}  >
      <Link to='/shipping'>
        <button>Preceed Shipping</button>
      </Link>

    </Cart>
     </div>
    </div>
  );
};

export default Orders;