"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../../../public/assets/logo.jpg";
import CalendarModal from "./CalendarModal";
import WhereModal from "../Modals/WhereModal";
import WhoModal from "../Modals/WhoModal";




export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [calendarOpen, setCalendarOpen] = useState<boolean>(false);

  const [step, setStep] = useState<"where" | "checkin" | "checkout" | "who" | null>(null);
  const whereRef = useRef<HTMLDivElement>(null);
  const whoRef = useRef<HTMLDivElement>(null);



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
          height: scrolled ? 80 : 200,
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
  className={`flex items-center gap-x-8 text-xs sm:text-sm ${
    scrolled ? "hidden" : "flex"
  }`}
>

  <div className="flex flex-col items-center cursor-pointer">
    <span className="text-2xl">🏡</span>
    <p className="mt-1 font-medium">Homes</p>
    <span className="w-6 border-b-2 border-black mt-1"></span>
  </div>


  <div className="flex flex-col items-center cursor-pointer relative">
    <span className="absolute -top-2 -right-1 bg-[#334665] text-white text-[10px] px-2 py-0.5  rounded-bl-lg rounded-full">
      NEW
    </span>
    <span className="text-2xl">🎈</span>
    <p className="mt-1 font-medium">Experiences</p>
  </div>

  
  <div className="flex flex-col items-center cursor-pointer relative">
    <span className="absolute -top-2 left-8 bg-[#334665] text-white text-[10px] px-2 py-0.5 rounded-bl-lg  rounded-full">
      NEW
    </span>
    <span className="text-2xl">🛎️ </span>
    <p className="mt-1 font-medium">Services</p>
  </div>
</motion.div>


        
<motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{
            width: scrolled ? "30%" : "60%",
            padding: scrolled ? "0.3rem" : "0.6rem",
            opacity: 1,
            y: scrolled ? -60 : -15,
          }}
          transition={{ duration: 0.4 }}
          className="border border-gray-300 bg-white rounded-full shadow-md shadow-gray-400 flex items-center justify-between gap-2 sm:gap-4 text-xs sm:text-sm md:text-base px-3 sm:px-6"
        >
          {scrolled ? (
            <>
              <p className="px-2 sm:px-4 border-r">Anywhere</p>
              <p
                className="px-2 sm:px-4 border-r cursor-pointer"
                onClick={() => {
                  setStep("checkin");
                  setCalendarOpen(true);
                }}
              >
                Any week
              </p>
              <p
                className="px-2 sm:px-4 cursor-pointer"
                onClick={() => {
                  setStep("who");
                }}
              >
                Add guests
              </p>
              <button className="bg-red-500 text-white p-2 sm:p-3 rounded-full">
                🔍
              </button>
            </>
          ) : (
            <>
              {/* Where */}
              <div
                ref={whereRef}
                onClick={() => setStep(step === "where" ? null : "where")}
                className={`px-2 sm:px-4 border-r cursor-pointer ${
                  step === "where"
                    ? "bg-cyan-500 px-3 py-2 sm:px-6 rounded-full"
                    : "hover:bg-gray-100 px-3 py-2 sm:px-6 rounded-full"
                }`}
              >
                <p className="text-xs font-bold">Where</p>
                <p className="text-gray-500">Search destinations</p>
              </div>

              <WhereModal
                open={step === "where"}
                anchorRef={whereRef}
                onClose={() => setStep(null)}
              />

              {/* Check in */}
              <div
                onClick={() => {
                  setStep("checkin");
                  setCalendarOpen(true);
                }}
                className={`px-2 sm:px-4 border-r cursor-pointer ${
                  step === "checkin"
                    ? "bg-cyan-500 px-3 py-2 sm:px-6 rounded-full"
                    : "hover:bg-gray-100 px-3 py-2 sm:px-6 rounded-full"
                }`}
              >
                <p className="text-xs font-bold">Check in</p>
                <p className="text-gray-500">Add dates</p>
              </div>

              {/* Check out */}
              <div
                onClick={() => {
                  setStep("checkout");
                  setCalendarOpen(true);
                }}
                className={`px-2 sm:px-4 border-r cursor-pointer ${
                  step === "checkout"
                    ? "bg-cyan-500 px-3 py-2 sm:px-6 rounded-full"
                    : "hover:bg-gray-100 px-3 py-2 sm:px-6 rounded-full"
                }`}
              >
                <p className="text-xs font-bold">Check out</p>
                <p className="text-gray-500">Add dates</p>
              </div>

              {/* Who */}
              <div
                ref={whoRef}
                onClick={() => setStep(step === "who" ? null : "who")}
                className={`px-2 sm:px-4 cursor-pointer ${
                  step === "who"
                    ? "bg-cyan-500 px-3 py-2 sm:px-6 rounded-full"
                    : "hover:bg-gray-100 px-3 py-2 sm:px-6 rounded-full"
                }`}
              >
                <p className="text-xs font-bold">Who</p>
                <p className="text-gray-500">Add guests</p>
              </div>

              <WhoModal
                open={step === "who"}
                anchorRef={whoRef}
                onClose={() => setStep(null)}
              />

  
<motion.button
className="bg-red-500 text-white  rounded-full"

animate={{
  width: step === "where" || step === "who" || step === "checkout" || step === "checkin" ? "20%" : "auto",
  padding: step === "where" || step === "who" || step === "checkout" || step === "checkin" ? "15px" : "10px",

 
}}
transition={{ duration: 0.4,type:"tween" }}

>
{step === "where" || step === "who" || step === "checkout" || step === "checkin" ? (
  
    <span>Search  🔍</span>

) : (
  <span>
    🔍
  </span>
)}

</motion.button>
            
            
              
            </>
          )}
        </motion.div>
      </motion.nav>


      

      
      
      <CalendarModal
        open={calendarOpen}
        onClose={() => setCalendarOpen(false)}
        step={step === "checkin" || step === "checkout" ? step : null} 
        setStep={setStep}
      />
    
    </>
  );
}
