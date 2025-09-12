"use client";

import { useEffect } from "react";

export default function useClickOutside(
  ref: React.RefObject<HTMLDivElement | null> ,
  handler: () => void,
  enabled: boolean = true
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    }

    if (enabled) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handler, enabled]);
}
