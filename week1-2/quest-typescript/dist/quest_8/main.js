"use strict";
// "#{国名}の首都は#{首都名}です"と出力する関数を定義
const print_capitals = (capitals) => {
    Object.keys(capitals).forEach((country) => {
        console.log(`${country}の首都は${capitals[country]}です`);
    });
};
print_capitals({ 日本: "東京", アメリカ: "ワシントンD.C." });
//# sourceMappingURL=main.js.map