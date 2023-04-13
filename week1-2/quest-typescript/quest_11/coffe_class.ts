import { Item } from "./item_class";

export class Coffe extends Item {
  constructor(coffeName: string) {
    const coffePrice = 100;
    
    if (coffeName === "hot") {
      super("hot", coffePrice);
    } else if (coffeName === "ice") {
      super("ice", coffePrice);
    } else {
      throw new Error("hot or ice");
    }
  }
}
