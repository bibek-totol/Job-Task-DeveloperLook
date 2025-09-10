"use client";

import Image from "next/image";

const properties = {
  similar: [
    {
      id: 1,
      title: "Room in Toronto",
      price: "$922 monthly",
      rating: "★ 4.75",
      img: "/room1.jpg",
    },
    {
      id: 2,
      title: "Room in Toronto",
      price: "$1,059 monthly",
      rating: "★ 5.0",
      img: "/room2.jpg",
      badge: "Guest favorite",
    },
    {
      id: 3,
      title: "Home in Toronto",
      price: "$2,403 monthly",
      rating: "★ 4.86",
      img: "/home1.jpg",
      badge: "Guest favorite",
    },
    {
      id: 4,
      title: "Room in Toronto",
      price: "$1,235 monthly",
      rating: "★ 5.0",
      img: "/room3.jpg",
    },
    {
      id: 5,
      title: "Room in Vaughan",
      price: "$1,059 monthly",
      rating: "★ 5.0",
      img: "/room4.jpg",
    },
    {
      id: 6,
      title: "Guest suite in Toronto",
      price: "$2,043 monthly",
      rating: "★ 4.93",
      img: "/suite1.jpg",
      badge: "Guest favorite",
    },
    {
      id: 7,
      title: "Apartment in Toronto",
      price: "$2,150 monthly",
      rating: "★ 5.0",
      img: "/apt1.jpg",
      badge: "Guest favorite",
    },
  ],
  mississauga: [
    {
      id: 8,
      title: "Room in Mississauga",
      price: "$1,306 monthly",
      rating: "★ 5.0",
      img: "/room5.jpg",
      badge: "Guest favorite",
    },
    {
      id: 9,
      title: "Home in Mississauga",
      price: "$2,106 monthly",
      rating: "★ 5.0",
      img: "/home2.jpg",
      badge: "Guest favorite",
    },
    {
      id: 10,
      title: "Guest suite in Mississauga",
      price: "$1,722 monthly",
      rating: "★ 4.87",
      img: "/suite2.jpg",
    },
    {
      id: 11,
      title: "Apartment in Mississauga",
      price: "$2,879 monthly",
      rating: "★ 4.89",
      img: "/apt2.jpg",
    },
    {
      id: 12,
      title: "Room in Mississauga",
      price: "$1,273 monthly",
      rating: "★ 5.0",
      img: "/room6.jpg",
    },
    {
      id: 13,
      title: "Room in Mississauga",
      price: "$1,316 monthly",
      rating: "★ 4.84",
      img: "/room7.jpg",
    },
    {
      id: 14,
      title: "Room in Mississauga",
      price: "$1,288 monthly",
      rating: "★ 4.95",
      img: "/room8.jpg",
      badge: "Guest favorite",
    },
  ],
};

export default function Propertylist() {
  return (
    <div className="px-6 py-8 mt-40 bg-white text-black space-y-10">
      {/* Section 1 */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Available for similar dates</h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {properties.similar.map((item) => (
            <div
              key={item.id}
              className="relative min-w-[220px] rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={300}
                height={200}
                className="h-40 w-full object-cover"
              />
              {item.badge && (
                <span className="absolute top-2 left-2 bg-white text-xs px-2 py-1 rounded-md shadow">
                  {item.badge}
                </span>
              )}
              <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
                ❤️
              </button>
              <div className="p-2">
                <p className="text-sm">{item.title}</p>
                <p className="text-sm font-semibold">{item.price}</p>
                <p className="text-xs text-gray-500">{item.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <div>
        <h2 className="text-xl font-semibold mb-4">Stay in Mississauga</h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {properties.mississauga.map((item) => (
            <div
              key={item.id}
              className="relative min-w-[220px] rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={300}
                height={200}
                className="h-40 w-full object-cover"
              />
              {item.badge && (
                <span className="absolute top-2 left-2 bg-white text-xs px-2 py-1 rounded-md shadow">
                  {item.badge}
                </span>
              )}
              <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
                ❤️
              </button>
              <div className="p-2">
                <p className="text-sm">{item.title}</p>
                <p className="text-sm font-semibold">{item.price}</p>
                <p className="text-xs text-gray-500">{item.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
