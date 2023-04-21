"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const convertCard_1 = require("../../utils/convertCard");
class Person {
    constructor(_name, _deckOfCards, _handCard) {
        this._name = _name;
        this._deckOfCards = _deckOfCards;
        this._handCard = _handCard;
    }
    get name() {
        return this._name;
    }
    get deckOfCards() {
        return this._deckOfCards;
    }
    get handCards() {
        return this._handCard;
    }
    drawCard() {
        const card = this._deckOfCards.drawCardRandomOne();
        this._handCard.handCards = [...this._handCard.handCards, card];
        return card;
    }
    drawCardRandomOne() {
        const { type, number } = this.drawCard();
        console.log(`${this._name}の引いたカードは${type}の${(0, convertCard_1.convertCardNumber)(number)}です。`);
        const cardScore = this._handCard.calculateCardScore();
        this.BurstCheck(cardScore);
    }
    drawCardRandomrepeat() {
        let cardScore = this._handCard.calculateCardScore();
        while (cardScore < 17) {
            this.drawCardRandomOne();
            cardScore = this._handCard.calculateCardScore();
        }
    }
}
exports.Person = Person;
//# sourceMappingURL=person.js.map