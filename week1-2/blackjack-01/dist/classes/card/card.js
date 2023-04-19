"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const cardsHandler_1 = require("../../utils/cardsHandler");
class Card {
    constructor(types, jokerNumber) {
        const cards = this.createCards(types, jokerNumber);
        this._currentCards = cards;
    }
    get currentCards() {
        return this._currentCards;
    }
    createCards(types, jokerNumber) {
        const mapCards = [];
        types.forEach((type) => {
            [...Array(13)].forEach((_, i) => {
                const number = i + 1;
                mapCards.push({ type, number });
            });
        });
        const jokers = this.createJoker(jokerNumber);
        const resultCards = [...mapCards, ...jokers];
        return resultCards;
    }
    createJoker(jokerNumber) {
        const jokers = [];
        [...Array(jokerNumber)].forEach((_) => {
            jokers.push({ type: 'joker', number: 0 });
        });
        return jokers;
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