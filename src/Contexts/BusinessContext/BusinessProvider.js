import React, { createContext, useState } from "react";
import { firebaseFirestore } from "../../Firebase/firebase.config";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

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

  // add delivery cost
  const addDeliveryCost = async (DeliveryCost) => {
    try {
      const db = firebaseFirestore;
      const packageType = DeliveryCost?.package_type;
      const timeStamp = serverTimestamp();
      const deliveryCostDocRef = doc(db, "deliveryCost", packageType);
      try {
        await setDoc(deliveryCostDocRef, {
          local_bellow_one: DeliveryCost?.local_bellow_one,
          local_one_to_five: DeliveryCost?.local_one_to_five,
          local_five_to_ten: DeliveryCost?.local_five_to_ten,
          domestic_bellow_one: DeliveryCost?.domestic_bellow_one,
          domestic_one_to_five: DeliveryCost?.domestic_one_to_five,
          domestic_five_to_ten: DeliveryCost?.domestic_five_to_ten,
          international_bellow_one: DeliveryCost?.international_bellow_one,
          international_one_to_five: DeliveryCost?.international_one_to_five,
          international_five_to_ten: DeliveryCost?.international_five_to_ten,
          package_type: DeliveryCost?.package_type,
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

  // add delivery cost
  const addDeliveryManCharge = async (DeliveryManCharge) => {
    try {
      const db = firebaseFirestore;
      const packageType = DeliveryManCharge?.package_type;
      const timeStamp = serverTimestamp();
      const deliveryManChargeDocRef = doc(db, "deliveryManCharge", packageType);
      try {
        await setDoc(deliveryManChargeDocRef, {
          local_delivery_charge: DeliveryManCharge?.local_delivery_charge,
          domestic_delivery_charge: DeliveryManCharge?.domestic_delivery_charge,
          international_delivery_charge:
            DeliveryManCharge?.international_delivery_charge,
          package_type: DeliveryManCharge?.package_type,
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

  //exports
  const BusinessInfo = {
    isLoading,
    setIsLoading,
    addDeliveryCost,
    addDeliveryManCharge,
    currentParcelType,
    setCurrentParcelType,
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
