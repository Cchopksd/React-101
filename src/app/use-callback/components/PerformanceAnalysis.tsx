"use client";
import { useCallback, useState } from "react";

export // 📊 Performance Analysis Component
const PerformanceAnalysis = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<string[]>([]);

  const runAnalysis = useCallback(() => {
    setIsAnalyzing(true);
    const newResults = [
      "🔍 Analysis Results:",
      "",
      "❌ WITHOUT useCallback:",
      "• Child component re-renders every time parent updates",
      "• New function references created on every render",
      "• React.memo becomes ineffective",
      "• Memory pressure from garbage collection",
      "",
      "✅ WITH useCallback:",
      "• Child component only re-renders when necessary",
      "• Stable function references maintained",
      "• React.memo works effectively",
      "• Better memory management",
      "",
      "📈 Performance Impact:",
      "• Fewer DOM operations",
      "• Reduced JavaScript execution time",
      "• Lower memory consumption",
      "• Smoother user experience",
    ];

    setTimeout(() => {
      setResults(newResults);
      setIsAnalyzing(false);
    }, 1000);
  }, []);

  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-800">
          Performance Analysis
        </h3>
        <button
          onClick={runAnalysis}
          disabled={isAnalyzing}
          className="px-4 py-2 bg-purple-500 hover:bg-purple-600 disabled:bg-gray-400 text-black rounded">
          {isAnalyzing ? "Analyzing..." : "Run Analysis"}
        </button>
      </div>

      {results.length > 0 && (
        <div className="bg-white p-4 rounded border font-mono text-sm whitespace-pre-line">
          {results.join("\n")}
        </div>
      )}
    </div>
  );
};

