"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const calculateCardScore_1 = require("../../utils/calculateCardScore");
class Person {
    constructor(_name, _card, _myCards = []) {
        this._name = _name;
        this._card = _card;
        this._myCards = _myCards;
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
    drawCard() {
        const card = this._card.getRandomOne();
        this._myCards.push(card);
        return card;
    }
    getRandomOne() {
        const { type, number } = this.drawCard();
        console.log(`${this._name}の引いたカードは${type}の${number}です。`);
        const cardScore = (0, calculateCardScore_1.calculateCardScore)(this._myCards);
        this.BurstCheck(cardScore);
    }
    getRandomrepeat() {
        let cardScore = (0, calculateCardScore_1.calculateCardScore)(this._myCards);
        while (cardScore < 17) {
            this.getRandomOne();
            cardScore = (0, calculateCardScore_1.calculateCardScore)(this._myCards);
        }
    }
}
exports.Person = Person;
//# sourceMappingURL=person.js.map