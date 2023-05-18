// 繰り返し処理を理解する。

// 奇数が含まれるかの判定
const hasOdd = (numbers: number[]): boolean => {
  const isOdd = numbers.some((num) => num % 2 !== 0);
  return isOdd;
};

console.log(hasOdd([1, 2, 3, 4, 5]));

// 奇数の抽出
const odd = (numbers: number[]): number[] => {
  const oddNumbers = numbers.filter((number) => number % 2 !== 0);
  return oddNumbers;
};

console.log(odd([1, 2, 3, 4, 5]));

// 2乗の計算
const square = (numbers: number[]): number[] => {
  const squaredNumbers = numbers.map((number) => number ** 2);
  return squaredNumbers;
};

console.log(square([1, 2, 3, 4, 5]));
