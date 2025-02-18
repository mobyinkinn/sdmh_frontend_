import React, { createContext, useContext, useState } from "react";

// Create the context
const TeachingContext = createContext();

// Create the provider component
export const TeachingProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");

  return (
    <TeachingContext.Provider value={{ filter, setFilter }}>
      {children}
    </TeachingContext.Provider>
  );
};

// Custom hook for consuming the context
export const useTeachingContext = () => useContext(TeachingContext);
