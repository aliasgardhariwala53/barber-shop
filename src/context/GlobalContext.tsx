"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface GlobalState {
  selectedBarber: string | null;
  setSelectedBarber: (id: string | null) => void;
  selectedServices: string[];
  toggleService: (id: string) => void;
}
const GlobalContext = createContext<GlobalState | null>(null);

export const GlobalProvider = ({ children }: { children: any }) => {
  const [selectedBarber, setSelectedBarber] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (id: string) => {
    setSelectedServices((prev) => {
        if(prev?.includes(id)){
            return prev?.filter((el) => el !== id)
        }else{
            return [...prev, id];
        }
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        selectedBarber,
        setSelectedBarber,
        selectedServices,
        toggleService,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
