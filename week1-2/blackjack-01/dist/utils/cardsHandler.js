"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCard = exports.findCrad = void 0;
const findCrad = (type, number, currentCards) => {
    const findedCard = currentCards.find((card) => {
        if (card.type !== type)
            return false;
        if (card.number !== number)
            return false;
        return card;
    });
    if (findedCard === undefined)
        throw new Error('カードを取得できませんでした。');
    return findedCard;
};
exports.findCrad = findCrad;
const deleteCard = (type, number, currentCards) => {
    const newCurrentCards = currentCards.filter((currentCard) => {
        if (currentCard.type === type && currentCard.number === number)
            return false;
        return true;
    });
    return newCurrentCards;
};
exports.deleteCard = deleteCard;
//# sourceMappingURL=cardsHandler.js.map