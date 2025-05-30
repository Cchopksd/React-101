"use client";

import { useState } from "react";
import { useSearch } from "@/hooks/useSearch";
import { SearchInput } from "./components/SearchInput";
import { SearchResults } from "./components/SearchResults";

export default function UseDebouncePage() {
  const [search, setSearch] = useState("");
  const { results, loading, debouncedQuery } = useSearch(search);

  return (
    <main className="min-h-screen bg-gray-50 flex justify-center items-start p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow p-8">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">
          ⌛ useDebounce + Fetch (Mock)
        </h2>

        <SearchInput
          value={search}
          onChange={setSearch}
        />

        <div className="mt-6 space-y-2 text-gray-600">
          <div>
            <span className="font-semibold">🔤 Current Input:</span>{" "}
            <span className="text-gray-800">{search || <em>none</em>}</span>
          </div>
          <div>
            <span className="font-semibold">⏳ Debounced Value:</span>{" "}
            <span className="text-blue-600">
              {debouncedQuery || <em>waiting...</em>}
            </span>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            📦 Results:
          </h3>
          <SearchResults
            results={results}
            loading={loading}
            debouncedQuery={debouncedQuery}
          />
        </div>
      </div>
    </main>
  );
}

