import React, { createContext, useContext, useState } from "react";

// Create the context
const NavbarContext = createContext();

// Create the provider component
export const NavbarProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");

  return (
    <NavbarContext.Provider value={{ filter, setFilter }}>
      {children}
    </NavbarContext.Provider>
  );
};

// Custom hook for consuming the context
export const useNavbarContext = () => useContext(NavbarContext);
