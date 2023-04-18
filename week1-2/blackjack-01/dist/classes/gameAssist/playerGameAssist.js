"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerGameAssist = void 0;
const calculateCardScore_1 = require("../../utils/calculateCardScore");
const questionYesOrNo_1 = require("../../utils/questionYesOrNo");
const gameAssist_1 = require("./gameAssist");
class PlayerGameAssist extends gameAssist_1.GameAssist {
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
}
exports.PlayerGameAssist = PlayerGameAssist;
//# sourceMappingURL=playerGameAssist.js.map