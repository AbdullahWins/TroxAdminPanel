import React, { createContext, useEffect, useState } from "react";
import { firebaseFirestore } from "../../Firebase/firebase.config";
import { addDoc, collection, getDocs } from "firebase/firestore";

export const OrderContext = createContext();
const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

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

  const fetchOrders = async () => {
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
    fetchOrders();
  }, []);

  const OrderInfo = {
    addTodo,
    fetchOrders,
    orders,
    setOrders,
  };
  return (
    <OrderContext.Provider value={OrderInfo}>{children}</OrderContext.Provider>
  );
};

export default OrdersProvider;
