'use client';
import { useState, FormEvent } from "react";

export default function NoRefForm() {
  const [name, setName] = useState<string>("");
  const [submitCount, setSubmitCount] = useState<number>(0);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newCount = submitCount + 1;
    setSubmitCount(newCount);
    console.log(`(noRef) Submitted ${newCount} times`);
    console.log(`(noRef) Name: ${name}`);
    setName("");
  };

  return (
    <div className="bg-green-50 p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold text-green-800 mb-4">
        Form without useRef
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
          Submit
        </button>
      </form>
      <p className="text-sm text-green-700 mt-2">
        Submitted <strong>{submitCount}</strong> times.
      </p>
    </div>
  );
}

