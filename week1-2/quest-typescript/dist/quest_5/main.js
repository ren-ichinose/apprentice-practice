"use strict";
// xとyの大小関係を出力する関数を定義
// 矛盾が生じていると感じたため下記の通り実装
// アウトプットに記載されている定義ではななく、
// 呼び出しとアウトプットの例に従って実装
const greater = (x, y) => {
    if (x > y) {
        console.log("x > y");
    }
    else if (x === y) {
        console.log("x == y");
    }
    else {
        console.log("x < y");
    }
};
greater(5, 4);
greater(-50, -40);
greater(10, 10);
// 電車の料金を出力する関数の定義
const train_fare = (age) => {
    if (age >= 12) {
        console.log(200);
    }
    else if (age >= 6) {
        console.log(100);
    }
    else if (age >= 0) {
        console.log(0);
    }
    else {
        console.log("0以上の整数で試してください");
    }
};
train_fare(12);
train_fare(6);
train_fare(5);
// 2つのブーリアン値の比較をする関数の定義
const xor = (x, y) => {
    if (x == y) {
        console.log("false");
    }
    else if (x || y) {
        console.log("true");
    }
};
xor(true, true);
xor(true, false);
xor(false, true);
xor(false, false);
//# sourceMappingURL=main.js.map