"use client";
import React, { useEffect, useRef } from "react";
import { RenderTracker } from "./RenderTracker";

// 👶 Child Component ที่จะแสดงผลกระทบของการ re-render
export const ChildComponent = React.memo(
  ({
    onClick,
    label,
    trackingId,
  }: {
    onClick: () => void;
    label: string;
    trackingId: string;
  }) => {
    const renderCount = useRef(0);
    renderCount.current += 1;

    // 🐛 Log เพื่อดู re-render ใน console
    useEffect(() => {
      console.log(`${trackingId} Child rendered: ${renderCount.current} times`);
    });

    return (
      <div className="border-2 border-dashed border-gray-300 p-3 rounded">
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium">{label}</span>
          <RenderTracker
            name="Child"
            color="bg-blue-100 text-blue-400"
          />
        </div>
        <button
          onClick={onClick}
          className="w-full px-3 py-1 bg-blue-500 hover:bg-blue-600 text-black rounded text-sm">
          Click Me ({renderCount.current} renders)
        </button>
      </div>
    );
  }
);
ChildComponent.displayName = "ChildComponent";
// เพื่อให้ React.memo ทำงานได้อย่างถูกต้อง
// ต้องตั้งชื่อ displayName ให้กับ component ที่ใช้ React.memo
// เพื่อให้ React DevTools แสดงชื่อที่ถูกต้อง
// และช่วยในการดีบัก
// และติดตามการ re-render ได้ง่ายขึ้น

