"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Property } from "../type";
import { useEffect } from "react";

type AppContextType = {
  step: "where" | "checkin" | "checkout" | "who" | "clicked" | null;
  setStep: (step: "where" | "checkin" | "checkout" | "who" | "clicked" | null) => void;
  items: Property[]

};


const AppContext = createContext<AppContextType | undefined>(undefined);

type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
    const [step, setStep] = useState<"where" | "checkin" | "checkout" | "who" | "clicked" | null>(null);


    const [items, setItems] = useState<Property[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api`);
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error("Failed to fetch properties:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ step, setStep, items }}>
      {children}
    </AppContext.Provider>
  );
}


export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
