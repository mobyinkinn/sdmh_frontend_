import React, { createContext, useContext, useState } from "react";

// Create the context
const DepartmentContext = createContext();

// Create the provider component
export const DepartmentProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");

  return (
    <DepartmentContext.Provider value={{ filter, setFilter }}>
      {children}
    </DepartmentContext.Provider>
  );
};

// Custom hook for consuming the context
export const useDepartmentContext = () => useContext(DepartmentContext);
