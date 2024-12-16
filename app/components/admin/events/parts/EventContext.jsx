import React, { createContext, useContext, useState } from "react";

// Create the context
const EventContext = createContext();

// Create the provider component
export const EventProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");

  return (
    <EventContext.Provider value={{ filter, setFilter }}>
      {children}
    </EventContext.Provider>
  );
};

// Custom hook for consuming the context
export const useEventContext = () => useContext(EventContext);
