import { Item } from "./item_class";

export class Snack extends Item {
  constructor(snackName: string) {
    super(snackName, 150);
  }
}
