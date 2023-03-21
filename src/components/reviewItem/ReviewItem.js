import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({product}) => {
  const {name, price, quantity,img}= product;
  return (
    <div className='review-item'>
     <div>
      <img src={img} alt="" />
     </div>
     <div className='review-item-details'>
      <div className='item-container'>
        <p>{name}</p>
        <p>{price}</p>
        <p><small>quantity{quantity}</small></p>
      </div>
      <div className="delete-container">
        <button className='btn-delete'>
          <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
        </button>
      </div>
     </div>
    </div>
  );
};

export default ReviewItem;