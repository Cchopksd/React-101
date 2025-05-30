"use client";
import React from "react";
import { WithoutUseMemo } from "./components/WithoutUseMemo";
import { WithUseMemo } from "./components/WithUseMemo";
import { PerformanceComparison } from "./components/PerformanceComparison";

// 🏠 Main App
const App = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-white">
          useMemo Performance Optimization
        </h1>
        <p className="text-white">
          เปิด Console เพื่อดู performance logs และเปรียบเทียบความแตกต่าง
        </p>
      </div>

      <div className="space-y-6">
        <WithoutUseMemo />
        <WithUseMemo />
        <PerformanceComparison />
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-bold text-blue-800 mb-2">💡 How to Test:</h3>
        <ol className="list-decimal list-inside space-y-1 text-blue-700 text-sm">
          <li>เปิด Developer Console (F12)</li>
          <li>ลองพิมพ์ใน &quot;Unrelated Input&quot; fields</li>
          <li>สังเกตุ console logs - section บนจะทำการคำนวณใหม่ทุกครั้ง</li>
          <li>section ล่างจะทำการคำนวณเฉพาะเมื่อ dependencies เปลี่ยน</li>
          <li>ลองเปลี่ยน count, multiplier, และ theme</li>
          <li>สังเกตุความแตกต่างใน performance</li>
        </ol>
      </div>
    </div>
  );
};

export default App;

