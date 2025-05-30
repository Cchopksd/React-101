"use client";

import { useCounter } from "@/hooks/useCounter";
import { CounterDisplay } from "./components/CounterDisplay";
import { CounterControls } from "./components/CounterControls";

export default function UseCounterPage() {
  const { count, increment, decrement, reset } = useCounter(10, 1);

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">
          🔁 useCounter (Custom Hook)
        </h2>

        <CounterDisplay count={count} />
        <CounterControls
          onIncrement={increment}
          onDecrement={decrement}
          onReset={reset}
        />
      </div>
    </main>
  );
}

