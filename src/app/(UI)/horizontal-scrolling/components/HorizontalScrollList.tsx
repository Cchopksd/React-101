"use client"; // Required for event handlers in Next.js 13+

import { useRef } from "react";

export default function HorizontalScroll() {
  const containerRef = useRef(null);

  const handleWheel = (e) => {
    if (containerRef.current) {
      // Prevent vertical scrolling
      e.preventDefault();
      // Scroll horizontally instead
      containerRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <div
      ref={containerRef}
      onWheel={handleWheel}
      className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory whitespace-nowrap">
      {/* Your scrollable content */}
      <div className="inline-block w-64 h-64 bg-blue-500 snap-center mx-2"></div>
      <div className="inline-block w-64 h-64 bg-green-500 snap-center mx-2"></div>
      <div className="inline-block w-64 h-64 bg-red-500 snap-center mx-2"></div>
      <div className="inline-block w-64 h-64 bg-yellow-500 snap-center mx-2"></div>
      <div className="inline-block w-64 h-64 bg-purple-500 snap-center mx-2"></div>
      <div className="inline-block w-64 h-64 bg-pink-500 snap-center mx-2"></div>
    </div>
  );
}
