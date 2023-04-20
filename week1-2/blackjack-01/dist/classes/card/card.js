"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
class Card {
    constructor(types, jokerNumber) {
        const cards = this.createCards(types, jokerNumber);
        this._currentDeckOfCards = cards;
    }
    get currentDeckOfCards() {
        return this._currentDeckOfCards;
    }
    createCards(types, jokerNumber) {
        const deckOfCardsWithoutJoker = [];
        types.forEach((type) => {
            [...Array(13)].forEach((_, i) => {
                const number = i + 1;
                deckOfCardsWithoutJoker.push({ type, number });
            });
        });
        const jokers = this.createJokers(jokerNumber);
        const deckOfCards = [...deckOfCardsWithoutJoker, ...jokers];
        return deckOfCards;
    }
    createJokers(jokerNumber) {
        const jokers = [];
        [...Array(jokerNumber)].forEach((_) => {
            jokers.push({ type: 'joker', number: 0 });
        });
        return jokers;
    }
    drawCardRandomOne() {
        const randomIndex = Math.floor(Math.random() * this._currentDeckOfCards.length);
        const drawnCard = this._currentDeckOfCards[randomIndex];
        this.deleteCards(drawnCard);
        return drawnCard;
    }
    deleteCards({ type, number }) {
        const newCurrentDeckOfCards = this.currentDeckOfCards.filter((currentCard) => {
            if (currentCard.type === type && currentCard.number === number)
                return false;
            return true;
        });
        this._currentDeckOfCards = newCurrentDeckOfCards;
    }
}
exports.Card = Card;
//# sourceMappingURL=card.js.map