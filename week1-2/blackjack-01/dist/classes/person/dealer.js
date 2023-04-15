"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dealer = void 0;
const person_1 = require("./person");
class Dealer extends person_1.Person {
    constructor(card) {
        const name = 'ディーラー';
        const role = 'dealer';
        super(name, role, card);
    }
    getRandomOneSilent() {
        const { type, number } = this._card.getRandomOne();
        this._myCards.push({ type, number });
        console.log('ディーラーの引いた2枚目のカードはわかりません。');
    }
    displayCards() {
        const { type, number } = this._myCards[1];
        console.log(`ディーラーの引いた2枚目のカードは${type}の${number}でした。`);
    }
}
exports.Dealer = Dealer;
//# sourceMappingURL=dealer.js.map