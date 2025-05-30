"use client";
import { useRef } from "react";

export // 🔍 Utility component เพื่อติดตาม renders
const RenderTracker = ({ name, color }: { name: string; color: string }) => {
  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <div className={`text-xs p-1 rounded ${color}`}>
      {name}: {renderCount.current} renders
    </div>
  );
};

