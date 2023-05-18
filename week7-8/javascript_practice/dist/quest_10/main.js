"use strict";
const hasOdd = (numbers) => {
    const isOdd = numbers.some((num) => num % 2 !== 0);
    return isOdd;
};
console.log(hasOdd([1, 2, 3, 4, 5]));
const odd = (numbers) => {
    const oddNumbers = numbers.filter((number) => number % 2 !== 0);
    return oddNumbers;
};
console.log(odd([1, 2, 3, 4, 5]));
const square = (numbers) => {
    const squaredNumbers = numbers.map((number) => number ** 2);
    return squaredNumbers;
};
console.log(square([1, 2, 3, 4, 5]));
//# sourceMappingURL=main.js.map