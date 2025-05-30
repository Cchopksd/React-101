"use client";
import { useCallback, useState } from "react";
import { RenderTracker } from "./RenderTracker";
import { ChildComponent } from "./ChildComponent";

// ✅ Example WITH useCallback
export const WithUseCallback = () => {
  const [count, setCount] = useState(0);
  const [childClicks, setChildClicks] = useState(0);
  const [otherState, setOtherState] = useState("");

  // ✅ ฟังก์ชันนี้จะถูก memoize และไม่สร้างใหม่ถ้า dependencies ไม่เปลี่ยน
  const handleChildClick = useCallback(() => {
    console.log("🟢 WITH useCallback: Same function reference maintained");
    setChildClicks((prev) => prev + 1);
  }, []); // ไม่มี dependency หมายถึงฟังก์ชันจะไม่เปลี่ยนเลย

  // ✅ ฟังก์ชันนี้ก็เช่นกัน - stable reference
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log("🟢 WITH useCallback: Input handler stable");
      setOtherState(e.target.value);
    },
    []
  ); // ไม่ต้องการ dependency ในกรณีนี้

  return (
    <div className="space-y-4 p-4 border-2 border-green-200 rounded-lg bg-green-50">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-green-700">
          ✅ WITH useCallback
        </h3>
        <RenderTracker
          name="Parent"
          color="bg-green-100 text-green-800"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Count Section */}
        <div className="space-y-2">
          <h4 className="font-medium">Main Counter: {count}</h4>
          <button
            onClick={() => setCount((c) => c + 1)}
            className="w-full px-3 py-2 bg-green-500 hover:bg-green-600 text-black rounded">
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
            label="Child (Optimized)"
            trackingId="WITH"
          />
        </div>
      </div>
    </div>
  );
};

