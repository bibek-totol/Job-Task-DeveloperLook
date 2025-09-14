"use client";

import { motion } from "framer-motion";
import { useAppContext } from "../context/AppContext";
import useClickOutside from "../hook/useClickOutside";
import { useRef } from "react";

interface WhoModalProps {
  open: boolean;
  anchorRef: React.RefObject<HTMLDivElement | null>;
  onClose: () => void;
}

export default function WhoModal({ open, anchorRef, onClose }: WhoModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const { searchfieldData, setSearchfieldData } = useAppContext();

  useClickOutside(modalRef, onClose, open);

  if (!open || !anchorRef.current) return null;

  const updateGuestCount = (key: keyof typeof searchfieldData.guests, delta: number) => {
    setSearchfieldData({
      ...searchfieldData,
      guests: {
        ...searchfieldData.guests,
        [key]: Math.max(0, searchfieldData.guests[key] + delta),
      },
    });
  };

  return (
    <motion.div
      ref={modalRef}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-20 right-2 max-w-[300px] z-80 bg-white shadow-lg rounded-2xl p-4"
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
              onClick={() => updateGuestCount(key as keyof typeof searchfieldData.guests, -1)}
              className="w-8 h-8 border rounded-full flex items-center justify-center text-lg disabled:opacity-30"
              disabled={searchfieldData.guests[key as keyof typeof searchfieldData.guests] === 0}
            >
              –
            </button>
            <span>{searchfieldData.guests[key as keyof typeof searchfieldData.guests]}</span>
            <button
              onClick={() => updateGuestCount(key as keyof typeof searchfieldData.guests, 1)}
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
