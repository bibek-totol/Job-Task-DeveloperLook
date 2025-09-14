"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import useClickOutside from "../hook/useClickOutside";
import { useAppContext } from "../context/AppContext";

interface WhereModalProps {
  open: boolean;
  anchorRef: React.RefObject<HTMLDivElement | null>;
  onClose: () => void;
  setStep: (step: "where" | "checkin" | "checkout" | "who" | null) => void;
  setCalendarOpen: (calendarOpen: boolean) => void;
}

export default function WhereModal({
  open,
  anchorRef,
  onClose,
  setStep,
  setCalendarOpen,
}: WhereModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const {
    items,
    setSearchfieldData,
    searchfieldData,
    recentSearches,
    addRecentSearch,
  } = useAppContext();

  const uniqueByCountry = items.filter(
    (item, index, self) =>
      index === self.findIndex((t) => t.country === item.country)
  );

  useClickOutside(modalRef, onClose, open);

  if (!open || !anchorRef.current) return null;

  return (
    <motion.div
      ref={modalRef}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-20 left-2 max-w-[300px] z-80 bg-white shadow-lg rounded-2xl p-4"
    >

      {recentSearches.length > 0 ? (
        <div>
          <h3 className="text-sm font-semibold mb-2">Recent 2 searches</h3>
          {recentSearches.map((country, idx) => (
            <div
              key={idx}
              onClick={() => {
                onClose();
                setStep("checkin");
                setCalendarOpen(true);
                setSearchfieldData({ ...searchfieldData, location: country });
              }}
              className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
            >
              <span className="text-lg">📍</span>
              <div>
                <p className="font-medium">{country}</p>
                <p className="text-xs text-gray-500">Previously searched</p>
              </div>
            </div>
          ))}
        </div>
      ):(
         
        <div>
          <h3 className="text-sm font-semibold mb-2">Recent 2 searches</h3>
          <p className="text-sm text-gray-500">No recent searches</p>
        </div>
      )}

      
      <div className="mt-4">
        <h3 className="text-sm font-semibold mb-2">Suggested destinations</h3>

        {uniqueByCountry.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              onClose();
              setStep("checkin");
              setCalendarOpen(true);
              setSearchfieldData({
                ...searchfieldData,
                location: item.country,
              });
              addRecentSearch(item.country); 
            }}
            className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-lg cursor-pointer"
          >
            <span className="text-lg">{i + 1}.</span>
            <div>
              <p className="font-medium">{item.country}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
