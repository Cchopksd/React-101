import { SkeletonLoader } from "./SkeletonLoader";

type Props = {
  results: string[];
  loading: boolean;
  debouncedQuery: string;
};

export function SearchResults({ results, loading, debouncedQuery }: Props) {
  if (loading) return <SkeletonLoader />;

  if (!debouncedQuery) {
    return <p className="text-gray-400 italic">พิมพ์คำเพื่อเริ่มค้นหา</p>;
  }

  if (results.length === 0) {
    return <p className="text-gray-400 italic">ไม่พบข้อมูลที่ตรงกับคำค้น</p>;
  }

  return (
    <ul className="list-disc list-inside text-gray-700 space-y-1">
      {results.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

