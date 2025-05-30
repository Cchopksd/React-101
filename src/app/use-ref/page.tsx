"use client";

import { useRef, useState, useEffect } from "react";

export default function UseRefExamplePage() {
  // ใช้ useState สำหรับค่าที่ใช้แสดงบน UI (trigger render)
  const [inputValue, setInputValue] = useState("");

  // useRef ใช้เก็บค่าที่ไม่จำเป็นต้อง render ใหม่ เช่น counter
  const renderCountRef = useRef(0);

  // เก็บ DOM element (input) เพื่อเข้าถึงฟังก์ชันของมัน เช่น focus()
  const inputRef = useRef<HTMLInputElement>(null);

  // เพิ่ม render count ทุกครั้งที่ component render ใหม่
  useEffect(() => {
    renderCountRef.current += 1;
  });

  // สั่งให้ input ได้รับ focus ตอน mount (เหมือน auto-focus)
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-700 mb-6">
          🔍 useRef Example
        </h1>

        {/* input นี้จะ auto-focus และเก็บค่าล่าสุดผ่าน state */}
        <input
          ref={inputRef} // ผูกกับ useRef เพื่อเข้าถึง DOM node
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Start typing..."
        />

        <div className="mt-6 space-y-2 text-gray-600">
          {/* แสดงค่าที่ผู้ใช้พิมพ์ */}
          <p>
            📝 <strong>Current Input:</strong> {inputValue || <em>(empty)</em>}
          </p>

          {/* แสดงจำนวนครั้งที่ component render โดยไม่ต้องใช้ useState */}
          <p>
            🔁 <strong>Render Count:</strong> {renderCountRef.current}
          </p>
        </div>
      </div>
    </main>
  );
}

