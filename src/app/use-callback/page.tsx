"use client";
import { WithoutUseCallback } from "./components/WithoutUseCallback";
import { WithUseCallback } from "./components/WithUseCallback";
import { PerformanceAnalysis } from "./components/PerformanceAnalysis";

// 🏠 Main App Component
const App = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-white">
          useCallback Comparison Demo
        </h1>
        <p className="text-white">
          เปิด Console เพื่อดู render logs และสังเกตุความแตกต่าง
        </p>
      </div>

      <div className="space-y-6">
        <WithoutUseCallback />
        <WithUseCallback />
        <PerformanceAnalysis />
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-bold text-blue-800 mb-2">💡 How to Test:</h3>
        <ol className="list-decimal list-inside space-y-1 text-blue-700 text-sm">
          <li>เปิด Developer Console (F12)</li>
          <li>
            กดปุ่ม &quot;Increment Count&quot; ใน section บน (WITHOUT
            useCallback)
          </li>
          <li>สังเกตุว่า Child component re-render ด้วย</li>
          <li>
            กดปุ่ม &quot;Increment Count&quot; ใน section ล่าง (WITH
            useCallback)
          </li>
          <li>สังเกตุว่า Child component ไม่ re-render</li>
          <li>ลองพิมพ์ใน input fields และดูผลลัพธ์</li>
        </ol>
      </div>
    </div>
  );
};

export default App;

