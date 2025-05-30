// 📊 Complex data processing
export const processLargeDataSet = (
  data: number[]
): {
  sum: number;
  average: number;
  max: number;
  min: number;
  median: number;
  standardDeviation: number;
} => {
  console.log(`📊 Processing ${data.length} items`);

  const sum = data.reduce((acc, val) => acc + val, 0);
  const average = sum / data.length;
  const max = Math.max(...data);
  const min = Math.min(...data);

  // Calculate median
  const sorted = [...data].sort((a, b) => a - b);
  const median =
    sorted.length % 2 === 0
      ? (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2
      : sorted[Math.floor(sorted.length / 2)];

  // Calculate standard deviation
  const variance =
    data.reduce((acc, val) => acc + Math.pow(val - average, 2), 0) /
    data.length;
  const standardDeviation = Math.sqrt(variance);

  return { sum, average, max, min, median, standardDeviation };
};
