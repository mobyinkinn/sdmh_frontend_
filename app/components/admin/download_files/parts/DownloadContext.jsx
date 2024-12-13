import React, { createContext, useContext, useState } from "react";

// Create the context
const DownloadContext = createContext();

// Create the provider component
export const DownloadProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");

  return (
    <DownloadContext.Provider value={{ filter, setFilter }}>
      {children}
    </DownloadContext.Provider>
  );
};

// Custom hook for consuming the context
export const useDownloadContext = () => useContext(DownloadContext);
