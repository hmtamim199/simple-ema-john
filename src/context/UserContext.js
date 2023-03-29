import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../firebase/Firebase.init';

 export const AuthContext = createContext()

 const auth = getAuth(app)

const UserContext = ({children}) => {
  const [user, setUser] = useState(null)

 const createUser = (email, password ) =>{
  return createUserWithEmailAndPassword(auth, email, password)
 }

 const singin = (email, password) =>{
  return signInWithEmailAndPassword(auth, email, password)
 }

 const logout = () =>{
  return signOut(auth)
 }

 useEffect( () =>{
 const unSubscribe = onAuthStateChanged(auth, currentUser =>{
    console.log( 'oAuthstatechanged' ,currentUser)
    setUser(currentUser)
  } )
  
  return () => unSubscribe()

 },[])

  const authInfo = {user,createUser, singin, logout}
  return (
   
    <AuthContext.Provider value={authInfo} >
      {children}

    </AuthContext.Provider>

  );
};

export default UserContext;