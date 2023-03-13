import React, { createContext, useEffect, useState } from "react";
import { firebaseFirestore } from "../../Firebase/firebase.config";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

export const DeliveryContext = createContext();
const DeliveryProvider = ({ children }) => {
  const [riders, setRiders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchBarValue, setSearchBarValue] = useState(null);
  const [currentRider, setCurrentRider] = useState(null);
  const [filteredRidersBySearch, setFilteredRidersBySearch] = useState([]);

  //update one rider status
  const updateRiderStatus = async (rider, status) => {
    try {
      const db = firebaseFirestore;
      const orderDocRef = doc(db, "riders", rider);
      try {
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

  // Upload images to Firebase Storage
  const uploadImages = async (images) => {
    const storage = getStorage();
    const imageUrls = [];

    for (const image of images) {
      try {
        const imageName = uuidv4();
        const storageRef = ref(storage, `nadeImages/${imageName}`);
        const snapshot = await uploadBytes(storageRef, image);
        const downloadURL = await getDownloadURL(snapshot.ref);
        imageUrls.push(downloadURL);
      } catch (error) {
        console.error("Error uploading image", error);
      }
    }
    console.log(imageUrls);
    return imageUrls;
  };

  // add one rider
  const addOneRider = async (newRider, images) => {
    try {
      const db = firebaseFirestore;
      const orderDocRef = doc(db, "riderDetails", newRider.rider_email);
      try {
        await setDoc(orderDocRef, {
          rider_name: newRider?.rider_name,
          rider_contact: newRider?.rider_contact,
          rider_dob: newRider?.rider_dob,
          rider_gender: newRider?.rider_gender,
          rider_work_location: newRider?.rider_work_location,
          rider_address: newRider?.rider_address,
          rider_documents: await uploadImages(images),
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

  //fetch riders from database
  const fetchRiders = async () => {
    setIsLoading(true);
    await getDocs(collection(firebaseFirestore, "riderDetails")).then(
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

  //filter rider by user type
  const filterRidersByUserType = (userType, e) => {
    if (userType === null) {
      setFilteredRidersBySearch(riders);
    }
    const filteredRiders = riders?.filter((rider) =>
      rider?.rider_type?.includes(userType)
    );
    setFilteredRidersBySearch(filteredRiders);
  };

  //filter rider by user type
  const filterRidersByLocationType = (locationType, e) => {
    if (locationType === null) {
      setFilteredRidersBySearch(riders);
    }
    const filteredRiders = riders?.filter((rider) =>
      rider?.rider_type?.includes(locationType)
    );
    setFilteredRidersBySearch(filteredRiders);
  };

  //fetches all rider upon load
  useEffect(() => {
    fetchRiders();
  }, []);

  //exports
  const RiderInfo = {
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
    uploadImages,
  };
  return (
    <DeliveryContext.Provider value={RiderInfo}>
      {children}
    </DeliveryContext.Provider>
  );
};

export default DeliveryProvider;
