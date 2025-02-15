import React, { createContext, useContext, useState } from "react";

// Create the context
const NavlinksContext = createContext();

// Create the provider component
export const NavlinksProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");

  return (
    <NavlinksContext.Provider value={{ filter, setFilter }}>
      {children}
    </NavlinksContext.Provider>
  );
};

// Custom hook for consuming the context
export const useNavlinksContext = () => useContext(NavlinksContext);
