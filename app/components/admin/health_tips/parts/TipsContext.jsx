import React, { createContext, useContext, useState } from "react";

// Create the context
const TipsContext = createContext();

// Create the provider component
export const TipsProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");

  return (
    <TipsContext.Provider value={{ filter, setFilter }}>
      {children}
    </TipsContext.Provider>
  );
};

// Custom hook for consuming the context
export const useTipsContext = () => useContext(TipsContext);
