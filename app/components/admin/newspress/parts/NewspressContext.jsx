import React, { createContext, useContext, useState } from "react";

// Create the context
const NewspressContext = createContext();

// Create the provider component
export const NewspressProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");

  return (
    <NewspressContext.Provider value={{ filter, setFilter }}>
      {children}
    </NewspressContext.Provider>
  );
};

// Custom hook for consuming the context
export const useNewspressContext = () => useContext(NewspressContext);
