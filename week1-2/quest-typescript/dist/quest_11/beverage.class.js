import { Item } from "./item.class";
export class Beverage extends Item {
    constructor(BeverageName) {
        let BeveragPrice = 0;
        if (BeverageName === "cider") {
            BeveragPrice = 100;
        }
        else if (BeverageName === "cola") {
            BeveragPrice = 150;
        }
        else {
            throw new Error("cider or cola");
        }
        super(BeverageName, BeveragPrice);
    }
}
//# sourceMappingURL=beverage.class.js.map