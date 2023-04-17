"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const cardsHandler_1 = require("../../utils/cardsHandler");
const createCards_1 = require("../../utils/createCards");
class Card {
    constructor(types, jokerNumber) {
        const cards = (0, createCards_1.createCards)(types, jokerNumber);
        this._currentCards = cards;
    }
    get currentCards() {
        return this._currentCards;
    }
    getRandomOne() {
        const randomIndex = Math.floor(Math.random() * this._currentCards.length);
        const { type, number } = this._currentCards[randomIndex];
        const randomCard = this.getSelectOne(type, number);
        return randomCard;
    }
    getSelectOne(type, number) {
        const findedCard = (0, cardsHandler_1.findCrad)(type, number, this._currentCards);
        const newCurrentCards = (0, cardsHandler_1.deleteCard)(findedCard.type, findedCard.number, this._currentCards);
        this._currentCards = newCurrentCards;
        return findedCard;
    }
}
exports.Card = Card;
//# sourceMappingURL=card.js.map