"use client";
import { useState } from "react";
import { RenderTracker } from "./RenderTracker";
import { ChildComponent } from "./ChildComponent";

// 🚫 Example WITHOUT useCallback
export const WithoutUseCallback = () => {
  const [count, setCount] = useState(0);
  const [childClicks, setChildClicks] = useState(0);
  const [otherState, setOtherState] = useState("");

  // ❌ ฟังก์ชันนี้จะถูกสร้างใหม่ทุกครั้งที่ component re-render
  const handleChildClick = () => {
    console.log("🔴 WITHOUT useCallback: New function created");
    setChildClicks((prev) => prev + 1);
  };

  // ❌ ฟังก์ชันนี้ก็เช่นกัน
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("🔴 WITHOUT useCallback: Input handler recreated");
    setOtherState(e.target.value);
  };

  return (
    <div className="space-y-4 p-4 border-2 border-red-200 rounded-lg bg-red-50">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-red-700">
          ❌ WITHOUT useCallback
        </h3>
        <RenderTracker
          name="Parent"
          color="bg-red-100 text-red-800"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Count Section */}
        <div className="space-y-2">
          <h4 className="font-medium">Main Counter: {count}</h4>
          <button
            onClick={() => setCount((c) => c + 1)}
            className="w-full px-3 py-2 bg-red-500 hover:bg-red-600 text-black rounded">
            Increment Count
          </button>
        </div>

        {/* Input Section */}
        <div className="space-y-2">
          <h4 className="font-medium">Other State</h4>
          <input
            type="text"
            value={otherState}
            onChange={handleInputChange}
            placeholder="Type something..."
            className="w-full px-2 py-1 border rounded text-sm"
          />
        </div>

        {/* Child Section */}
        <div className="space-y-2">
          <h4 className="font-medium">Child Clicks: {childClicks}</h4>
          <ChildComponent
            onClick={handleChildClick}
            label="Child (Re-renders Often)"
            trackingId="WITHOUT"
          />
        </div>
      </div>
    </div>
  );
};

