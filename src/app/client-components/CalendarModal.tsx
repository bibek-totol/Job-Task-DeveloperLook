"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import TripDurationSelector from "./TripDurationSelector";
import StayDuration from "./StayDuration";

export default function CalendarModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [range, setRange] = useState<DateRange>({
    from: new Date(),
    to: new Date(),
  });

  const [activeTab, setActiveTab] = useState<"dates" | "months" | "flexible">(
    "dates"
  );

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
        <DayPicker
          mode="range"
          numberOfMonths={2}
          selected={range}
          onSelect={setRange}
          pagedNavigation
          required
          className="rounded-md p-2 ml-20 bg-white "
          classNames={{
            months: "flex  gap-20",
            month: "text-black text-center",
            caption: "text-lg font-semibold mb-4",
            day: "text-black w-10 h-10  hover:bg-gray-200 transition",
            selected:
              "bg-black text-black  w-10 h-10 ",
            range_middle:
              "bg-gray-200 text-black w-10 h-10 ",
          }}
        />
      )}

      
      {activeTab === "months" && (
        <TripDurationSelector/>
      )}
      {activeTab === "flexible" && (
        <StayDuration/>
      )}



{
  activeTab === "dates" && (
    <div className="flex flex-wrap gap-3 mt-6 ml-10">
    {["Exact dates", "± 1 day", "± 2 days", "± 3 days", "± 7 days", "± 14 days"].map(
      (label, i) => (
        <button
          key={i}
          className={`px-4 py-2 rounded-full border text-sm font-medium ${
            i === 0 ? "border-black text-gray-700" : "border-gray-300 text-gray-700"
          }`}
        >
          {label}
        </button>
      )
    )}
  </div>
      )
}



  
      <div className="flex justify-end mt-6">
        <button
          onClick={onClose}
          className="px-4 py-2 bg-pink-500 text-white rounded-lg"
        >
          Done
        </button>
      </div>
    </motion.div>
  );
}
