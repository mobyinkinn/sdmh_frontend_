import React, { createContext, useContext, useState } from "react";

// Create the context
const BlogContext = createContext();

// Create the provider component
export const BlogProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");

  return (
    <BlogContext.Provider value={{ filter, setFilter }}>
      {children}
    </BlogContext.Provider>
  );
};

// Custom hook for consuming the context
export const useBlogContext = () => useContext(BlogContext);
