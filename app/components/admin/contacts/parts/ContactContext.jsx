import React, { createContext, useContext, useState } from "react";

// Create the context
const ContactContext = createContext();

// Create the provider component
export const ContactProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");

  return (
    <ContactContext.Provider value={{ filter, setFilter }}>
      {children}
    </ContactContext.Provider>
  );
};

// Custom hook for consuming the context
export const useContactContext = () => useContext(ContactContext);
