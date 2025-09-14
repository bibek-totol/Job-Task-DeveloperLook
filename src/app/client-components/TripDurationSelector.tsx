"use client";

import React, { useState, useEffect } from "react";
import CircularSlider from "@fseehawer/react-circular-slider";
import { useAppContext } from "../context/AppContext";

export default function TripDurationSelector() {
  const [months, setMonths] = useState(3);
  const {searchfieldData, setSearchfieldData} = useAppContext();

  const startDate = new Date(2025, 9, 1); 
  const endDate = new Date(startDate);
  endDate.setMonth(endDate.getMonth() + months);

  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });


    useEffect(() => {
    
      setSearchfieldData({
        ...searchfieldData,
        checkin: formatDate(startDate),
        checkout: formatDate(endDate),
      });
    }, [months]);

  return (
    <div className="flex flex-col items-center bg-white">
      <h2 className=" text-lg font-semibold text-gray-800">
        When’s your trip?
      </h2>

      
      <div className="relative w-72 h-72 mt-2 flex items-center justify-center">
        <div className="absolute w-[280px] h-[280px] rounded-full  shadow-lg  shadow-gray-400"
        
        />
        <div
          className="absolute w-[280px] h-[280px] rounded-full blur-xs "
          style={{
            background: `linear-gradient(90deg, #ADACAC, #EDEBEB, #F2F0F0)`,
          
          }}
        />

        <CircularSlider
          width={280}
          label=""
          knobColor="#fff"
          knobSize={65}
          trackColor="transparent" 
          progressColorFrom="#D62929"
          progressColorTo="#B02121"
          progressSize={65}
          trackSize={65}
          data={[...Array(12).keys()].map((i) => i + 1)}
          dataIndex={months-1}
          onChange={(value) => setMonths(Number(value))}
        />

        
        <div className="absolute w-36 h-36 rounded-full bg-white  shadow-[0_-14px_0px_-1px_rgba(255, 255, 255)] drop-shadow-xl drop-shadow-gray-500 flex flex-col items-center justify-center">
          <span className="text-sm text-gray-500 mt-16">months</span>
        </div>
      </div>

      <p className="mt-6 text-black">
        <span className="font-medium underline p-2">{formatDate(startDate)}</span> to{" "}
        <span className="font-medium underline">{formatDate(endDate)}</span>
      </p>
    </div>
  );
}
