"use client";
import { useRef, useState, useEffect, FormEvent } from "react";

export default function RefForm() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const submitCountRef = useRef<number>(0);
  const [name, setName] = useState<string>("");

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitCountRef.current += 1;
    console.log(`(useRef) Submitted ${submitCountRef.current} times`);
    console.log(`(useRef) Name: ${name}`);
    setName("");
  };

  return (
    <div className="bg-blue-50 p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold text-blue-800 mb-4">
        Form with useRef
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4">
        <input
          ref={inputRef}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
          Submit
        </button>
      </form>
      <p className="text-sm text-blue-700 mt-2">
        Submit count is stored in useRef (not shown in UI).
      </p>
    </div>
  );
}

