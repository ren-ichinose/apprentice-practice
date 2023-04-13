"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Beverage = void 0;
const item_class_1 = require("./item_class");
class Beverage extends item_class_1.Item {
    constructor(BeverageName) {
        const ciderPrice = 100;
        const colaPrice = 150;
        if (BeverageName === "cider") {
            super(BeverageName, ciderPrice);
        }
        else if (BeverageName === "cola") {
            super(BeverageName, colaPrice);
        }
        else {
            throw new Error("cider or cola");
        }
    }
}
exports.Beverage = Beverage;
//# sourceMappingURL=beverage_class.js.map