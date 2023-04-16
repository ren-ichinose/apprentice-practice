export const getWinnerScore = (number: number[]): number => {
  // 得点を比較して、最も高い得点を返す
  const result = Math.max(...number);
  return result;
};

// // テストコード
// console.log(getWinnerScore([2,5,14,52,12,34]))
