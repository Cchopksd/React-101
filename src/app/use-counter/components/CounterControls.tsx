type Props = {
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
};

export function CounterControls({ onIncrement, onDecrement, onReset }: Props) {
  return (
    <div className="flex justify-center gap-3 mt-6">
      <button
        onClick={onIncrement}
        className="px-5 py-2 bg-green-500 text-white font-semibold rounded-xl shadow hover:bg-green-600 transition"
        aria-label="เพิ่มค่า">
        ➕
      </button>
      <button
        onClick={onDecrement}
        className="px-5 py-2 bg-red-500 text-white font-semibold rounded-xl shadow hover:bg-red-600 transition"
        aria-label="ลดค่า">
        ➖
      </button>
      <button
        onClick={onReset}
        className="px-5 py-2 bg-gray-400 text-white font-semibold rounded-xl shadow hover:bg-gray-500 transition"
        aria-label="รีเซ็ต">
        🔄
      </button>
    </div>
  );
}

