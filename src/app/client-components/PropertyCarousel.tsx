"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Property } from "../type";
import SkeletonCard from "./SkeletonCard";


interface Props { 
  title: string;
  category: string;
}


export default function PropertyCarousel({ title, category }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [startIndex, setStartIndex] = useState<number>(0);

  const [items, setItems] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api`);
      const data: Property[] = await res.json();
      setItems(data.filter((p) => p.category === category));
      setLoading(false);
    }
    fetchData();
  }, [category]);


  const visibleItems = 6;
  const cardWidth = 240;

  const handleNext = () => {
    if (items && startIndex + visibleItems < items.length) {
      setStartIndex(startIndex + 1);
      scrollRef.current?.scrollTo({
        left: (startIndex + 1) * cardWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
      scrollRef.current?.scrollTo({
        left: (startIndex - 1) * cardWidth,
        behavior: "smooth",
      });
    }
  };

  

  return (
    <div>
      <div className="flex items-center justify-between mb-4 px-14">
        
        {loading ? (
          <div className="h-6 w-48 bg-gray-200 rounded-md animate-pulse" />
        ) : (
          <h2 className="text-xl font-semibold">{title}</h2>
        )}
        <div className="flex gap-2">
          <button onClick={handlePrev} disabled={startIndex === 0}>
            <ChevronLeft
              className={`w-8 h-8 rounded-full border border-gray-300 p-1 cursor-pointer ${
                startIndex === 0 ? "opacity-30" : " opacity-100"
              }`}
            />
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex + visibleItems >= items?.length}
          >
            <ChevronRight
              className={`w-8 h-8 rounded-full border border-gray-300 p-1 cursor-pointer ${
                startIndex + visibleItems >= items?.length
                  ? "opacity-30"
                  : "opacity-100"
              }`}
            />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex ml-14 gap-4 overflow-hidden scroll-smooth"
      >
        {loading
          ? Array.from({ length: visibleItems }).map((_, idx) => (
              <SkeletonCard key={idx} />
            ))
          : items.map((item) => (
              <div
                key={item.id}
                className="relative min-w-[220px] rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={300}
                  height={200}
                  loading="lazy"
                  className="h-40 w-full object-cover"
                />
                {item.badge && (
                  <span className="absolute top-2 left-2 bg-white text-xs font-bold px-2 py-1 rounded-full shadow">
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
  );
}
