import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { firebaseFirestore } from "../../Firebase/firebase.config";
import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

export const PaymentContext = createContext();
const PaymentProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  //   const [allPaymentTypes, setAllPaymentTypes] = useState(false);
  //   const [currentPaymentType, setCurrentPaymentType] = useState(false);

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

  //   update one payment method
  const updateSinglePaymentMethod = async (newGateway, logo) => {
    try {
      const db = firebaseFirestore;
      const paymentDocRef = doc(
        db,
        "paymentDetails",
        newGateway?.gateway_name
      );
      try {
        await updateDoc(paymentDocRef, {
          gateway_name: newGateway?.gateway_name,
          gateway_status: newGateway?.gateway_status,
          gateway_secret_key: newGateway?.gateway_secret_key,
          gateway_public_key: newGateway?.gateway_public_key,
          gateway_logo: await uploadImages(logo),
        });
        console.log("Payment method updated successfully");
      } catch {
        console.error("Payment method document not found");
      }
    } catch (error) {
      console.error("Error updating Payment method", error);
    }
  };

  // Upload images to Firebase Storage
  const uploadImages = async (images) => {
    const storage = getStorage();
    const imageUrls = [];

    for (const image of images) {
      try {
        const imageName = uuidv4();
        const storageRef = ref(storage, `payment_type_logos/${imageName}`);
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

  //exports
  const PaymentInfo = {
    isLoading,
    setIsLoading,
    updateSinglePaymentMethod,
  };
  return (
    <PaymentContext.Provider value={PaymentInfo}>
      {children}
    </PaymentContext.Provider>
  );
};

export default PaymentProvider;
