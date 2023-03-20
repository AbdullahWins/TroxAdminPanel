import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { firebaseApp } from "../../Firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(firebaseApp);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //update existing user
  const updateUser = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };

  //login via third party providers
  const providerLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //login via user email
  const loginUserEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //create user using email
  const createNewUserEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //log user out
  const logout = () => {
    setLoading(true);
    signOut(auth);
  };

  console.log(user);

  //keeps the states updated upon change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  //exports
  const authInfo = {
    user,
    setUser,
    updateUser,
    createNewUserEmail,
    loginUserEmail,
    providerLogin,
    logout,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
