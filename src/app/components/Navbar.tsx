"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../../../public/assets/logo.jpg";
import CalendarModal from "./CalendarModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [calendarOpen, setCalendarOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={false}
        animate={{
          height: scrolled ? 80 : 160,
          boxShadow: scrolled
            ? "0 2px 10px rgba(0,0,0,0.1)"
            : "0 1px 3px rgba(0,0,0,0.05)",
        }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 right-0 bg-white text-black z-50 flex flex-col items-center"
      >
        
        <div className="w-full max-w-7xl flex justify-between items-center px-4 sm:px-6 py-2">
          <motion.div
            animate={{ scale: scrolled ? 0.9 : 1 }}
            transition={{ duration: 0.4 }}
          >
            <Image src={logo} alt="logo" width={120} height={120} />
          </motion.div>

          <div className="flex items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm cursor-pointer hidden sm:block">
              Become a host
            </p>
            <button className="p-2 rounded-full hover:bg-gray-100 text-sm sm:text-base">
              🌍
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 text-sm sm:text-base">
              ☰
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: -45 }}
          transition={{ duration: 0.4 }}
          className={`flex items-center gap-x-4 text-xs sm:text-sm ${
            scrolled ? "hidden" : "block"
          }`}
        >
          <p className="cursor-pointer">Airbnb your home</p>
          <p className="cursor-pointer">Help</p>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{
            width: scrolled ? "30%" : "70%",
            padding: scrolled ? "0.3rem" : "0.8rem",
            opacity: 1,
            y: scrolled ? -60 : -15,
          }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-full shadow-md flex items-center justify-between gap-2 sm:gap-4 text-xs sm:text-sm md:text-base px-3 sm:px-6"
        >
          {scrolled ? (
            <>
              <p className="px-2 sm:px-4 border-r">Anywhere</p>
              <p
                className="px-2 sm:px-4 border-r cursor-pointer"
                onClick={() => setCalendarOpen(true)}
              >
                Any week
              </p>
              <p
                className="px-2 sm:px-4 cursor-pointer"
                onClick={() => setCalendarOpen(true)}
              >
                Add guests
              </p>
              <button className="bg-pink-500 text-white p-2 sm:p-3 rounded-full">
                🔍
              </button>
            </>
          ) : (
            <>

<div className="px-2 sm:px-4 border-r"> <p className="text-xs font-bold">Where</p> <p className="text-gray-500">Search destinations</p> </div>
              <div
                className="px-2 sm:px-4 border-r cursor-pointer"
                onClick={() => setCalendarOpen(true)}
              >
                <p className="text-xs font-bold">Check in</p>
                <p className="text-gray-500">Add dates</p>
              </div>
              <div
                className="px-2 sm:px-4 border-r cursor-pointer"
                onClick={() => setCalendarOpen(true)}
              >
                <p className="text-xs font-bold">Check out</p>
                <p className="text-gray-500">Add dates</p>
              </div>
              <div className="px-2 sm:px-4">
                <p className="text-xs font-bold">Who</p>
                <p className="text-gray-500">Add guests</p>
              </div>
              <button className="bg-pink-500 text-white p-2 sm:p-3 rounded-full">
                🔍
              </button>
            </>
          )}
        </motion.div>
      </motion.nav>

      
      <CalendarModal open={calendarOpen} onClose={() => setCalendarOpen(false)} />
    </>
  );
}
