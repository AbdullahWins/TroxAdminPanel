import React, { createContext, useEffect, useState } from "react";
import { firebaseFirestore } from "../../Firebase/firebase.config";
import {
  collection,
  doc,
  getDoc,
  //   getDoc,
  getDocs,
  //   serverTimestamp,
  //   setDoc,
  updateDoc,
} from "firebase/firestore";
// import { v4 as uuidv4 } from "uuid";
// import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

export const WarehouseContext = createContext();
const WarehouseProvider = ({ children }) => {
  const [warehouses, setWarehouses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchBarValue, setSearchBarValue] = useState(null);
  const [currentWarehouse, setCurrentWarehouse] = useState(null);
  const [filteredWarehousesBySearch, setFilteredWarehousesBySearch] = useState(
    []
  );

  //update one Warehouse status
  const updateWarehouseStatus = async (warehouse, status) => {
    try {
      const db = firebaseFirestore;
      const warehouseDocRef = doc(db, "warehouseDetails", warehouse);
      try {
        await updateDoc(warehouseDocRef, {
          user_status: status,
        });
        fetchWarehouses();
        console.log("warehouse status updated successfully");
      } catch {
        console.error("warehouse document not found");
      }
    } catch (error) {
      console.error("Error updating warehouse status", error);
    }
  };

  //update state in modals
  const clickHandlerForModals = (warehouseId, status) => {
    updateWarehouseStatus(warehouseId, status);
  };

  // fetch one warehouse
  const fetchSingleWarehouse = async (warehouseId) => {
    console.log(warehouseId);
    try {
      const ref = doc(firebaseFirestore, "warehouseDetails", warehouseId);
      const docSnap = await getDoc(ref);
      if (docSnap.exists()) {
        const warehouse = docSnap.data();
        if (currentWarehouse?.user_id === warehouse?.warehouse_id) {
          return;
        } else {
          setCurrentWarehouse(warehouse);
          console.log(warehouse);
        }
      } else {
        console.log("No such doCUMent!");
      }
    } catch (error) {
      console.error("Error fetching doCUMent!", error);
    }
  };

  // update one warehouse
  const updateSingleWarehouse = async (newWarehouse, id) => {
    try {
      const db = firebaseFirestore;
      const warehouseDocRef = doc(db, "userDetails", id);
      try {
        await updateDoc(warehouseDocRef, {
          user_name: newWarehouse?.user_name,
          user_email: newWarehouse?.user_email,
          user_contact: newWarehouse?.user_contact,
          user_dob: newWarehouse?.user_dob,
          user_gender: newWarehouse?.user_gender,
          user_country: newWarehouse?.user_country,
          user_address: newWarehouse?.user_address,
        });
        fetchWarehouses();
        console.log("warehouse updated successfully");
      } catch {
        console.error("warehouse document not found");
      }
    } catch (error) {
      console.error("Error updating warehouse", error);
    }
  };

  // Upload images to Firebase Storage
  //   const uploadImages = async (images) => {
  //     const storage = getStorage();
  //     const imageUrls = [];

  //     for (const image of images) {
  //       try {
  //         const imageName = uuidv4();
  //         const storageRef = ref(storage, `warehouse_documents/${imageName}`);
  //         const snapshot = await uploadBytes(storageRef, image);
  //         const downloadURL = await getDownloadURL(snapshot.ref);
  //         imageUrls.push(downloadURL);
  //       } catch (error) {
  //         console.error("Error uploading image", error);
  //       }
  //     }
  //     console.log(imageUrls);
  //     return imageUrls;
  //   };

  // add one warehouse
  //   const addOneWarehouse = async (newWarehouse, images) => {
  //     try {
  //       const db = firebaseFirestore;
  //       const warehouseId = uuidv4();
  //       const timeStamp = serverTimestamp();
  //       const warehouseDocRef = doc(db, "userDetails", warehouseId);
  //       try {
  //         await setDoc(warehouseDocRef, {
  //           rider_id: warehouseId,
  //           rider_name: newWarehouse?.rider_name,
  //           rider_email: newWarehouse?.rider_email,
  //           rider_contact: newWarehouse?.rider_contact,
  //           rider_dob: newWarehouse?.rider_dob,
  //           rider_gender: newWarehouse?.rider_gender,
  //           rider_country: newWarehouse?.rider_country,
  //           rider_state: newWarehouse?.rider_state,
  //           rider_work_location: newWarehouse?.rider_work_location,
  //           rider_address: newWarehouse?.rider_address,
  //           rider_status: newWarehouse?.rider_status,
  //           timestamp: timeStamp,
  //           rider_documents: await uploadImages(images),
  //         });
  //         fetchwarehouses();
  //         console.log("warehouse successfully added");
  //       } catch (error) {
  //         console.error("Error adding warehouse", error);
  //       }
  //     } catch (error) {
  //       console.error("Error adding warehouse", error);
  //     }
  //   };

  //fetch warehouses from database
  const fetchWarehouses = async () => {
    setIsLoading(true);
    await getDocs(collection(firebaseFirestore, "warehouseDetails")).then(
      (querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setWarehouses(newData);
        setIsLoading(false);
      }
    );
  };

  // reload the current page id
  const reloadCurrentPage = (setCurrentPage) => {
    setCurrentPage(1);
  };

  //filter warehouse by search value
  const filterWarehousesBySearch = (e) => {
    const searchValue = e.target.value;
    if (searchValue === null) {
      setFilteredWarehousesBySearch(warehouses);
    }
    const filteredWarehouses = warehouses?.filter((warehouse) =>
      warehouse?.user_name?.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredWarehousesBySearch(filteredWarehouses);
    setSearchBarValue(searchValue);
  };

  //filter warehouse by user type
  const filterWarehousesByUserType = (userType, e) => {
    if (userType === null) {
      setFilteredWarehousesBySearch(warehouses);
    }
    const filteredWarehouses = warehouses?.filter((warehouse) =>
      warehouse?.user_type?.includes(userType)
    );
    setFilteredWarehousesBySearch(filteredWarehouses);
  };

  //filter Warehouse by location type
  const filterWarehousesByLocationType = (locationType, e) => {
    if (locationType === null) {
      setFilteredWarehousesBySearch(warehouses);
    }
    const filteredWarehouses = warehouses?.filter((warehouses) =>
      warehouses?.user_type?.includes(locationType)
    );
    setFilteredWarehousesBySearch(filteredWarehouses);
  };

  //fetches all warehouses upon load
  useEffect(() => {
    fetchWarehouses();
  }, []);

  useEffect(() => {
    setFilteredWarehousesBySearch(warehouses);
  }, [warehouses]);

  //exports
  const WarehouseInfo = {
    fetchWarehouses,
    fetchSingleWarehouse,
    updateSingleWarehouse,
    warehouses,
    // addOneWarehouse,
    setWarehouses,
    searchBarValue,
    setSearchBarValue,
    filterWarehousesBySearch,
    filteredWarehousesBySearch,
    setFilteredWarehousesBySearch,
    filterWarehousesByUserType,
    filterWarehousesByLocationType,
    reloadCurrentPage,
    updateWarehouseStatus,
    // updateManyWarehouseStatus,
    isLoading,
    setIsLoading,
    currentWarehouse,
    setCurrentWarehouse,
    // uploadImages,
    clickHandlerForModals,
  };
  return (
    <WarehouseContext.Provider value={WarehouseInfo}>
      {children}
    </WarehouseContext.Provider>
  );
};

export default WarehouseProvider;
