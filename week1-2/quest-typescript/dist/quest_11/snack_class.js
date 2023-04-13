"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snack = void 0;
const item_class_1 = require("./item_class");
class Snack extends item_class_1.Item {
    constructor(snackName) {
        const snackPrice = 150;
        super(snackName, snackPrice);
    }
}
exports.Snack = Snack;
//# sourceMappingURL=snack_class.js.map