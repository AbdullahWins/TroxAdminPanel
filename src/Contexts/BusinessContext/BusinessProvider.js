import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { firebaseFirestore } from "../../Firebase/firebase.config";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

export const BusinessContext = createContext();
const BusinessProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [allParcelTypes, setAllParcelTypes] = useState(false);
  const [currentParcelType, setCurrentParcelType] = useState(false);

  //   //update one rider status
  //   const updateRiderStatus = async (rider, status) => {
  //     try {
  //       const db = firebaseFirestore;
  //       const riderDocRef = doc(db, "riderDetails", rider);
  //       try {
  //         await updateDoc(riderDocRef, {
  //           rider_status: status,
  //         });
  //         console.log("Rider status updated successfully");
  //       } catch {
  //         console.error("Rider document not found");
  //       }
  //     } catch (error) {
  //       console.error("Error updating rider status", error);
  //     }
  //   };

  //   //fetch one rider
  //   const fetchSingleRider = async (riderId) => {
  //     console.log(riderId);
  //     try {
  //       const ref = doc(firebaseFirestore, "riders", riderId);
  //       const docSnap = await getDoc(ref);
  //       if (docSnap.exists()) {
  //         const rider = docSnap.data();
  //         if (currentRider?.rider_id === rider?.rider_id) {
  //           return;
  //         } else {
  //           setCurrentRider(rider);
  //           console.log(rider);
  //         }
  //       } else {
  //         console.log("No such doCUMent!");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching doCUMent!", error);
  //     }
  //   };

  //update one rider
  //   const updateSingleRider = async (newRider, id) => {
  //     try {
  //       const db = firebaseFirestore;
  //       const riderDocRef = doc(db, "riderDetails", id);
  //       try {
  //         await updateDoc(riderDocRef, {
  //           rider_name: newRider?.rider_name,
  //           rider_email: newRider?.rider_email,
  //           rider_contact: newRider?.rider_contact,
  //           rider_dob: newRider?.rider_dob,
  //           rider_gender: newRider?.rider_gender,
  //           rider_work_location: newRider?.rider_work_location,
  //           rider_address: newRider?.rider_address,
  //         });
  //         console.log("Rider updated successfully");
  //       } catch {
  //         console.error("Rider document not found");
  //       }
  //     } catch (error) {
  //       console.error("Error updating rider", error);
  //     }
  //   };

  // Upload images to Firebase Storage
  const uploadImages = async (images) => {
    const storage = getStorage();
    const imageUrls = [];

    for (const image of images) {
      try {
        const imageName = uuidv4();
        const storageRef = ref(storage, `parcel_type_logos/${imageName}`);
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

  // add delivery cost
  const addDeliveryCost = async (deliveryCost) => {
    try {
      const db = firebaseFirestore;
      const packageType = deliveryCost?.package_type;
      const timeStamp = serverTimestamp();
      const deliveryCostDocRef = doc(db, "deliveryCost", packageType);
      try {
        await setDoc(deliveryCostDocRef, {
          local_bellow_one: deliveryCost?.local_bellow_one,
          local_one_to_five: deliveryCost?.local_one_to_five,
          local_five_to_ten: deliveryCost?.local_five_to_ten,
          domestic_bellow_one: deliveryCost?.domestic_bellow_one,
          domestic_one_to_five: deliveryCost?.domestic_one_to_five,
          domestic_five_to_ten: deliveryCost?.domestic_five_to_ten,
          international_bellow_one: deliveryCost?.international_bellow_one,
          international_one_to_five: deliveryCost?.international_one_to_five,
          international_five_to_ten: deliveryCost?.international_five_to_ten,
          package_type: deliveryCost?.package_type,
          timestamp: timeStamp,
        });
        console.log("Delivery Cost successfully added");
      } catch (error) {
        console.error("Error adding Delivery Cost", error);
      }
    } catch (error) {
      console.error("Error adding Delivery Cost", error);
    }
  };

  // add delivery man charge
  const addDeliveryManCharge = async (deliveryManCharge) => {
    try {
      const db = firebaseFirestore;
      const packageType = deliveryManCharge?.package_type;
      const timeStamp = serverTimestamp();
      const deliveryManChargeDocRef = doc(db, "deliveryManCharge", packageType);
      try {
        await setDoc(deliveryManChargeDocRef, {
          local_delivery_charge: deliveryManCharge?.local_delivery_charge,
          domestic_delivery_charge: deliveryManCharge?.domestic_delivery_charge,
          international_delivery_charge:
            deliveryManCharge?.international_delivery_charge,
          package_type: deliveryManCharge?.package_type,
          timestamp: timeStamp,
        });
        console.log("Delivery Cost successfully added");
      } catch (error) {
        console.error("Error adding Delivery Cost", error);
      }
    } catch (error) {
      console.error("Error adding Delivery Cost", error);
    }
  };

  // add delivery parcel types
  const addParcelTypes = async (parcelType, images) => {
    try {
      const db = firebaseFirestore;
      const typeOfParcel = parcelType?.parcel_type_name;
      const timeStamp = serverTimestamp();
      const parcelTypesDocRef = doc(db, "parcelTypes", typeOfParcel);
      try {
        await setDoc(parcelTypesDocRef, {
          parcel_type_name: parcelType?.parcel_type_name,
          parcel_type_subtitle: parcelType?.parcel_type_subtitle,
          parcel_type_logo: await uploadImages(images),
          timestamp: timeStamp,
        });
        console.log("Parcel Type successfully added");
      } catch (error) {
        console.error("Error adding Parcel Type", error);
      }
    } catch (error) {
      console.error("Error adding Parcel Type", error);
    }
  };

  //exports
  const BusinessInfo = {
    isLoading,
    setIsLoading,
    addDeliveryCost,
    addDeliveryManCharge,
    currentParcelType,
    setCurrentParcelType,
    addParcelTypes,
    allParcelTypes,
    setAllParcelTypes,
  };
  return (
    <BusinessContext.Provider value={BusinessInfo}>
      {children}
    </BusinessContext.Provider>
  );
};

export default BusinessProvider;
