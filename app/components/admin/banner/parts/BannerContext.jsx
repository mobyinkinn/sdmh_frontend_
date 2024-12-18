import React, { createContext, useContext, useState } from "react";

// Create the context
const BannerContext = createContext();

// Create the provider component
export const BannerProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");

  return (
    <BannerContext.Provider value={{ filter, setFilter }}>
      {children}
    </BannerContext.Provider>
  );
};

// Custom hook for consuming the context
export const useBannerContext = () => useContext(BannerContext);
