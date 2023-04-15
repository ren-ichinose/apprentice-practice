"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateCardScore = void 0;
const calculateCardScore = (cards) => {
    const result = cards.reduce((sum, crad) => {
        return sum + crad.number;
    }, 0);
    return result;
};
exports.calculateCardScore = calculateCardScore;
//# sourceMappingURL=calculateCardScore.js.map