"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertCardNumber = void 0;
const convertCardNumber = (number) => {
    if (number === 1)
        return 'A';
    if (number === 11)
        return 'J';
    if (number === 12)
        return 'Q';
    if (number === 13)
        return 'K';
    return number;
};
exports.convertCardNumber = convertCardNumber;
//# sourceMappingURL=convertCard.js.map