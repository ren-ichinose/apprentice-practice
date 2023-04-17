"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCards = void 0;
const createCards = (types, jokerNumber) => {
    const mapCards = [];
    types.forEach((type) => {
        [...Array(13)].forEach((_, i) => {
            const number = i + 1;
            mapCards.push({ type, number });
        });
    });
    const jokers = createJoker(jokerNumber);
    const resultCards = [...mapCards, ...jokers];
    return resultCards;
};
exports.createCards = createCards;
const createJoker = (jokerNumber) => {
    const eachCards = [];
    [...Array(jokerNumber)].forEach((_) => {
        eachCards.push({ type: 'joker', number: 0 });
    });
    return eachCards;
};
//# sourceMappingURL=createCards.js.map