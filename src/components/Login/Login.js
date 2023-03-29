import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './Login.css'

const Login = () => {
    const navigate = useNavigate()
  const {singin} = useContext(AuthContext)

  const handleSubmit = (event) =>{
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    singin(email, password)
    .then( result =>{
      const user = result.user;
      console.log(user)
      form.reset()
      navigate('/')
    })
    .catch( error => console.error)
  }

  return (
    <div>
      <div className="form-container">
        <h2 className="title-container">Login</h2>
      
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" />
          </div>
          <input className='btn-control' type="submit" value="Log in" />
          <h5>new to emajohn?<Link to="/singup">create new account</Link></h5>
        </form>
    
      
      </div>
    </div>
  );
};

export default Login;