import React, { createContext, useContext, useEffect, useState } from "react";
import { CustomerContext } from "../CustomerContext/CustomerProvider";

export const StaffContext = createContext();
const StaffProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [allStaffs, setAllStaffs] = useState(false);
//   const [searchBarValue, setSearchBarValue] = useState(null);
//   const [currentStaff, setCurrentStaff] = useState(null);
//   const [filteredStaffsBySearch, setFilteredStaffsBySearch] = useState(false);

  //   const [currentStaffType, setCurrentStaffType] = useState(false);
  const { customers } = useContext(CustomerContext);

  useEffect(() => {
    const specialUsers = customers?.filter((customer) => {
      return customer?.user_type !== "Customer";
    });
    setAllStaffs(specialUsers);
  }, [customers]);

  // console.log(allStaffs);

  //exports
  const StaffInfo = {
    isLoading,
    setIsLoading,
  };

  return (
    <StaffContext.Provider value={StaffInfo}>{children}</StaffContext.Provider>
  );
};

export default StaffProvider;
