// 条件分岐を使うことができる

// 温度チェッカー
const checkTemperature = (t: number): string => {
  if (t >= 30) return 'hot';
  if (t >= 15) return 'Warm';
  return 'Cold';
};

console.log(checkTemperature(30));

// 偶数チェッカー
const checkOddOrEven = (n: number): string => {
  if (n % 2 === 0) return 'Even';
  return 'Odd';
};

console.log(checkOddOrEven(2));
