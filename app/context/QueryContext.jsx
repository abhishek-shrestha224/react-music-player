"use client";

import React, { createContext, useContext, useState } from "react";

const QueryContext = createContext(null);

const QueryContextProvider = ({ children }) => {
  const [query, setQuery] = useState("");

  return (
    <>
      <QueryContext.Provider
        value={{
          query,
          setQuery,
        }}
      >
        {children}
      </QueryContext.Provider>
    </>
  );
};

const useQueryContext = () => {
  const context = useContext(QueryContext);
  if (!context) {
    throw new Error("Context consumed outside Provider");
  }
  return context;
};

export { QueryContext, QueryContextProvider, useQueryContext };
