import { Beverage } from "./beverage_class";
import { Coffe } from "./coffe_class";
import { Item } from "./item_class";
import { Snack } from "./snack_class";

class VendingMachine {
  private readonly manufacturer_name: string;
  private deposit_coins: number;
  private cupsStock: number;

  constructor(manufacturer_name: string) {
    this.manufacturer_name = manufacturer_name;
    this.deposit_coins = 0;
    this.cupsStock = 0;
  }

  press_button<T extends Item>(beverage: T): void | string {
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

  deposit_coin(coin: number): void {
    if (coin !== 100) {
      console.log("");
      return;
    }
    this.deposit_coins += coin;
  }

  add_cup(cups: number) {
    const cups_max = 100 - this.cupsStock;
    if (cups_max < cups) {
      console.log(`${cups_max}以下の数字を入力してください`);
      return;
    }
    this.cupsStock += cups;
  }
}

const hot_cup_coffee = new Coffe("hot");
const cider = new Beverage("cider");
const snack = new Snack("ポテチ");

const vending_machine = new VendingMachine("サントリー");
vending_machine.add_cup(1);
vending_machine.deposit_coin(100);
vending_machine.deposit_coin(100);
console.log(vending_machine.press_button<Beverage>(cider));

console.log(vending_machine.press_button<Coffe>(hot_cup_coffee));
vending_machine.add_cup(1);
console.log(vending_machine.press_button<Coffe>(hot_cup_coffee));

console.log(vending_machine.press_button<Snack>(snack));
vending_machine.deposit_coin(100);
vending_machine.deposit_coin(100);
vending_machine.add_cup(1);
console.log(vending_machine.press_button<Snack>(snack));
