'use strict';
function asyncSort(numbers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = numbers.sort();
      resolve(result);
    }, 2000);
  });
}
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
asyncSort(numbers)
  .then((sortedNumbers) => {
    console.log(sortedNumbers);
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });
console.log('同期処理');
//# sourceMappingURL=promise_practice.js.map
