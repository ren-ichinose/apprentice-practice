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
    randomOne() {
        const randomIndex = Math.floor(Math.random() * 53);
        const { type, number } = this._currentCards[randomIndex];
        if (type === undefined)
            throw new Error();
        const randomCard = this.getOne(type, number);
        return randomCard;
    }
    getOne(type, number) {
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
            if (card.type !== findedCard.type)
                return true;
            if (card.number !== number)
                return true;
            return false;
        });
        this._currentCards = [...newCurrentCards];
        return findedCard;
    }
}
exports.Card = Card;
//# sourceMappingURL=card.js.map