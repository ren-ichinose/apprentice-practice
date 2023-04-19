"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerPlayer = void 0;
const burst_1 = require("../../utils/burst");
const person_1 = require("./person");
class ComputerPlayer extends person_1.Person {
    BurstCheck(cardScore) {
        const isBurstResult = (0, burst_1.isBurst)(cardScore);
        if (isBurstResult) {
            console.log('得点が21を超えました。');
            console.log(`${this._name}は負けです。`);
        }
    }
}
exports.ComputerPlayer = ComputerPlayer;
//# sourceMappingURL=computerPlayer.js.map