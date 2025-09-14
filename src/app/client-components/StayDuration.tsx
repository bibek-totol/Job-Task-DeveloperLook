"use client";

import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { useAppContext } from "../context/AppContext";

export default function StayDuration() {
  const [selectedDuration, setSelectedDuration] = useState<string | null>(null);
  const [selectedMonths, setSelectedMonths] = useState<string[]>([]);
  const { searchfieldData, setSearchfieldData } = useAppContext();

  const durations = ["Weekend", "Week", "Month"];
  const months = [
    { name: "September", year: 2025 },
    { name: "October", year: 2025 },
    { name: "November", year: 2025 },
    { name: "December", year: 2025 },
    { name: "January", year: 2026 },
    { name: "February", year: 2026 },
    { name: "March", year: 2026 },
    { name: "April", year: 2026 },
    { name: "May", year: 2026 },
    { name: "June", year: 2026 },
    { name: "July", year: 2026 },
    { name: "August", year: 2026 },
  ];

  const handleMonthClick = (month: string) => {
    setSelectedMonths((prev) =>
      prev.includes(month) ? prev.filter((m) => m !== month) : [...prev, month]
    );
  };

  useEffect(() => {
    if (selectedDuration && selectedMonths.length > 0) {
      setSearchfieldData({
        ...searchfieldData,
        checkin: selectedDuration,
        checkout: selectedMonths.join(", "),
      });
    }
  }, [selectedDuration, selectedMonths]);

  return (
    <div className="flex flex-col items-center space-y-6">
    
      <div className="text-center">
        <h2 className="text-lg font-medium">
          {selectedDuration
            ? `Stay for a ${selectedDuration}`
            : "How long would you like to stay?"}
        </h2>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {durations.map((d) => (
            <button
              key={d}
              onClick={() => setSelectedDuration(d)}
              className={`px-5 py-2 rounded-full border transition text-sm sm:text-base ${
                selectedDuration === d
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-800 border-gray-300 hover:border-black"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

    
      <div className="w-full text-center">
        <h3 className="text-lg font-medium mb-4">
          {selectedMonths.length > 0
            ? `Go in ${selectedMonths.join(", ")}`
            : "Go anytime"}
        </h3>

        <div className="flex  justify-center gap-4 sm:gap-6 max-h-[300px] sm:max-h-none overflow-y-auto">
          {months.map((m) => (
            <div
              key={m.name}
              onClick={() => handleMonthClick(m.name)}
              className={`flex flex-col items-center p-4 rounded-xl border cursor-pointer w-[45%] sm:w-[120px] transition ${
                selectedMonths.includes(m.name)
                  ? "border-black bg-gray-100"
                  : "border-gray-300 hover:border-black"
              }`}
            >
              <Calendar className="w-6 h-6 sm:w-8 sm:h-8 mb-2 text-gray-600" />
              <p className="font-medium text-sm sm:text-base">{m.name}</p>
              <p className="text-gray-500 text-xs sm:text-sm">{m.year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
