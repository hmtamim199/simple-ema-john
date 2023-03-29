import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {

    const {user, logout} = useContext(AuthContext)
  return (
    <nav className='header'>
      <img src={logo} alt="" />
      <div>
        
   <Link to="/">Shop</Link >
        <Link to="/enventory">Enventory</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/about">About</Link>
        {
          user?.uid ?
              <button className='btn-logout' onClick={logout}>Log out </button>
          :
          
          <>
          
          <Link to="/login">Log In</Link>
        <Link to="/singup">Sing up</Link>
        </>
        }
        
      </div>
    </nav>
    
  );
};

export default Header;