"use client";

import { Tab } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function TabsSection() {
  const categories = {
    "Travel tips & inspiration": [
      { title: "Family travel hub", desc: "Tips and inspiration" },
      { title: "Family budget travel", desc: "Get there for less" },
      { title: "Vacation ideas for any budget", desc: "Make it special without making it stressful" },
      { title: "Travel Europe on a budget", desc: "How to take the kids to Europe for less" },
      { title: "Outdoor adventure", desc: "Explore nature with the family" },
      { title: "Bucket list national parks", desc: "Must-see parks for family travel" },
    ],
    "Airbnb-friendly apartments": [
      { title: "Albuquerque", desc: "New Mexico" },
      { title: "Atlanta Metro", desc: "Georgia" },
      { title: "Augusta", desc: "Georgia" },
      { title: "Austin Metro", desc: "Texas" },
      { title: "Baton Rouge", desc: "Louisiana" },
      { title: "Bentonville", desc: "Arkansas" },
      { title: "Birmingham", desc: "Alabama" },
      { title: "Boise", desc: "Idaho" },
      { title: "Boston Metro", desc: "Massachusetts" },
      { title: "Boulder", desc: "Colorado" },
      { title: "Charlotte", desc: "North Carolina" },
      { title: "Chicago Metro", desc: "Illinois" },
      { title: "Cincinnati", desc: "Ohio" },
      { title: "Columbus", desc: "Ohio" },
      { title: "Crestview", desc: "Florida" },
      { title: "Dallas", desc: "Texas" },
      { title: "Denver", desc: "Colorado" },
    ],
  };

  return (
    <div className="w-full mx-auto px-6 py-10 bg-[#F7F7F7]">
      <h2 className="text-2xl font-semibold mb-4 text-black">
        Inspiration for future getaways
      </h2>

      <Tab.Group>
     
        <Tab.List className="flex space-x-6 border-b border-gray-200">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "py-2 px-1 text-sm font-medium focus:outline-none",
                  selected
                    ? "border-b-2 border-black text-black"
                    : "text-gray-500 hover:text-black hover:border-b-2 hover:border-gray-300"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>

        
        <Tab.Panels className="mt-6">
          {Object.values(categories).map((items, idx) => (
            <Tab.Panel key={idx}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {items.map((item, i) => (
                  <div key={i}>
                    <p className="font-medium text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
