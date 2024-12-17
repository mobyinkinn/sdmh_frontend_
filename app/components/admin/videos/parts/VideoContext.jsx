import React, { createContext, useContext, useState } from "react";

// Create the context
const VideoContext = createContext();

// Create the provider component
export const VideoProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");

  return (
    <VideoContext.Provider value={{ filter, setFilter }}>
      {children}
    </VideoContext.Provider>
  );
};

// Custom hook for consuming the context
export const useVideoContext = () => useContext(VideoContext);
