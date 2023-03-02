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
import { firebaseApp, firebaseFirestore } from "../../Firebase/firebase.config";
import { addDoc, collection, getDocs } from "firebase/firestore";

export const AuthContext = createContext();
const auth = getAuth(firebaseApp);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const addTodo = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(firebaseFirestore, "todos"), {
        todo: "lol",
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const fetchPost = async () => {
    await getDocs(collection(firebaseFirestore, "orders")).then(
      (querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setOrders(newData);
        // console.log(newData);
      }
    );
  };

  useEffect(() => {
    fetchPost();
  }, []);

  //   const fetchPost = async () => {
  //     await getDocs(collection(firebaseFirestore, "Countries")).then(
  //       (querySnapshot) => {
  //         const newData = querySnapshot.docs.map((doc) => ({
  //           ...doc.data(),
  //           id: doc.id,
  //         }));
  //         setOrders(newData);
  //         console.log(newData);
  //       }
  //     );
  //   };

  useEffect(() => {
    // console.log(orders);
  }, [orders]);

  const updateUser = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };

  const providerLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const loginUserEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const createNewUserEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setLoading(true);
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    updateUser,
    createNewUserEmail,
    loginUserEmail,
    providerLogin,
    logout,
    loading,
    addTodo,
    fetchPost,
    orders,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
