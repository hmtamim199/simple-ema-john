import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const About = () => {
  const {user} = useContext(AuthContext)
  return (
    <div>
      <h2>this is the about page</h2>
      <p>{user.name}</p>
    </div>
  );
};

export default About;<h2>this is the about page</h2>