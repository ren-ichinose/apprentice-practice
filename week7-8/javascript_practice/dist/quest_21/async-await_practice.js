'use strict';
function asyncSortNumbers(numbers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = numbers.sort();
      resolve(result);
    }, 2000);
  });
}
async function sortNumbers() {
  const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  const sortedNumbers = await asyncSortNumbers(numbers);
  console.log(sortedNumbers);
}
sortNumbers();
console.log('同期処理');
//# sourceMappingURL=async-await_practice.js.map
