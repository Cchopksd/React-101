"use client";
import { useState } from "react";
import { usePerformanceTracker } from "./usePerformanceTracker";
import { expensiveCalculation } from "./expensiveCalculation";
import { processLargeDataSet } from "./processLargeDataSet";
import { generateDynamicStyles } from "./generateDynamicStyles";

// ❌ Component WITHOUT useMemo
export const WithoutUseMemo = () => {
  const [count, setCount] = useState(10);
  const [multiplier, setMultiplier] = useState(2);
  const [theme, setTheme] = useState("light");
  const [unrelatedState, setUnrelatedState] = useState("");

  const renderCount = usePerformanceTracker("WITHOUT useMemo");

  // ❌ Expensive calculation runs on EVERY render
  const expensiveResult = expensiveCalculation(count);

  // ❌ Large dataset processing runs on EVERY render
  const largeDataSet = Array.from(
    { length: 1000 },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (_, _i) => Math.random() * 100
  );
  const dataAnalysis = processLargeDataSet(largeDataSet);

  // ❌ Style generation runs on EVERY render
  const dynamicStyles = generateDynamicStyles(theme, "md", "solid");

  // ❌ Complex object creation on EVERY render
  const chartConfig = {
    type: "line",
    data: {
      labels: Array.from({ length: count }, (_, i) => `Item ${i + 1}`),
      datasets: [
        {
          label: "Values",
          data: Array.from({ length: count }, (_, i) => i * multiplier),
          borderColor: theme === "dark" ? "#fff" : "#000",
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true },
      },
    },
  };

  return (
    <div className="space-y-4 p-4 border-2 border-red-200 rounded-lg bg-red-50">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-red-700">❌ WITHOUT useMemo</h3>
        <span className="text-xs bg-red-100 px-2 py-1 rounded">
          Render #{renderCount}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Controls */}
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1">
              Count: {count}
            </label>
            <input
              type="range"
              min="1"
              max="50"
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Multiplier: {multiplier}
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={multiplier}
              onChange={(e) => setMultiplier(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Theme</label>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="w-full px-2 py-1 border rounded">
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Unrelated Input
            </label>
            <input
              type="text"
              value={unrelatedState}
              onChange={(e) => setUnrelatedState(e.target.value)}
              placeholder="Type here (causes re-render)..."
              className="w-full px-2 py-1 border rounded text-sm"
            />
          </div>
        </div>

        {/* Results */}
        <div className="space-y-3">
          <div className={`p-3 rounded border-2 ${dynamicStyles}`}>
            <h4 className="font-bold">Expensive Calculation</h4>
            <p>Result: {expensiveResult.toLocaleString()}</p>
          </div>

          <div className="bg-white p-3 rounded border">
            <h4 className="font-bold text-sm mb-2">Data Analysis</h4>
            <div className="text-xs space-y-1">
              <div>Average: {dataAnalysis.average.toFixed(2)}</div>
              <div>Median: {dataAnalysis.median.toFixed(2)}</div>
              <div>Std Dev: {dataAnalysis.standardDeviation.toFixed(2)}</div>
            </div>
          </div>

          <div className="bg-white p-3 rounded border">
            <h4 className="font-bold text-sm mb-2">Chart Config</h4>
            <div className="text-xs">
              <div>Data Points: {chartConfig.data.labels.length}</div>
              <div>
                Max Value: {Math.max(...chartConfig.data.datasets[0].data)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

