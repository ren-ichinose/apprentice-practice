"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const beverage_class_1 = require("./beverage_class");
const coffe_class_1 = require("./coffe_class");
const snack_class_1 = require("./snack_class");
class VendingMachine {
    constructor(manufacturer_name) {
        this.manufacturer_name = manufacturer_name;
        this.deposit_coins = 0;
        this.cupsStock = 0;
    }
    press_button(beverage) {
        if (!this.cupsStock) {
            console.log("");
            return;
        }
        const beverageName = beverage.getName();
        const beveragePrice = beverage.getPrice();
        if (!beverageName) {
            console.log("");
            return;
        }
        if (this.deposit_coins < beveragePrice) {
            console.log("");
            return;
        }
        this.cupsStock -= 1;
        this.deposit_coins -= beveragePrice;
        return beverageName;
    }
    deposit_coin(coin) {
        if (coin !== 100) {
            console.log("");
            return;
        }
        this.deposit_coins += coin;
    }
    add_cup(cups) {
        const cups_max = 100 - this.cupsStock;
        if (cups_max < cups) {
            console.log(`${cups_max}以下の数字を入力してください`);
            return;
        }
        this.cupsStock += cups;
    }
}
const hot_cup_coffee = new coffe_class_1.Coffe("hot");
const cider = new beverage_class_1.Beverage("cider");
const snack = new snack_class_1.Snack("ポテチ");
const vending_machine = new VendingMachine("サントリー");
vending_machine.add_cup(1);
vending_machine.deposit_coin(100);
vending_machine.deposit_coin(100);
console.log(vending_machine.press_button(cider));
console.log(vending_machine.press_button(hot_cup_coffee));
vending_machine.add_cup(1);
console.log(vending_machine.press_button(hot_cup_coffee));
console.log(vending_machine.press_button(snack));
vending_machine.deposit_coin(100);
vending_machine.deposit_coin(100);
vending_machine.add_cup(1);
console.log(vending_machine.press_button(snack));
//# sourceMappingURL=main.js.map