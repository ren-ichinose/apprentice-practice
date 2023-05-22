'use strict';
const checkDivisibleByFive = (num) => {
  if (num % 5 !== 0) throw new Error('数値は5で割り切れません');
  return true;
};
try {
  console.log(checkDivisibleByFive(5));
  console.log(checkDivisibleByFive(7));
} catch (error) {
  if (error instanceof Error) console.log(error.message);
}
//# sourceMappingURL=main.js.map
