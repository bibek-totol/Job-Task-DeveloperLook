"use client";

import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import TripDurationSelector from "./TripDurationSelector";
import StayDuration from "./StayDuration";
import { Props, Tab } from "../type";
import { useAppContext } from "../context/AppContext";
import useClickOutside from "../hook/useClickOutside";

export default function CalendarModal({ open, onClose, step, setStep }: Props) {
  const [range, setRange] = useState<DateRange | undefined>();
  const { activeTab, setActiveTab, setSearchfieldData, searchfieldData } = useAppContext();
  const isMobile = window.innerWidth < 768;



  const modalRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(modalRef, onClose, open);


  useEffect(() => {
    if (range?.from && !range?.to && step === "checkin") {
      setTimeout(() => setStep("checkout"), 300);
    }
  }, [range, step, setStep]);

  if (!open) return null;

  function formatDate(date: Date) {
    return date.toLocaleDateString("en-CA"); 
  }

  return (
    <motion.div
      ref={modalRef}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.3 }}
      className="mt-20 absolute top-24 left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-3xl p-4 sm:p-6 z-50 w-[95%] max-w-4xl"
    >
  
      <div className="flex flex-wrap justify-center mb-6 bg-gray-200 rounded-full p-1 w-fit mx-auto">
        {["Dates", "Months", "Flexible"].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              const newTab = tab.toLowerCase() as Tab;
              setActiveTab(newTab);
              if (newTab === "months") setStep("when");
              if (newTab === "dates") setStep("checkin");
            }}
            className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition ${
              activeTab === tab.toLowerCase()
                ? "bg-white text-black"
                : "text-black hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      
      {activeTab === "dates" && (
        <div className="overflow-hidden relative">
          <AnimatePresence mode="wait">
            {(step === "checkin" || step === "checkout") && (
              <motion.div
                key={step}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <DayPicker
                  mode="range"
                  numberOfMonths={isMobile ? 1 : 2}

                  selected={range}
                  onSelect={(selectedRange) => {
                    setRange(selectedRange);
                    if (selectedRange?.from) {
                      setStep("checkout");
                      setSearchfieldData({
                        ...searchfieldData,
                        checkin: formatDate(selectedRange.from),
                      });
                    }
                    if (selectedRange?.to) {
                      setSearchfieldData({
                        ...searchfieldData,
                        checkin: formatDate(selectedRange.from!),
                        checkout: formatDate(selectedRange.to),
                      });
                    }
                  }}
                  pagedNavigation
                  required
                  className="rounded-md p-2 sm:ml-20 bg-white"
                  classNames={{
                    months: "flex flex-col sm:flex-row gap-6 sm:gap-20",
                    day: "text-black w-10 h-10 hover:bg-gray-200 transition rounded-full",
                    selected: "bg-black text-white w-10 h-10 rounded-full",
                    range_start: "bg-black text-black w-10 h-10 rounded-full",
                    range_end: "bg-black text-black w-10 h-10 rounded-full",
                    range_middle: "bg-gray-400 text-black w-10 h-10",
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      
      {activeTab === "months" && <TripDurationSelector />}

    
      {activeTab === "flexible" && <StayDuration />}


      <div className="flex justify-end mt-6">
        <button
          onClick={() => {
            if (range?.from && range?.to) {
              setStep("who");
            }
            else{
              setStep(null);
            }
            onClose();
          }}
          className="px-4 py-2 bg-pink-500 text-white rounded-lg"
        >
          Done
        </button>
      </div>
    </motion.div>
  );
}
