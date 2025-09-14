"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { motion } from "framer-motion";
import { useAppContext } from "../context/AppContext";
import Image from "next/image";


const formatGuests = (guests: {
  adults: number;
  children: number;
  infants: number;
  pets: number;
}) => {
  const parts: string[] = [];
  if (guests.adults) parts.push(`${guests.adults} adult${guests.adults > 1 ? "s" : ""}`);
  if (guests.children) parts.push(`${guests.children} child${guests.children > 1 ? "ren" : ""}`);
  if (guests.infants) parts.push(`${guests.infants} infant${guests.infants > 1 ? "s" : ""}`);
  if (guests.pets) parts.push(`${guests.pets} pet${guests.pets > 1 ? "s" : ""}`);
  return parts.length > 0 ? parts.join(", ") : "Add guests";
};

export default function ALertBoxCard() {
  const { step, setStep, items, searchfieldData } = useAppContext();

  const filtereditems = items.filter(
    (item) => item.country === searchfieldData.location
  );

  return (
    <AlertDialog>
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
          transition={{ duration: 0.4 }}
          onClick={() => setStep(null)}
        >
         
          {
            step === null  ?(<span>🔍</span>):(<span>Search 🔍</span>)
          }
        </motion.button>
      </AlertDialogTrigger>

      <AlertDialogContent className="max-h-[80vh] overflow-y-auto rounded-md p-6">
        <AlertDialogHeader>
          <AlertDialogTitle>
            
            <div className="space-y-1 text-sm text-gray-700">
              <p>
                <span className="font-semibold">Location:</span>{" "}
                {searchfieldData.location || "Not selected"}
              </p>
              <p>
                <span className="font-semibold">Check-in:</span>{" "}
                {searchfieldData.checkin || "Not selected"}
              </p>
              <p>
                <span className="font-semibold">Check-out:</span>{" "}
                {searchfieldData.checkout || "Not selected"}
              </p>
              <p>
                <span className="font-semibold">Guests:</span>{" "}
                {formatGuests(searchfieldData.guests)}
              </p>
            </div>

            <AlertDialogAction
              onClick={() => {
                console.log("Confirmed search with:", searchfieldData);
              }}
              className="mt-3"
            >
              Close
            </AlertDialogAction>
          </AlertDialogTitle>
        </AlertDialogHeader>

        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 py-4 ">
          {filtereditems.map((property) => (
            <div
              key={property.id}
              className="border rounded-xl shadow-md hover:shadow-lg transition overflow-hidden bg-white"
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
          ))}
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
