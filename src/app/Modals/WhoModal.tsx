"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface WhoModalProps {
  open: boolean;
  anchorRef: React.RefObject<HTMLDivElement | null>;
  onClose: () => void;
}

export default function WhoModal({ open, anchorRef, onClose }: WhoModalProps) {
  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });

  
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        anchorRef.current &&
        !anchorRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, anchorRef, onClose]);

  if (!open || !anchorRef.current) return null;

  const rect = anchorRef.current.getBoundingClientRect();

  const updateCount = (key: keyof typeof guests, delta: number) => {
    setGuests((prev) => ({
      ...prev,
      [key]: Math.max(0, prev[key] + delta),
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      
      className="absolute top-20 right-2 max-w-[300[x] z-80 bg-white shadow-lg rounded-2xl p-4"
    >
      {[
        { key: "adults", label: "Adults", desc: "Ages 13 or above" },
        { key: "children", label: "Children", desc: "Ages 2–12" },
        { key: "infants", label: "Infants", desc: "Under 2" },
        { key: "pets", label: "Pets", desc: "Bringing a service animal?" },
      ].map(({ key, label, desc }) => (
        <div
          key={key}
          className="flex justify-between items-center py-3 border-b last:border-none"
        >
          <div>
            <p className="font-medium">{label}</p>
            <p className="text-xs text-gray-500">{desc}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => updateCount(key as keyof typeof guests, -1)}
              className="w-8 h-8 border rounded-full flex items-center justify-center text-lg disabled:opacity-30"
              disabled={guests[key as keyof typeof guests] === 0}
            >
              –
            </button>
            <span>{guests[key as keyof typeof guests]}</span>
            <button
              onClick={() => updateCount(key as keyof typeof guests, 1)}
              className="w-8 h-8 border rounded-full flex items-center justify-center text-lg"
            >
              +
            </button>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
