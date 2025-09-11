"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";

export default function StayDuration() {
  const [selectedDuration, setSelectedDuration] = useState("Week");

  const durations = ["Weekend", "Week", "Month"];
  const months = [
    { name: "September", year: 2025 },
    { name: "October", year: 2025 },
    { name: "November", year: 2025 },
    { name: "December", year: 2025 },
    { name: "January", year: 2026 },
    { name: "February", year: 2026 },
  ];

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Duration Selector */}
      <div className="text-center">
        <h2 className="text-lg font-medium">How long would you like to stay?</h2>
        <div className="mt-4 flex space-x-3">
          {durations.map((d) => (
            <button
              key={d}
              onClick={() => setSelectedDuration(d)}
              className={`px-5 py-2 rounded-full border transition ${
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

      {/* Month Selector */}
      <div className="w-full text-center">
        <h3 className="text-lg font-medium mb-4">Go anytime</h3>
        <div className="flex justify-center gap-4 overflow-x-auto pb-2">
          {months.map((m) => (
            <div
              key={m.name}
              className="flex flex-col items-center p-4 rounded-xl border border-gray-300 hover:border-black cursor-pointer min-w-[120px] transition"
            >
              <Calendar className="w-8 h-8 mb-2 text-gray-600" />
              <p className="font-medium">{m.name}</p>
              <p className="text-gray-500 text-sm">{m.year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
