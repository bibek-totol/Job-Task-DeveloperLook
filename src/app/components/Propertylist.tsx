"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Propertylist() {
    const properties = [
        {
          id: 1,
          image: "/room1.jpg",
          title: "Condo in Bukit Bintang",
          location: "Kuala Lumpur, Malaysia",
          price: 77,
          rating: 4.85,
        },
        {
          id: 2,
          image: "/room2.jpg",
          title: "Apartment in Chan Sow Lin",
          location: "Kuala Lumpur, Malaysia",
          price: 56,
          rating: 4.83,
        },
        {
          id: 3,
          image: "/room3.jpg",
          title: "Place to stay in Cheras",
          location: "Kuala Lumpur, Malaysia",
          price: 47,
          rating: 4.92,
        },
    
        {
          id: 4,
          image: "/room3.jpg",
          title: "Place to stay in Cheras",
          location: "Kuala Lumpur, Malaysia",
          price: 47,
          rating: 4.92,
        },
    
    
        {
          id: 5,
          image: "/room3.jpg",
          title: "Place to stay in Cheras",
          location: "Kuala Lumpur, Malaysia",
          price: 47,
          rating: 4.92,
        },
    
    
        {
          id: 6,
          image: "/room3.jpg",
          title: "Place to stay in Cheras",
          location: "Kuala Lumpur, Malaysia",
          price: 47,
          rating: 4.92,
        },
    
    
        {
          id: 7,
          image: "/room3.jpg",
          title: "Place to stay in Cheras",
          location: "Kuala Lumpur, Malaysia",
          price: 47,
          rating: 4.92,
        },
    
    
        {
          id: 8,
          image: "/room3.jpg",
          title: "Place to stay in Cheras",
          location: "Kuala Lumpur, Malaysia",
          price: 47,
          rating: 4.92,
        }
    
    
    
      ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-8 mt-48">
    {properties.map((property) => (
      <motion.div
        key={property.id}
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
      >
        
        <div className="relative w-full h-48 sm:h-56 md:h-64">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
          />
          <span className="absolute top-3 left-3 bg-white text-xs font-semibold px-2 py-1 rounded-full shadow">
            Guest favorite
          </span>
          <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100">
            ❤️
          </button>
        </div>

      
        <div className="p-3 sm:p-4 space-y-1">
          <h3 className="font-semibold text-gray-800 line-clamp-1 text-sm sm:text-base">
            {property.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500">
            {property.location}
          </p>
          <p className="text-sm font-medium text-gray-700">
            ${property.price}{" "}
            <span className="font-normal text-xs sm:text-sm">
              for 2 nights
            </span>
          </p>
          <p className="text-xs sm:text-sm text-gray-600">
            ⭐ {property.rating}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
  )
}
