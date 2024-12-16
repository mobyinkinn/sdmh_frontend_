import React, { createContext, useContext, useState } from "react";

// Create the context
const TpaContext = createContext();

// Create the provider component
export const TpaProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");

  return (
    <TpaContext.Provider value={{ filter, setFilter }}>
      {children}
    </TpaContext.Provider>
  );
};

// Custom hook for consuming the context
export const useTpaContext = () => useContext(TpaContext);
