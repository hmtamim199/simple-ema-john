import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
  const {img, name, price, ratings, category} = props.product;
 const {product, handleAddToCart} = props
  return (
    <div className='product'>
     <img src={img} alt="" />
     <div className='product-info'>
     <p className='product-name'>{name}</p>
     <h5>price={price}</h5>
     <p>{category}</p>
     <p><small>{ratings} star</small></p>
     </div>
    <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
      <p className='btn-text'>Add to cart</p>
       <FontAwesomeIcon icon={faShoppingCart} />
    </button>
    </div>
  );
};

export default Product;