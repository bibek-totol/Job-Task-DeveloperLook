"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { motion } from "framer-motion";
import { useAppContext } from "../context/AppContext";
import { useState } from "react";
import Image from "next/image";



export default function ALertBoxCard() {
  const { step,items } = useAppContext();
  

  return (
    <AlertDialog >
      <AlertDialogTrigger asChild>
        <motion.button
          className="bg-red-500 text-white rounded-full"
          animate={{
            width:
              step === "where" ||
              step === "who" ||
              step === "checkout" ||
              step === "checkin"
                ? "20%"
                : "auto",
            padding:
              step === "where" ||
              step === "who" ||
              step === "checkout" ||
              step === "checkin"
                ? "15px"
                : "10px",
          }}
          transition={{ duration: 0.4, type: "tween" }}
        >
          {step ? <span>Search 🔍</span> : <span>🔍</span>}
        </motion.button>
      </AlertDialogTrigger>

      <AlertDialogContent className=" max-h-[80vh] overflow-y-auto rounded-md">
        <AlertDialogHeader>
          <AlertDialogTitle>
          {/* <AlertDialogCancel>Close</AlertDialogCancel> */}
          <AlertDialogAction
            onClick={() => {
              console.log("Confirmed search with items:", items);
            }}
          >
            Close
          </AlertDialogAction>
          </AlertDialogTitle>
          
        </AlertDialogHeader>

        {/* Cards Layout */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 py-4 ">
          {
            items.map((property) => (
              <div
                key={property.id}
                className="border  rounded-xl shadow-md hover:shadow-lg transition overflow-hidden bg-white"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={property.img}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                  {property.badge && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full shadow">
                      {property.badge}
                    </span>
                  )}
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="text-sm font-semibold">{property.title}</h3>
                  <p className="text-gray-500 text-xs">
                    {property.city}, {property.country}
                  </p>
                  <p className="text-sm font-medium">{property.price}</p>
                  <p className="text-yellow-500 text-xs">{property.rating}</p>
                </div>
              </div>
            ))
          }
        </div>

        
      </AlertDialogContent>
    </AlertDialog>
  );
}
