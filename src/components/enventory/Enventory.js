import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const Enventory = () => {
  const {user} = useContext(AuthContext)
  return (
    <div>
      <h2>thus is the Enventory page </h2>
      <p>{user?.name}</p>
    </div>
  );
};

export default Enventory;