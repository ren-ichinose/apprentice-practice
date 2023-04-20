"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateCardScore = void 0;
const calculateCardScore = (handCards) => {
    const aceCards = [];
    const nonAceCardScore = handCards.reduce((sum, handCard) => {
        if (handCard.number !== 1)
            return sum + handCard.number;
        aceCards.push(handCards);
        return sum;
    }, 0);
    if (aceCards.length === 0)
        return nonAceCardScore;
    if (nonAceCardScore < (12 - aceCards.length)) {
        const CardScore = nonAceCardScore + 11 + (aceCards.length - 1);
        return CardScore;
    }
    const CardScore = nonAceCardScore + aceCards.length;
    return CardScore;
};
exports.calculateCardScore = calculateCardScore;
//# sourceMappingURL=calculateCardScore.js.map