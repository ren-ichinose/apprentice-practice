"use strict";
const checkTemperature = (t) => {
    if (t >= 30)
        return 'hot';
    if (t >= 15)
        return 'Warm';
    return 'Cold';
};
console.log(checkTemperature(30));
const checkOddOrEven = (n) => {
    if (n % 2 === 0)
        return 'Even';
    return 'Odd';
};
console.log(checkOddOrEven(2));
//# sourceMappingURL=main.js.map