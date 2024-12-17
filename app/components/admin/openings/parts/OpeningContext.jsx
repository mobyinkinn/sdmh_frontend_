import React, { createContext, useContext, useState } from "react";

// Create the context
const OpeningContext = createContext();

// Create the provider component
export const OpeningProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");

  return (
    <OpeningContext.Provider value={{ filter, setFilter }}>
      {children}
    </OpeningContext.Provider>
  );
};

// Custom hook for consuming the context
export const useOpeningContext = () => useContext(OpeningContext);
