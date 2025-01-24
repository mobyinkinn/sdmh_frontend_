import React, { createContext, useContext, useState } from "react";

// Create the context
const PagesContext = createContext();

// Create the provider component
export const PagesProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");

  return (
    <PagesContext.Provider value={{ filter, setFilter }}>
      {children}
    </PagesContext.Provider>
  );
};

// Custom hook for consuming the context
export const usePagesContext = () => useContext(PagesContext);
