"use client";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonCard() {
  return (
    <div
      className="
        relative flex-shrink-0 
        w-[85vw] sm:w-[300px] md:w-[260px] lg:w-[220px] 
        rounded-xl overflow-hidden shadow p-2
      "
    >

      <Skeleton height={160} borderRadius={12} />

     
      <div className="mt-2 space-y-2">
        <Skeleton width="70%" height={20} />
        <Skeleton width="50%" height={18} />
        <Skeleton width="40%" height={14} />
      </div>
    </div>
  );
}
