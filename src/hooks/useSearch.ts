import { useState, useEffect } from "react";
import { useDebounce } from "./useDebounce";

export function useSearch(query: string) {
  const debouncedQuery = useDebounce(query, 500);
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!debouncedQuery) {
      setResults([]);
      return;
    }

    setLoading(true);

    const timeout = setTimeout(() => {
      const mockData = ["react", "redux", "router", "rest api", "recoil"];
      const filtered = mockData.filter((item) =>
        item.toLowerCase().includes(debouncedQuery.toLowerCase())
      );
      setResults(filtered);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [debouncedQuery]);

  return { results, loading, debouncedQuery };
}

