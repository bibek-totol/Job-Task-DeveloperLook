"use client";

import Image from "next/image";

const properties = {
  similar: [
    {
      id: 1,
      title: "Room in Toronto",
      price: "$922 monthly",
      rating: "★ 4.75",
      img: "https://a0.muscache.com/im/pictures/hosting/Hosting-1290641430319416998/original/e32fd6b1-b111-422e-845e-191a6e320c5b.jpeg",
    },
    {
      id: 2,
      title: "Room in Toronto",
      price: "$1,059 monthly",
      rating: "★ 5.0",
      img: "https://a0.muscache.com/im/pictures/927e5ca7-071d-45c3-aec8-b2dc964e1913.jpg",
      badge: "Guest favorite",
    },
    {
      id: 3,
      title: "Home in Toronto",
      price: "$2,403 monthly",
      rating: "★ 4.86",
      img: "https://a0.muscache.com/im/pictures/a39dcb2c-b7b0-4415-af18-82725473f58c.jpg",
      badge: "Guest favorite",
    },
    {
      id: 4,
      title: "Room in Toronto",
      price: "$1,235 monthly",
      rating: "★ 5.0",
      img: "https://a0.muscache.com/im/pictures/miso/Hosting-634043436094087880/original/3715e678-14a0-4a06-b205-a42bec39b2af.jpeg",
    },
    {
      id: 5,
      title: "Room in Vaughan",
      price: "$1,059 monthly",
      rating: "★ 5.0",
      img: "https://a0.muscache.com/im/pictures/62efff8d-158a-4908-aa96-88df59b707bf.jpg",
    },
    {
      id: 6,
      title: "Guest suite in Toronto",
      price: "$2,043 monthly",
      rating: "★ 4.93",
      img: "https://a0.muscache.com/im/pictures/e05d69a6-9ec5-44f1-81b2-9861c8f9c07d.jpg",
      badge: "Guest favorite",
    },
    {
      id: 7,
      title: "Apartment in Toronto",
      price: "$2,150 monthly",
      rating: "★ 5.0",
      img: "https://a0.muscache.com/im/pictures/ab931d63-0add-467b-af27-757ca1609fd4.jpg",
      badge: "Guest favorite",
    },
  ],
  mississauga: [
    {
      id: 8,
      title: "Room in Mississauga",
      price: "$1,306 monthly",
      rating: "★ 5.0",
      img: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NjM3MzY4MjAzOTAxNzcxNTYz/original/9f434ad6-0b47-49cc-8150-7c5922d298b6.jpeg?im_w=720",
      badge: "Guest favorite",
    },
    {
      id: 9,
      title: "Home in Mississauga",
      price: "$2,106 monthly",
      rating: "★ 5.0",
      img: "https://a0.muscache.com/im/pictures/hosting/Hosting-635426407936522040/original/2af7e7df-f1fe-48b8-a409-77768d5a8fee.jpeg?im_w=720",
      badge: "Guest favorite",
    },
    {
      id: 10,
      title: "Guest suite in Mississauga",
      price: "$1,722 monthly",
      rating: "★ 4.87",
      img: "https://a0.muscache.com/im/pictures/hosting/Hosting-1389059708739261907/original/9657a972-e5b5-434e-8ed4-0cbe439174f4.jpeg?im_w=720",

    },
    {
      id: 11,
      title: "Apartment in Mississauga",
      price: "$2,879 monthly",
      rating: "★ 4.89",
      img: "https://a0.muscache.com/im/pictures/miso/Hosting-11604608/original/9d816d2f-946c-4c32-99f2-8b57ec5840c5.jpeg?im_w=720",
    },
    {
      id: 12,
      title: "Room in Mississauga",
      price: "$1,273 monthly",
      rating: "★ 5.0",
      img: "https://a0.muscache.com/im/pictures/hosting/Hosting-50669864/original/7f4dc0b8-cb59-4547-8bda-72a04a634d7d.jpeg",
    },
    {
      id: 13,
      title: "Room in Mississauga",
      price: "$1,316 monthly",
      rating: "★ 4.84",
      img: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NjM3MzY4MjAzOTAxNzcxNTYz/original/9f434ad6-0b47-49cc-8150-7c5922d298b6.jpeg",
    },
    {
      id: 14,
      title: "Room in Mississauga",
      price: "$1,288 monthly",
      rating: "★ 4.95",
      img: "https://a0.muscache.com/im/pictures/f0fb2b76-41cc-42ce-9b95-62d2c7578751.jpg",
      badge: "Guest favorite",
    },
  ],
};

export default function Propertylist() {
  return (
    <div className="px-6 py-8  mt-40 bg-white text-black space-y-10">
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
