import React, { createContext, useContext, useState } from "react";

// Create the context
const NewsletterContext = createContext();

// Create the provider component
export const NewsletterProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");

  return (
    <NewsletterContext.Provider value={{ filter, setFilter }}>
      {children}
    </NewsletterContext.Provider>
  );
};

// Custom hook for consuming the context
export const useNewsletterContext = () => useContext(NewsletterContext);
