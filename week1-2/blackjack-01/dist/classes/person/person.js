"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const burst_1 = require("../../utils/burst");
const calculateCardScore_1 = require("../../utils/calculateCardScore");
class Person {
    constructor(_name, _card) {
        this._name = _name;
        this._card = _card;
        this._myCards = [];
    }
    get name() {
        return this._name;
    }
    get Cards() {
        return this._card;
    }
    get myCards() {
        return this._myCards;
    }
    getRandomOne() {
        const { type, number } = this._card.getRandomOne();
        this._myCards.push({ type, number });
        console.log(`${this._name}の引いたカードは${type}の${number}です。`);
        this.BurstCheck();
    }
    BurstCheck() {
        const cardScore = (0, calculateCardScore_1.calculateCardScore)(this._myCards);
        (0, burst_1.BurstCheckEnd)(this.name, cardScore);
    }
}
exports.Person = Person;
//# sourceMappingURL=person.js.map