import { Item } from "./item_class";

export class Snack extends Item {
  constructor(snackName: string) {
    const snackPrice = 150;
    super(snackName, snackPrice);
  }
}
