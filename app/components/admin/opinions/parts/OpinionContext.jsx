import React, { createContext, useContext, useState } from "react";

// Create the context
const OpinionContext = createContext();

// Create the provider component
export const OpinionProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");

  return (
    <OpinionContext.Provider value={{ filter, setFilter }}>
      {children}
    </OpinionContext.Provider>
  );
};

// Custom hook for consuming the context
export const useOpinionContext = () => useContext(OpinionContext);
