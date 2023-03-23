import React, { createContext, useEffect, useState } from "react";
import { firebaseFirestore } from "../../Firebase/firebase.config";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";

export const LocationContext = createContext();
const LocationProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("Bangladesh");
  const [selectedState, setSelectedState] = useState("Rajshahi");
  const [selectedCity, setSelectedCity] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchBarValue, setSearchBarValue] = useState(null);
  const [filteredCountriesBySearch, setFilteredCountriesBySearch] = useState(
    []
  );
  const [filteredStatesBySearch, setFilteredStatesBySearch] = useState([]);
  const [filteredCitiesBySearch, setFilteredCitiesBySearch] = useState([]);

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

  //fetch States from database
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
      setFilteredStatesBySearch(newData);
      setIsLoading(false);
    });
  };
  useEffect(() => {
    fetchStates(selectedCountry);
  }, [selectedCountry]);

  //filter States by search value
  const filterStatesBySearch = (e) => {
    const searchValue = e.target.value;
    if (searchValue === null) {
      setFilteredStatesBySearch(states);
    }
    const filteredStates = states?.filter((state) =>
      states?.name?.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredStatesBySearch(filteredStates);
    setSearchBarValue(searchValue);
  };

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
      setFilteredCitiesBySearch(newData);
      setIsLoading(false);
    });
  };
  useEffect(() => {
    fetchCities(selectedCountry, selectedState);
  }, [selectedCountry, selectedState]);

  //filter Cities by search value
  const filterCitiesBySearch = (e) => {
    const searchValue = e.target.value;
    if (searchValue === null) {
      setFilteredCitiesBySearch(cities);
    }
    const filteredCities = cities?.filter((city) =>
      city?.name?.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredCitiesBySearch(filteredCities);
    setSearchBarValue(searchValue);
  };

  // reload the current page id
  const reloadCurrentPage = (setCurrentPage) => {
    setCurrentPage(1);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    setFilteredCountriesBySearch(countries);
  }, [countries]);

  //exports
  const LocationInfo = {
    fetchCountries,
    countries,
    states,
    cities,
    selectedCountry,
    setSelectedCountry,
    selectedState,
    setSelectedState,
    selectedCity,
    setSelectedCity,
    searchBarValue,
    setSearchBarValue,
    filterCountriesBySearch,
    filteredCountriesBySearch,
    setFilteredCountriesBySearch,
    filterStatesBySearch,
    filteredStatesBySearch,
    setFilteredStatesBySearch,
    filterCitiesBySearch,
    filteredCitiesBySearch,
    setFilteredCitiesBySearch,
    reloadCurrentPage,
    updateLocationStatus,
    isLoading,
    setIsLoading,
  };
  return (
    <LocationContext.Provider value={LocationInfo}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
