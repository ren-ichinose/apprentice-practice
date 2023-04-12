"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coffe = void 0;
const item_class_1 = require("./item_class");
class Coffe extends item_class_1.Item {
    constructor(coffeName) {
        const coffePrice = 100;
        if (coffeName === "hot") {
            super("hot", coffePrice);
        }
        else if (coffeName === "ice") {
            super("ice", coffePrice);
        }
        else {
            throw new Error("hot or ice");
        }
    }
}
exports.Coffe = Coffe;
//# sourceMappingURL=coffe_class.js.map