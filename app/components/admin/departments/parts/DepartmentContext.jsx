import React, { createContext, useContext, useState } from "react";

// Create the context
const DepartmentContext = createContext();

// Create the provider component
export const DepartmentProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("startDate-desc");

  return (
    <DepartmentContext.Provider value={{ filter, setFilter, sort, setSort }}>
      {children}
    </DepartmentContext.Provider>
  );
};

// Custom hook for consuming the context
export const useDepartmentContext = () => useContext(DepartmentContext);
