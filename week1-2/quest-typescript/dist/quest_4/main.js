"use strict";
// 三角形の面積を求める関数
const area = (x, y) => {
    if (x < 1 || y > 100)
        console.log("1以上、100以下の数字で試してください");
    const triangleArea = (x * y) / 2;
    console.log(triangleArea);
};
area(5, 4);
//# sourceMappingURL=main.js.map