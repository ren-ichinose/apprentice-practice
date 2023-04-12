"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Beverage = void 0;
const item_class_1 = require("./item_class");
class Beverage extends item_class_1.Item {
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
exports.Beverage = Beverage;
//# sourceMappingURL=beverage_class.js.map