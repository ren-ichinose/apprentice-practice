"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BurstCheckEnd = exports.isBurst = void 0;
const gameEnd_1 = require("./gameEnd");
const isBurst = (cardScore) => {
    if (cardScore > 21) {
        return true;
    }
    return false;
};
exports.isBurst = isBurst;
const BurstCheckEnd = (name, cardScore) => {
    if (cardScore > 21) {
        console.log('得点が21を超えました。');
        console.log(`${name}は負けです。`);
        (0, gameEnd_1.gameEnd)();
    }
};
exports.BurstCheckEnd = BurstCheckEnd;
//# sourceMappingURL=burst.js.map