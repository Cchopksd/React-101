// 🐌 Expensive calculation function
export const expensiveCalculation = (num: number): number => {
  console.log(`🔥 Running expensive calculation for: ${num}`);
  let result = 0;
  // Simulate heavy computation
  for (let i = 0; i < num * 100000; i++) {
    result += Math.sqrt(i);
  }
  return Math.floor(result);
};

