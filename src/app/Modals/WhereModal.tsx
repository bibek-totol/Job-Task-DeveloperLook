"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

interface WhereModalProps {
    open: boolean;
    anchorRef: React.RefObject<HTMLDivElement | null>;
    onClose: () => void;
}

export default function WhereModal({ open, anchorRef, onClose }: WhereModalProps) {
    if (!open || !anchorRef.current) return null;


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

  

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-20 left-2 max-w-[300[x] z-80 bg-white shadow-lg rounded-2xl p-4"
    >
      
      <div>
        <h3 className="text-sm font-semibold mb-2">Recent searches</h3>
        <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <span className="text-lg">📍</span>
          <div>
            <p className="font-medium">Pookie</p>
            <p className="text-xs text-gray-500">Sep 12 – Oct 5</p>
          </div>
        </div>
      </div>


      
      <div className="mt-4">
        <h3 className="text-sm font-semibold mb-2">Suggested destinations</h3>
        {[
          { icon: "📍", title: "Nearby", desc: "Find what’s around you" },
          { icon: "🏙️", title: "Toronto, Canada", desc: "For sights like CN Tower" },
          { icon: "🌃", title: "Bangkok, Thailand", desc: "For its bustling nightlife" },
          { icon: "🏛️", title: "London, United Kingdom", desc: "For its stunning architecture" },
          { icon: "🍽️", title: "New York, NY", desc: "For its top-notch dining" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
          >
            <span className="text-lg">{item.icon}</span>
            <div>
              <p className="font-medium">{item.title}</p>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
