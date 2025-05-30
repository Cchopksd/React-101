type Props = {
  value: string;
  onChange: (val: string) => void;
};

export function SearchInput({ value, onChange }: Props) {
  return (
    <div>
      <label
        htmlFor="search"
        className="block text-sm font-medium text-gray-600 mb-1">
        ค้นหาคำ (จะ trigger หลังจากหยุดพิมพ์ 500ms)
      </label>
      <input
        id="search"
        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition mb-4"
        placeholder="Type something like 'react'"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

