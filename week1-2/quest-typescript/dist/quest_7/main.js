"use strict";
// IDと従業員の名前をセットにして出力する関数を定義
const print_names = (names) => {
    names.forEach((name, index) => {
        const id = index + 1;
        console.log(`${id}. ${name}`);
    });
};
print_names(["上田", "田仲", "堀田"]);
// 与えられた整数の配列の要素を2乗した配列を返す関数を定義してください
const square = (nums) => {
    const squareNums = nums.map((num) => num * num);
    return squareNums;
};
const squared_numbers = square([5, 7, 10]);
console.log(squared_numbers);
// 整数の配列から偶数を抽出した配列を返す関数を定義
const select_even_numbers = (nums) => {
    const evenNums = nums.filter((num) => num % 2 === 0);
    return evenNums;
};
const even_numbers = select_even_numbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(even_numbers);
//# sourceMappingURL=main.js.map