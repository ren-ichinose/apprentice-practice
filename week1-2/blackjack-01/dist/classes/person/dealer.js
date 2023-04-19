"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dealer = void 0;
const burst_1 = require("../../utils/burst");
const calculateCardScore_1 = require("../../utils/calculateCardScore");
const gameEnd_1 = require("../../utils/gameEnd");
const person_1 = require("./person");
class Dealer extends person_1.Person {
    constructor(card) {
        const name = 'ディーラー';
        super(name, card);
    }
    getRandomOneSilent() {
        this.drawCard();
        console.log('ディーラーの引いた2枚目のカードはわかりません。');
    }
    getRandomrepeat() {
        this.BurstCheck();
        super.getRandomrepeat();
    }
    BurstCheck() {
        const cardScore = (0, calculateCardScore_1.calculateCardScore)(this._myCards);
        const isBurstResult = (0, burst_1.isBurst)(cardScore);
        if (isBurstResult) {
            console.log('得点が21を超えました。');
            console.log('みなさんの勝ちです。');
            (0, gameEnd_1.gameEnd)();
        }
    }
    displaySecondsCard() {
        const { type, number } = this.myCards[1];
        console.log(`ディーラーの引いた2枚目のカードは${type}の${number}でした。`);
    }
}
exports.Dealer = Dealer;
//# sourceMappingURL=dealer.js.map