type Props = {
  count: number;
};

export function CounterDisplay({ count }: Props) {
  return (
    <p className="text-5xl font-bold text-center text-gray-800 transition-all duration-300">
      {count}
    </p>
  );
}

