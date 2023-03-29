
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './Singup.css'

const Singup = () => {

  const {createUser} = useContext(AuthContext)
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // const confirm = form.confirm.value;
    
    
    createUser(email, password)
    .then( result =>{
      const user = result.user;
      console.log(user)
    })
    .catch( error =>{
      console.error(error)
    })

  }

  return (
    <div>
    <div className="form-container">
      <h2 className="title-container">Singup</h2>
    
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" />
        </div>
        <div className="form-control">
          <label htmlFor="epassword">Password</label>
          <input type="password" name="password" id="" />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" name="confirm" id="" />
        </div>
        <input className='btn-control' type="submit" value="Sing up" />
        <h5>already have an account?<Link to="/login">Login</Link></h5>
      </form>
  
    
    </div>
  </div>
  );
};

export default Singup;