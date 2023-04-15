"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dealer = void 0;
const person_1 = require("./person");
class Dealer extends person_1.Person {
    constructor() {
        const name = 'ディーラー';
        const role = 'dealer';
        super(name, role);
        this._cards = [];
    }
    get cards() {
        return this._cards;
    }
    set cards(cards) {
        this._cards = [...this._cards, ...cards];
    }
}
exports.Dealer = Dealer;
//# sourceMappingURL=dealer.js.map