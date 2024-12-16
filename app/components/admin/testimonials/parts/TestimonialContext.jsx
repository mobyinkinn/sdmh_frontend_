import React, { createContext, useContext, useState } from "react";

// Create the context
const TestimonialContext = createContext();

// Create the provider component
export const TestimonialProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");

  return (
    <TestimonialContext.Provider value={{ filter, setFilter }}>
      {children}
    </TestimonialContext.Provider>
  );
};

// Custom hook for consuming the context
export const useTestimonialContext = () => useContext(TestimonialContext);
