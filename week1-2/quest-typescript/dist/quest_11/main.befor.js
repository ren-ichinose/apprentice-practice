"use strict";
// interface beverage {
//   name: string;
//   price: number;
// }
// class VendingMachine {
//   private readonly manufacturer_name: string;
//   private deposit_coins: number;
//   private beverages: beverage[];
//   private cupsStock: number;
//   constructor(manufacturer_name: string) {
//     this.manufacturer_name = manufacturer_name;
//     this.deposit_coins = 0;
//     this.beverages = [
//       { name: "cider", price: 100 },
//       { name: "cola", price: 150 },
//       { name: "hot_cup_coffee", price: 100 },
//       { name: "ice_cup_coffee", price: 100 },
//     ];
//     this.cupsStock = 0;
//   }
//   press_button(beverageName: string): void | string {
//     if (!this.cupsStock) {
//       console.log("");
//       return;
//     }
//     const beverage = this.beverages.find(
//       (beverage) => beverage.name === beverageName
//     );
//     if (!beverage) {
//       console.log("");
//       return;
//     }
//     if (this.deposit_coins < beverage.price) {
//       console.log("");
//       return;
//     }
//     this.cupsStock -= 1;
//     console.log(this.cupsStock);
//     this.deposit_coins -= beverage.price;
//     return beverage.name;
//   }
//   private press_manufacturer_name(): string {
//     return this.manufacturer_name;
//   }
//   deposit_coin(coin: number): void {
//     if (coin !== 100) {
//       console.log("");
//       return;
//     }
//     this.deposit_coins += coin;
//   }
//   add_cup(cups: number) {
//     const cups_max = 100 - this.cupsStock;
//     if (cups_max < cups) {
//       console.log(`${cups_max}以下の数字を入力してください`);
//       return;
//     }
//     this.cupsStock += cups;
//   }
// }
// const vending_machine = new VendingMachine("サントリー");
// vending_machine.deposit_coin(100);
// vending_machine.deposit_coin(100);
// console.log(vending_machine.press_button("hot_cup_coffee"));
// vending_machine.add_cup(100);
//# sourceMappingURL=main.befor.js.map