import React, { createContext, useEffect, useState } from "react";
import { firebaseFirestore } from "../../Firebase/firebase.config";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";

export const DeliveryContext = createContext();
const DeliveryProvider = ({ children }) => {
  const [riders, setRiders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchBarValue, setSearchBarValue] = useState(null);
  const [currentRider, setCurrentRider] = useState(null);
  const [filteredRidersBySearch, setFilteredRidersBySearch] = useState([]);

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

  //update one rider status
  const updateRiderStatus = async (rider, status) => {
    try {
      const db = firebaseFirestore;
      const orderDocRef = doc(db, "riders", rider);
      try {
        // update the order document if it exists
        await updateDoc(orderDocRef, {
          rider_status: status,
        });
        fetchRiders();
        console.log("Order status updated successfully");
      } catch {
        console.error("Order document not found");
      }
    } catch (error) {
      console.error("Error updating order status", error);
    }
  };

  //update many rider status
  const updateManyRiderStatus = async (riders, status) => {
    try {
      const db = firebaseFirestore;
      const orderDocsRefs = riders.map((rider) => doc(db, "riders", rider));
      try {
        await Promise.all(
          orderDocsRefs.map((orderDocRef) =>
            updateDoc(orderDocRef, {
              order_status: status,
            })
          )
        );
        fetchRiders();
        console.log("Rider statuses updated successfully");
      } catch {
        console.error("One or more order documents not found");
      }
    } catch (error) {
      console.error("Error updating order statuses", error);
    }
  };

  //fetch one rider
  const fetchSingleRider = async (riderId) => {
    console.log(riderId);
    try {
      const ref = doc(firebaseFirestore, "riders", riderId);
      const docSnap = await getDoc(ref);
      if (docSnap.exists()) {
        const rider = docSnap.data();
        if (currentRider?.rider_id === rider?.rider_id) {
          return;
        } else {
          setCurrentRider(rider);
          console.log(rider);
        }
      } else {
        console.log("No such doCUMent!");
      }
    } catch (error) {
      console.error("Error fetching doCUMent!", error);
    }
  };

  //update one order
  const updateSingleRider = async (newRider, id) => {
    try {
      const db = firebaseFirestore;
      const orderDocRef = doc(db, "riders", id);
      try {
        // update the order document if it exists
        await updateDoc(orderDocRef, {
          rider_name: newRider?.sender_name,
          rider_email: newRider?.sender_name,
          rider_contact: newRider?.sender_name,
          rider_dob: newRider?.sender_name,
          rider_gender: newRider?.sender_name,
          rider_work_location: newRider?.sender_name,
          rider_address: newRider?.sender_name,
        });
        fetchRiders();
        console.log("Order updated successfully");
      } catch {
        console.error("Order document not found");
      }
    } catch (error) {
      console.error("Error updating order", error);
    }
  };

  // //add one order
  // const addOneRider = async (newRider) => {
  //   try {
  //     const db = firebaseFirestore;
  //     const orderDocRef = collection(db, "riders");
  //     try {
  //       // add the order document if it exists
  //       await addDoc(orderDocRef, {
  //         rider_name: newRider?.rider_name,
  //         rider_email: newRider?.rider_email,
  //         rider_contact: newRider?.rider_contact,
  //         rider_dob: newRider?.rider_dob,
  //         rider_gender: newRider?.rider_gender,
  //         rider_work_location: newRider?.rider_work_location,
  //         rider_address: newRider?.rider_address,
  //       });
  //       fetchRiders();
  //       console.log("Rider successfully");
  //     } catch (error) {
  //       console.error("Error updating order", error);
  //     }
  //   } catch (error) {
  //     console.error("Error updating order", error);
  //   }
  // };

  // add one rider
  const addOneRider = async (newRider) => {
    try {
      const db = firebaseFirestore;
      const orderDocRef = doc(db, "riders", newRider.rider_email);
      try {
        // add the rider document if it exists
        await setDoc(orderDocRef, {
          rider_name: newRider?.rider_name,
          rider_contact: newRider?.rider_contact,
          rider_dob: newRider?.rider_dob,
          rider_gender: newRider?.rider_gender,
          rider_work_location: newRider?.rider_work_location,
          rider_address: newRider?.rider_address,
          rider_documents: newRider?.rider_documents,
        });
        fetchRiders();
        console.log("Rider successfully added");
      } catch (error) {
        console.error("Error adding rider", error);
      }
    } catch (error) {
      console.error("Error adding rider", error);
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
  const fetchRiders = async () => {
    setIsLoading(true);
    await getDocs(collection(firebaseFirestore, "riders")).then(
      (querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setRiders(newData);
        console.log(newData);
        setIsLoading(false);
      }
    );
  };

  // reload the current page id
  const reloadCurrentPage = (setCurrentPage) => {
    setCurrentPage(1);
  };

  // filterRidersByStatus(orders, "pending");

  //filter rider by search value
  const filterRidersBySearch = (e) => {
    const searchValue = e.target.value;
    if (searchValue === null) {
      setFilteredRidersBySearch(riders);
    }
    const filteredOrders = riders?.filter((rider) =>
      rider?.rider_id?.includes(searchValue)
    );
    setFilteredRidersBySearch(filteredOrders);
    setSearchBarValue(searchValue);
  };

  //filter order by user type
  const filterRidersByUserType = (userType, e) => {
    if (userType === null) {
      setFilteredRidersBySearch(riders);
    }
    const filteredRiders = riders?.filter((rider) =>
      rider?.rider_type?.includes(userType)
    );
    setFilteredRidersBySearch(filteredRiders);
  };

  //filter order by user type
  const filterRidersByLocationType = (locationType, e) => {
    if (locationType === null) {
      setFilteredRidersBySearch(riders);
    }
    const filteredRiders = riders?.filter((rider) =>
      rider?.rider_type?.includes(locationType)
    );
    setFilteredRidersBySearch(filteredRiders);
  };

  useEffect(() => {
    fetchRiders();
  }, []);

  const RiderInfo = {
    addTodo,
    fetchRiders,
    fetchSingleRider,
    riders,
    addOneRider,
    setRiders,
    searchBarValue,
    setSearchBarValue,
    filterRidersBySearch,
    filteredRidersBySearch,
    setFilteredRidersBySearch,
    filterRidersByUserType,
    filterRidersByLocationType,
    reloadCurrentPage,
    updateRiderStatus,
    updateManyRiderStatus,
    isLoading,
    setIsLoading,
    currentRider,
    setCurrentRider,
    updateSingleRider,
  };
  return (
    <DeliveryContext.Provider value={RiderInfo}>
      {children}
    </DeliveryContext.Provider>
  );
};

export default DeliveryProvider;
