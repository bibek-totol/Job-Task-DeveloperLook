"use client";

import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import TripDurationSelector from "./TripDurationSelector";
import StayDuration from "./StayDuration";
import { Props } from "../type";

export default function CalendarModal({ open, onClose, step, setStep }: Props) {
  const [range, setRange] = useState<DateRange | undefined>();
  const [activeTab, setActiveTab] = useState<"dates" | "months" | "flexible">(
    "dates"
  );

  useEffect(() => {
    if (range?.from && !range?.to && step === "checkin") {
      setTimeout(() => setStep("checkout"), 300);
    }
  }, [range, step, setStep]);

  if (!open) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.3 }}
      className="mt-24 absolute top-24 left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-3xl p-6 z-50 w-[90%] max-w-4xl"
    >
     
      <div className="flex justify-center mb-6 bg-gray-200 rounded-full p-1 w-fit mx-auto">
        {["Dates", "Months", "Flexible"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase() as any)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
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
                  numberOfMonths={2}
                  selected={range}
                  onSelect={(selectedRange) => {
                    setRange(selectedRange);
                
                  
                    if (selectedRange?.from ) {
                      setStep("checkout");
                    }
                
                    
                  }}
                  pagedNavigation
                  required
                  className="rounded-md p-2 ml-20 bg-white"
                  classNames={{
                    months: "flex gap-20",
                    day: "text-black w-10 h-10 hover:bg-gray-200 transition",
                    selected:
                      "bg-black text-black w-10 h-10 rounded-full", // both ends
                    range_start:
                      "bg-black text-white w-10 h-10 rounded-full", // check-in
                    range_end:
                      "bg-black text-white w-10 h-10 rounded-full", // checkout
                    range_middle: "bg-gray-200 text-black w-10 h-10", // in between
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Months Tab */}
      {activeTab === "months" && <TripDurationSelector />}

      {/* Flexible Tab */}
      {activeTab === "flexible" && <StayDuration />}

      
      {/* {activeTab === "dates" && (
        <div className="flex flex-wrap gap-3 mt-6 ml-10">
          {[
            "Exact dates",
            "± 1 day",
            "± 2 days",
            "± 3 days",
            "± 7 days",
            "± 14 days",
          ].map((label, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-full border text-sm font-medium ${
                i === 0
                  ? "border-black text-gray-700"
                  : "border-gray-300 text-gray-700"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )} */}

    
      <div className="flex justify-end mt-6">
      <button
    onClick={() => {
      if (range?.from && range?.to) {
        setStep("who");
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
