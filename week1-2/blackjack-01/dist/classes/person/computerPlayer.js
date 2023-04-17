"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerPlayer = void 0;
const main_1 = require("../../main");
const calculateCardScore_1 = require("../../utils/calculateCardScore");
const person_1 = require("./person");
class ComputerPlayer extends person_1.Person {
    constructor(name, card) {
        const role = 'player';
        super(name, role, card);
    }
    getRandomOne() {
        const { type, number } = this._card.getRandomOne();
        this._myCards.push({ type, number });
        console.log(`${this._name}の引いたカードは${type}の${number}です。`);
        const cardScore = (0, calculateCardScore_1.calculateCardScore)(this._myCards);
        if (cardScore > 21) {
            console.log('得点が21を超えました。');
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