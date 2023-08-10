"use client"

import { createContext, useContext } from "react";
import React, { useState } from "react";
const AppContext = createContext();

export function AppWrapper({ children }) {
    

    const [inputText, setInputText] = useState("");
  

  const value = { inputText, setInputText };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}