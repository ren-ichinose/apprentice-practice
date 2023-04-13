import { Item } from "./item_class";

export class Beverage extends Item {
  constructor(BeverageName: string) {
    const ciderPrice = 100
    const colaPrice = 150
    
    if (BeverageName === "cider") {
      super(BeverageName, ciderPrice);
    } else if (BeverageName === "cola") {
      super(BeverageName, colaPrice);
    } else {
      throw new Error("cider or cola");
    } 
  }
}
