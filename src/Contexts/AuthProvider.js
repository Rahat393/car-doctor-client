import React, { createContext, useEffect, useState } from 'react';
 
import app from '../Firebase/Firebase';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updateProfile} from 'firebase/auth'


export const AuthContext = createContext()
const auth = getAuth(app)




const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo)
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  const providerLogin = (provider) => {
    return  signInWithPopup(auth, provider)
  }

  useEffect( () => {
   const unSubscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser)
      setLoading(false)
    });
    return () => unSubscribe
  } , [])

  const authInfo ={
    createUser,
    signIn,
    updateUser,
    user,
    logOut,
    loading,
    providerLogin
  }

  
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;