"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateCardScore = void 0;
const calculateCardScore = (cards) => {
    const aceCards = [];
    const nonAceCardScore = cards.reduce((sum, card) => {
        if (card.number !== 1)
            return sum + card.number;
        aceCards.push(card);
        return sum;
    }, 0);
    if (aceCards.length === 0)
        return nonAceCardScore;
    let CardScore = 0;
    if (nonAceCardScore < (12 - aceCards.length)) {
        CardScore = nonAceCardScore + 11 + (aceCards.length - 1);
    }
    CardScore = nonAceCardScore + aceCards.length;
    return CardScore;
};
exports.calculateCardScore = calculateCardScore;
//# sourceMappingURL=calculateCardScore.js.map