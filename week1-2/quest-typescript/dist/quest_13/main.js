"use strict";
// 例外処理の付いた電卓プログラムを作成
const calculate = (num1, num2, operator) => {
    const operators = ["+", "-", "*", "/"];
    try {
        if (num2 === 0 && operator === "/")
            throw new Error("ゼロによる割り算は許可されていません");
        if (!operators.includes(operator))
            throw new Error("演算子には +、-、、/ のいずれかを使用してください");
        if (!Number.isInteger(num1) || !Number.isInteger(num2))
            throw new Error("num1、 num2 には整数を入力してください");
        switch (operator) {
            case "+":
                console.log(num1 + num2);
                break;
            case "-":
                console.log(num1 - num2);
                break;
            case "*":
                console.log(num1 * num2);
                break;
            case "/":
                console.log(num1 / num2);
                break;
            default:
                throw new Error("演算子には +、-、、/ のいずれかを使用してください");
        }
        return;
    }
    catch (error) {
        if (error instanceof Error)
            console.log(error.message);
    }
};
calculate(1, 0, "/");
calculate(1.5, 2, "+");
calculate(1.5, 2, "**");
calculate(5, 2, "*");
//# sourceMappingURL=main.js.map