import React, { createContext, useContext, useState } from "react";

// Create the context
const AcademicContext = createContext();

// Create the provider component
export const AcademicProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");

  return (
    <AcademicContext.Provider value={{ filter, setFilter }}>
      {children}
    </AcademicContext.Provider>
  );
};

// Custom hook for consuming the context
export const useAcademicContext = () => useContext(AcademicContext);
