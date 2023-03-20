import React, { createContext, useEffect, useState } from "react";
import { firebaseFirestore } from "../../Firebase/firebase.config";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";

export const LocationContext = createContext();
const LocationProvider = ({ children }) => {
  const [locations, setLocations] = useState([]);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("Bangladesh");
  const [selectedState, setSelectedState] = useState("Rajshahi");
  const [selectedCity, setSelectedCity] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchBarValue, setSearchBarValue] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [filteredCountriesBySearch, setFilteredCountriesBySearch] = useState(
    []
  );

  //update one location status
  const updateLocationStatus = async (location, status) => {
    try {
      const db = firebaseFirestore;
      const locationDocRef = doc(db, "Countries", location);
      try {
        await updateDoc(locationDocRef, {
          user_status: status,
        });
        console.log("Location status updated successfully");
      } catch {
        console.error("Location document not found");
      }
    } catch (error) {
      console.error("Error updating Location status", error);
    }
  };

  //fetch countries from database upon load

  const fetchCountries = async () => {
    setIsLoading(true);
    await getDocs(collection(firebaseFirestore, "Countries")).then(
      (querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setCountries(newData);
        setFilteredCountriesBySearch(newData);
        setIsLoading(false);
      }
    );
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  //filter Countries by search value
  const filterCountriesBySearch = (e) => {
    const searchValue = e.target.value;
    if (searchValue === null) {
      setFilteredCountriesBySearch(countries);
    }
    const filteredCountries = countries?.filter((country) =>
      country?.name?.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredCountriesBySearch(filteredCountries);
    setSearchBarValue(searchValue);
  };

  //fetch states from database
  const fetchStates = async (selectedCountry) => {
    setIsLoading(true);
    await getDocs(
      collection(firebaseFirestore, "Countries", selectedCountry, "States")
    ).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setStates(newData);
      console.log(newData);
      setIsLoading(false);
    });
  };
  useEffect(() => {
    fetchStates(selectedCountry);
  }, [selectedCountry]);

  //fetch Cities from database
  const fetchCities = async (selectedCountry, selectedState) => {
    setIsLoading(true);
    await getDocs(
      collection(
        firebaseFirestore,
        "Countries",
        selectedCountry,
        "States",
        selectedState,
        "Cities"
      )
    ).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCities(newData);
      setIsLoading(false);
    });
  };
  useEffect(() => {
    fetchCities(selectedCountry, selectedState);
  }, [selectedCountry, selectedState]);

  // reload the current page id
  const reloadCurrentPage = (setCurrentPage) => {
    setCurrentPage(1);
  };

  useEffect(() => {
    setFilteredCountriesBySearch(locations);
  }, [locations]);

  //exports
  const LocationInfo = {
    countries,
    states,
    cities,
    locations,
    selectedCountry,
    setSelectedCountry,
    selectedState,
    setSelectedState,
    selectedCity,
    setSelectedCity,
    setLocations,
    searchBarValue,
    setSearchBarValue,
    filterCountriesBySearch,
    filteredCountriesBySearch,
    setFilteredCountriesBySearch,
    reloadCurrentPage,
    updateLocationStatus,
    isLoading,
    setIsLoading,
    currentLocation,
    setCurrentLocation,
  };
  return (
    <LocationContext.Provider value={LocationInfo}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
