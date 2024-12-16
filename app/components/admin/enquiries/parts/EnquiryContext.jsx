import React, { createContext, useContext, useState } from "react";

// Create the context
const EnquiryContext = createContext();

// Create the provider component
export const EnquiryProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");

  return (
    <EnquiryContext.Provider value={{ filter, setFilter }}>
      {children}
    </EnquiryContext.Provider>
  );
};

// Custom hook for consuming the context
export const useEnquiryContext = () => useContext(EnquiryContext);
