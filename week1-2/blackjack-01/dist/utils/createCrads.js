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
const types = ['スペード', 'ハート', 'ダイヤ', 'クラブ'];
const jokerZero = 0;
(0, exports.createCards)(types, jokerZero);
const jokerOne = 1;
(0, exports.createCards)(types, jokerOne);
const jokerTwo = 2;
(0, exports.createCards)(types, jokerTwo);
//# sourceMappingURL=createCrads.js.map