import React, { createContext, useContext, useState } from "react";

// Create the context
const CareerContext = createContext();

// Create the provider component
export const CareerProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");

  return (
    <CareerContext.Provider value={{ filter, setFilter }}>
      {children}
    </CareerContext.Provider>
  );
};

// Custom hook for consuming the context
export const useCareerContext = () => useContext(CareerContext);
