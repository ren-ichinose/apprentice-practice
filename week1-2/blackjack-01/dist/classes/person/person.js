"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const calculateCardScore_1 = require("../../utils/calculateCardScore");
const gameEnd_1 = require("../../utils/gameEnd");
class Person {
    constructor(_name, _role, _card) {
        this._name = _name;
        this._role = _role;
        this._card = _card;
        this._myCards = [];
    }
    get name() {
        return this._name;
    }
    get role() {
        return this._role;
    }
    get myCards() {
        return this._myCards;
    }
    getRandomOne() {
        const { type, number } = this._card.getRandomOne();
        this._myCards.push({ type, number });
        console.log(`${this._name}の引いたカードは${type}の${number}です。`);
        const cardScore = (0, calculateCardScore_1.calculateCardScore)(this._myCards);
        if (cardScore > 21) {
            console.log('得点が21を超えました。');
            console.log(`${this._name}の負けです。`);
            (0, gameEnd_1.gameEnd)();
        }
    }
}
exports.Person = Person;
//# sourceMappingURL=person.js.map