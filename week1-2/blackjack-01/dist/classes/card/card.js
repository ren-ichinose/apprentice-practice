"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
class Card {
    constructor() {
        const mapCards = [];
        const types = ['スペード', 'ハート', 'ダイヤ', 'クラブ'];
        types.forEach((type) => {
            [...Array(13)].forEach((_, i) => {
                const number = i + 1;
                mapCards.push({ type, number });
            });
        });
        this._currentCards = mapCards;
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
        const findedCard = this._currentCards.find((card) => {
            if (card.type !== type)
                return false;
            if (card.number !== number)
                return false;
            return card;
        });
        if (findedCard === undefined)
            throw new Error();
        const newCurrentCards = this._currentCards.filter((card) => {
            if (card.type === findedCard.type && card.number === findedCard.number)
                return false;
            return true;
        });
        this._currentCards = newCurrentCards;
        return findedCard;
    }
}
exports.Card = Card;
//# sourceMappingURL=card.js.map