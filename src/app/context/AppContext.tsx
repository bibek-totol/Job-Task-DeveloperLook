"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Guests, Property } from "../type";
import { useEffect } from "react";

type AppContextType = {
  step: "where" | "checkin" | "checkout" | "who" | "clicked" | "when" | null;
  setStep: (step: "where" | "checkin" | "checkout" | "who" | "clicked" |  "when" | null) => void;
  items: Property[];
  activeTab: "dates" | "months" | "flexible";
  setActiveTab: (tab: "dates" | "months" | "flexible") => void;
  searchfieldData: {
    location: string;
    checkin: string;
    checkout: string;
    guests: Guests;
  };
  setSearchfieldData: (data: {
    location: string;
    checkin: string;
    checkout: string;
    guests: Guests;
  }) => void;

};


const AppContext = createContext<AppContextType | undefined>(undefined);

type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
    const [step, setStep] = useState<"where" | "checkin" | "checkout" | "who" | "clicked" | "when" | null>(null);
    const [activeTab, setActiveTab] = useState<"dates" | "months" | "flexible">(
        "dates"
      );


      const [searchfieldData, setSearchfieldData] = useState<{
        location: string;
        checkin: string;
        checkout: string;
        guests: Guests;
      }>({ location: "", checkin: "", checkout: "", guests: {
        adults: 0,
        children: 0,
        infants: 0,
        pets: 0
      } });
      

    const [items, setItems] = useState<Property[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
      const res = await fetch(`${baseUrl}/api`);
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error("Failed to fetch properties:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ step, setStep, items, activeTab, setActiveTab, searchfieldData, setSearchfieldData }}>
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
