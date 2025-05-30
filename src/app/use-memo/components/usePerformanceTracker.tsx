"use client";import { useEffect, useRef } from "react";

// 🔧 Utility: Performance measurement
export const usePerformanceTracker = (label: string) => {
  const renderCount = useRef(0);
  const startTime = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
    startTime.current = performance.now();

    return () => {
      const endTime = performance.now();
      const duration = endTime - startTime.current;
      console.log(
        `${label} - Render #${renderCount.current}: ${duration.toFixed(2)}ms`
      );
    };
  });

  return renderCount.current;
};

