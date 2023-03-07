import React, { createContext, useEffect, useState } from "react";
import { firebaseFirestore } from "../../Firebase/firebase.config";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

export const OrderContext = createContext();
const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchBarValue, setSearchBarValue] = useState(null);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [filteredOrdersBySearch, setFilteredOrdersBySearch] = useState([]);

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
  

  //update one order status
  const updateOrderStatus = async (order, status) => {
    try {
      const db = firebaseFirestore;
      const orderDocRef = doc(db, "orders", order);
      try {
        // update the order document if it exists
        await updateDoc(orderDocRef, {
          order_status: status,
        });
        fetchOrders();
        console.log("Order status updated successfully");
      } catch {
        console.error("Order document not found");
      }
    } catch (error) {
      console.error("Error updating order status", error);
    }
  };

  //update many order status
  const updateManyOrderStatus = async (orders, status) => {
    try {
      const db = firebaseFirestore;
      const orderDocsRefs = orders.map(
        (order) => doc(db, "orders", order)
      );
      try {
        await Promise.all(
          orderDocsRefs.map((orderDocRef) =>
            updateDoc(orderDocRef, {
              order_status: status,
            })
          )
        );
        fetchOrders();
        console.log("Order statuses updated successfully");
      } catch {
        console.error("One or more order documents not found");
      }
    } catch (error) {
      console.error("Error updating order statuses", error);
    }
  };

  // const updateOrderStatus = async (order, status) => {
  //   try {
  //     const db = firebaseFirestore; // get the Firestore instance
  //     const ordersRef = db.collection("orders"); // get a reference to the "orders" collection
  //     const orderDoc = await ordersRef.doc(order).get(); // get the order document
  //     if (orderDoc.exists) {
  //       // update the order document if it exists
  //       await ordersRef.doc(order).update({ order_status: status });
  //       console.log("Order status updated successfully");
  //     } else {
  //       console.error("Order document not found");
  //     }
  //   } catch (error) {
  //     console.error("Error updating order status", error);
  //   }
  // };

  //fetch orders from database
  const fetchOrders = async () => {
    setIsLoading(true);
    await getDocs(collection(firebaseFirestore, "orders")).then(
      (querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setOrders(newData);
        setFilteredOrdersBySearch(newData);
        setIsLoading(false);
      }
    );
  };

  // reload the current page id
  const reloadCurrentPage = (setCurrentPage) => {
    setCurrentPage(1);
  };

  // filterOrdersByStatus(orders, "pending");

  //filter order by search value
  const filterOrdersBySearch = (e) => {
    const searchValue = e.target.value;
    if (searchValue === null) {
      setFilteredOrdersBySearch(orders);
    }
    const filteredOrders = orders?.filter((order) =>
      order?.order_id?.includes(searchValue)
    );
    setFilteredOrdersBySearch(filteredOrders);
    setSearchBarValue(searchValue);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const OrderInfo = {
    addTodo,
    fetchOrders,
    orders,
    setOrders,
    searchBarValue,
    setSearchBarValue,
    filterOrdersBySearch,
    filteredOrdersBySearch,
    setFilteredOrdersBySearch,
    reloadCurrentPage,
    updateOrderStatus,
    updateManyOrderStatus,
    isLoading,
    setIsLoading,
    currentOrder,
    setCurrentOrder,
  };
  return (
    <OrderContext.Provider value={OrderInfo}>{children}</OrderContext.Provider>
  );
};

export default OrdersProvider;
