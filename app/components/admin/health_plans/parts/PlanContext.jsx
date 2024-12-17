import React, { createContext, useContext, useState } from "react";

// Create the context
const PlanContext = createContext();

// Create the provider component
export const PlanProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");

  return (
    <PlanContext.Provider value={{ filter, setFilter }}>
      {children}
    </PlanContext.Provider>
  );
};

// Custom hook for consuming the context
export const usePlanContext = () => useContext(PlanContext);
