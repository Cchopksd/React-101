"use client";import { useMemo, useState } from "react";

// 📈 Performance Comparison
export const PerformanceComparison = () => {
  const [showComparison, setShowComparison] = useState(false);

  const comparisonData = useMemo(() => {
    return {
      scenarios: [
        {
          name: "Simple Re-render",
          withoutMemo: "All calculations run again",
          withMemo: "Only affected calculations run",
        },
        {
          name: "Unrelated State Change",
          withoutMemo: "Heavy computations triggered",
          withMemo: "No unnecessary computations",
        },
        {
          name: "Complex Object Creation",
          withoutMemo: "New references every render",
          withMemo: "Stable references maintained",
        },
        {
          name: "Memory Usage",
          withoutMemo: "Higher due to repeated calculations",
          withMemo: "Lower with intelligent caching",
        },
      ],
    };
  }, []);

  return (
    <div className="p-4 bg-purple-50 rounded-lg border-2 border-purple-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-purple-700">
          📈 Performance Analysis
        </h3>
        <button
          onClick={() => setShowComparison(!showComparison)}
          className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded">
          {showComparison ? "Hide" : "Show"} Comparison
        </button>
      </div>

      {showComparison && (
        <div className="bg-white rounded-lg p-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Scenario</th>
                <th className="text-left py-2 text-red-600">Without useMemo</th>
                <th className="text-left py-2 text-green-600">With useMemo</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.scenarios.map((scenario, index) => (
                <tr
                  key={index}
                  className="border-b">
                  <td className="py-2 font-medium">{scenario.name}</td>
                  <td className="py-2 text-red-600">
                    ❌ {scenario.withoutMemo}
                  </td>
                  <td className="py-2 text-green-600">
                    ✅ {scenario.withMemo}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};