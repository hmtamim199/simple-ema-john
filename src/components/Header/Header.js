import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
  return (
    <nav className='header'>
      <img src={logo} alt="" />
      <div>
        <a href="/home">Home</a>
        <a href="/shop">Shop</a>
        <a href="/enventory">Enventory</a>
        <a href="/aboute">Aboute</a>
      </div>
    </nav>
    
  );
};

export default Header;