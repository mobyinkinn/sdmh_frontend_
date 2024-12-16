import React, { createContext, useContext, useState } from "react";

// Create the context
const AwardsContext = createContext();

// Create the provider component
export const AwardsProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");

  return (
    <AwardsContext.Provider value={{ filter, setFilter }}>
      {children}
    </AwardsContext.Provider>
  );
};

// Custom hook for consuming the context
export const useAwardsContext = () => useContext(AwardsContext);
