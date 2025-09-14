"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../../../public/assets/logo.jpg";
import CalendarModal from "./CalendarModal";
import WhereModal from "../Modals/WhereModal";
import WhoModal from "../Modals/WhoModal";
import { useAppContext } from "../context/AppContext";
import ALertBoxCard from "./ALertBoxCard";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState<boolean>(false);
  const { step, setStep, activeTab, searchfieldData } = useAppContext();

  const whereRef = useRef<HTMLDivElement>(null);
  const whoRef = useRef<HTMLDivElement>(null);

  const [pendingStep, setPendingStep] = useState<
    null | "where" | "who" | "checkin" | "checkout"
  >(null);

  // ✅ Handle scroll + restoring steps
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      // // Close everything when scrolled
      // if (isScrolled) {
      //   setStep(null);
      //   setCalendarOpen(false);
      // }
    };

    window.addEventListener("scroll", handleScroll);

    // Restore pending step when unscrolled
    if (!scrolled && pendingStep) {
      setStep(pendingStep);

      if (pendingStep === "checkin" || pendingStep === "checkout") {
        window.scrollTo(0,0);
        setCalendarOpen(true);
      }

      setPendingStep(null); // reset
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled, pendingStep, step, setStep]);

  return (
    <>
      <motion.nav
        initial={false}
        animate={{
          height: scrolled ? 70 : 180,
          boxShadow: scrolled
            ? "0 2px 10px rgba(0,0,0,0.1)"
            : "0 1px 3px rgba(0,0,0,0.05)",
        }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 right-0 bg-white text-black z-50 flex flex-col items-center"
      >
        {/* Logo + Right Buttons */}
        <div className="w-full max-w-7xl flex justify-between items-center px-3 sm:px-6 py-2">
          <motion.div
            animate={{ scale: scrolled ? 0.9 : 1 }}
            transition={{ duration: 0.4 }}
            className="flex-shrink-0"
          >
            <Image
              src={logo}
              alt="logo"
              width={scrolled ? 80 : 120}
              height={scrolled ? 80 : 120}
              className="w-auto h-auto object-contain"
            />
          </motion.div>

          <div className="flex items-center gap-2 sm:gap-4">
            <p className="hidden sm:block text-xs sm:text-sm cursor-pointer">
              Become a host
            </p>
            <button className="p-2 rounded-full hover:bg-gray-100 ml-38 md:ml-0">
              🌍
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">☰</button>
          </div>
        </div>

        {/* Middle Section (Homes, Experiences, Services) */}
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: -40 }}
          transition={{ duration: 0.4 }}
          className={`items-center gap-x-6 sm:gap-x-8 text-xs sm:text-sm md:text-base ${
            scrolled ? "hidden" : "flex"
          }`}
        >
          <div className="flex flex-col items-center cursor-pointer">
            <motion.span
              initial={{ rotateZ: 0 }}
              animate={{ rotateZ: 360 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl"
            >
              🏡
            </motion.span>
            <p className="mt-1 font-medium">Homes</p>
            <span className="w-5 sm:w-6 border-b-2 border-black mt-1"></span>
          </div>

          <div className="flex flex-col items-center cursor-pointer relative">
            <span className="absolute -top-2 -right-1 bg-[#334665] text-white text-[9px] sm:text-[10px] px-1 sm:px-2 py-0.5 rounded-bl-lg rounded-full">
              NEW
            </span>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl"
            >
              🎈
            </motion.span>
            <p className="mt-1 font-medium">Experiences</p>
          </div>

          <div className="flex flex-col items-center cursor-pointer relative">
            <span className="absolute -top-2 left-6 sm:left-8 bg-[#334665] text-white text-[9px] sm:text-[10px] px-1 sm:px-2 py-0.5 rounded-bl-lg rounded-full">
              NEW
            </span>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl"
            >
              🛎️
            </motion.span>
            <p className="mt-1 font-medium">Services</p>
          </div>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{
            width: scrolled ? "90%" : "95%",
            maxWidth: scrolled ? "450px" : "700px",
            padding: scrolled ? "0.2rem" : "0.5rem",
            opacity: 1,
            y: scrolled ? -55 : -15,
          }}
          transition={{ duration: 0.4 }}
          className="border border-gray-300 bg-white rounded-full shadow-md shadow-gray-400 flex items-center justify-between gap-2 sm:gap-4 text-xs sm:text-sm md:text-base px-2 sm:px-4"
        >
          {scrolled ? (
            <>
              <p
                className="px-2 sm:px-4 border-r cursor-pointer"
                onClick={() => {
                  setScrolled(false);
                  setPendingStep("where");
                  window.scrollTo(0, 0);
                }}
              >
                Anywhere
              </p>
              <p
                className="px-2 sm:px-4 border-r cursor-pointer"
                onClick={() => {
                  setScrolled(false);
                  setPendingStep("checkin");
                }}
              >
                Anytime
              </p>
              <p
                className="px-2 sm:px-4 cursor-pointer"
                onClick={() => {
                  setScrolled(false);
                  setPendingStep("who");
                  window.scrollTo(0, 0);
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
              <motion.div
                ref={whereRef}
                onClick={() => {
                  setStep(step === "where" ? null : "where");
                  setCalendarOpen(false);
                }}
                animate={{
                  backgroundColor: step === "where" ? "#C4C1C0" : "#ffffff",
                  color: step === "where" ? "#ffffff" : "#000000",
                  scale: step === "where" ? 1 : 0.95,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                whileHover={
                  step !== "where"
                    ? { scale: 1.05, backgroundColor: "#C4C1C0" }
                    : {}
                }
                className="px-2 sm:px-4 py-2 rounded-full cursor-pointer border-r flex-shrink min-w-[80px]"
              >
                <p className="text-[11px] sm:text-xs font-bold">Where</p>
                <p className="text-gray-500 text-[10px] sm:text-xs">
                  Search destinations
                </p>
              </motion.div>
              <WhereModal
                open={step === "where"}
                anchorRef={whereRef}
                onClose={() => setStep(null)}
                setStep={setStep}
                setCalendarOpen={setCalendarOpen}
              />

              {/* Dates */}
              {activeTab === "dates" && (
                <>
                  <motion.div
                    onClick={() => {
                      setStep("checkin");
                      setCalendarOpen(true);
                    }}
                    animate={{
                      backgroundColor:
                        step === "checkin" ? "#C4C1C0" : "#ffffff",
                      color: step === "checkin" ? "#ffffff" : "#000000",
                      scale: step === "checkin" ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    whileHover={
                      step !== "checkin"
                        ? { scale: 1.05, backgroundColor: "#C4C1C0" }
                        : {}
                    }
                    className="px-2 sm:px-4 py-2 rounded-full cursor-pointer border-r"
                  >
                    <p className="text-[11px] sm:text-xs font-bold">Check in</p>
                    <p className="text-gray-500 text-[10px] sm:text-xs">
                      Add dates
                    </p>
                  </motion.div>

                  <motion.div
                    onClick={() => {
                      setStep("checkout");
                      setCalendarOpen(true);
                    }}
                    animate={{
                      backgroundColor:
                        step === "checkout" ? "#C4C1C0" : "#ffffff",
                      color: step === "checkout" ? "#ffffff" : "#000000",
                      scale: step === "checkout" ? 1 : 0.95,
                    }}
                    whileHover={
                      step !== "checkout"
                        ? { scale: 1.05, backgroundColor: "#C4C1C0" }
                        : {}
                    }
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="px-2 sm:px-4 py-2 rounded-full cursor-pointer border-r"
                  >
                    <p className="text-[11px] sm:text-xs font-bold">
                      Check out
                    </p>
                    <p className="text-gray-500 text-[10px] sm:text-xs">
                      Add dates
                    </p>
                  </motion.div>
                </>
              )}

              {/* Flexible/Months */}
              {(activeTab === "months" || activeTab === "flexible") && (
                <motion.div
                  onClick={() => {
                    setStep(step === "when" ? null : "when");
                    setCalendarOpen(true);
                  }}
                  animate={{
                    backgroundColor: step === "when" ? "#C4C1C0" : "#ffffff",
                    color: step === "when" ? "#ffffff" : "#000000",
                  }}
                  whileHover={
                    step !== "when"
                      ? { scale: 1.05, backgroundColor: "#C4C1C0" }
                      : {}
                  }
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="px-2 sm:px-4 py-2 rounded-full cursor-pointer border-r"
                >
                  <p className="text-[11px] sm:text-xs font-bold">When</p>
                  <p className="text-gray-500 text-[10px] sm:text-xs truncate">
                    {searchfieldData.checkin} - {searchfieldData.checkout}
                  </p>
                </motion.div>
              )}

              {/* Who */}
              <motion.div
                ref={whoRef}
                onClick={() => {
                  setStep(step === "who" ? null : "who");
                  setCalendarOpen(false);
                }}
                animate={{
                  backgroundColor: step === "who" ? "#C4C1C0" : "#ffffff",
                  color: step === "who" ? "#ffffff" : "#000000",
                }}
                whileHover={
                  step !== "who"
                    ? { scale: 1.05, backgroundColor: "#C4C1C0" }
                    : {}
                }
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="px-2 sm:px-4 py-2 rounded-full cursor-pointer min-w-[70px]"
              >
                <p className="text-[11px] sm:text-xs font-bold">Who</p>
                <p className="text-gray-500 text-[10px] sm:text-xs">
                  Add guests
                </p>
              </motion.div>
              <WhoModal
                open={step === "who"}
                anchorRef={whoRef}
                onClose={() => setStep(null)}
              />

              {/* Search Button */}
              <ALertBoxCard />
            </>
          )}
        </motion.div>
      </motion.nav>

      {/* ✅ Calendar Modal */}
      <CalendarModal
        open={calendarOpen}
        onClose={() => setCalendarOpen(false)}
        step={step === "checkin" || step === "checkout" ? step : null}
        setStep={setStep}
      />
    </>
  );
}
