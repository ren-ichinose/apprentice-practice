"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dealer = void 0;
const burstCheck_1 = require("../../utils/burstCheck");
const gameEnd_1 = require("../../utils/gameEnd");
const person_1 = require("./person");
class Dealer extends person_1.Person {
    constructor(card, handCard) {
        const name = 'ディーラー';
        super(name, card, handCard);
    }
    secondTurn() {
        console.log('ディーラーのターンを開始します。');
        this.displaySecondsCard();
        this.drawCardRandomrepeat();
        console.log('ディーラーのターンを終了します。');
    }
    drawCardRandomOneSilent() {
        super.drawCard();
        console.log('ディーラーの引いた2枚目のカードはわかりません。');
    }
    drawCardRandomrepeat() {
        this.BurstCheck();
        super.drawCardRandomrepeat();
    }
    BurstCheck() {
        const cardScore = this._handCard.calculateCardScore();
        const isBurstResult = (0, burstCheck_1.isBurst)(cardScore);
        if (isBurstResult) {
            console.log('得点が21を超えました。');
            console.log('みなさんの勝ちです。');
            (0, gameEnd_1.gameEnd)();
        }
    }
    displaySecondsCard() {
        const { type, number } = this._handCard.handCards[1];
        console.log(`ディーラーの引いた2枚目のカードは${type}の${number}でした。`);
    }
}
exports.Dealer = Dealer;
//# sourceMappingURL=dealer.js.map