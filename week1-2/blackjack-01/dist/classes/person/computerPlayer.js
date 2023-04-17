"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerPlayer = void 0;
const main_1 = require("../../main");
const burst_1 = require("../../utils/burst");
const calculateCardScore_1 = require("../../utils/calculateCardScore");
const person_1 = require("./person");
class ComputerPlayer extends person_1.Person {
    BurstCheck() {
        const cardScore = (0, calculateCardScore_1.calculateCardScore)(this._myCards);
        const isBurstResult = (0, burst_1.isBurst)(cardScore);
        if (isBurstResult) {
            console.log(`${this._name}は負けです。`);
            (0, main_1.addDeleteComputerPlayers)(this._name);
        }
    }
    getRandomrepeat() {
        let cardScore = (0, calculateCardScore_1.calculateCardScore)(this._myCards);
        while (cardScore < 17) {
            this.getRandomOne();
            cardScore = (0, calculateCardScore_1.calculateCardScore)(this._myCards);
        }
    }
}
exports.ComputerPlayer = ComputerPlayer;
//# sourceMappingURL=computerPlayer.js.map