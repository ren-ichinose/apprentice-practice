"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameMaster = void 0;
const calculateCardScore_1 = require("../../utils/calculateCardScore");
const gameEnd_1 = require("../../utils/gameEnd");
const questionYesOrNo_1 = require("../../utils/questionYesOrNo");
class GameMaster {
    constructor(_dealer, _player) {
        this._dealer = _dealer;
        this._player = _player;
    }
    async isNeedGetRandomOne() {
        const cardScore = (0, calculateCardScore_1.calculateCardScore)(this._player.myCards);
        let isNeed = await (0, questionYesOrNo_1.questionYesOrNo)(`あなたの現在の得点は${cardScore}です。カードを引きますか？（y/n）`);
        while (isNeed) {
            this._player.getRandomOne();
            const cardScore = (0, calculateCardScore_1.calculateCardScore)(this._player.myCards);
            const questionMassage = `あなたの現在の得点は${cardScore}です。カードを引きますか？（y/n）`;
            isNeed = await (0, questionYesOrNo_1.questionYesOrNo)(questionMassage);
        }
    }
    getRandomrepeat() {
        let cardScore = (0, calculateCardScore_1.calculateCardScore)(this._dealer.myCards);
        if (cardScore > 21) {
            console.log(`${this._player.name}の勝ちです。`);
            (0, gameEnd_1.gameEnd)();
        }
        while (cardScore < 17) {
            this._dealer.getRandomOne();
            cardScore = (0, calculateCardScore_1.calculateCardScore)(this._dealer.myCards);
        }
    }
    displayWinner() {
        const dealerCardScore = (0, calculateCardScore_1.calculateCardScore)(this._dealer.myCards);
        const playerCardScore = (0, calculateCardScore_1.calculateCardScore)(this._player.myCards);
        console.log(`${this._player.name}の得点は${playerCardScore}です。`);
        console.log(`${this._dealer.name}の得点は${dealerCardScore}です。`);
        if (dealerCardScore === playerCardScore) {
            console.log(`引き分けです！`);
        }
        else if (dealerCardScore < playerCardScore) {
            console.log(`${this._player.name}の勝ちです。`);
        }
        else {
            console.log(`${this._dealer.name}の勝ちです。`);
        }
        (0, gameEnd_1.gameEnd)();
    }
}
exports.GameMaster = GameMaster;
//# sourceMappingURL=gameMaster.js.map