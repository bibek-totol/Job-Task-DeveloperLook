
"use client";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonCard() {
  return (
    <div className="relative min-w-[220px] rounded-xl overflow-hidden shadow p-2">
      <Skeleton height={160} borderRadius={12} />
      <div className="mt-2 space-y-2">
        <Skeleton width={150} height={20} />
        <Skeleton width={100} height={18} />
        <Skeleton width={80} height={14} />
      </div>
    </div>
  );
}
