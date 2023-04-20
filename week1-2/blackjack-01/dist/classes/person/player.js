"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const burstCheck_1 = require("../../utils/burstCheck");
const questionYesOrNo_1 = require("../../utils/questionYesOrNo");
const person_1 = require("./person");
class Player extends person_1.Person {
    constructor(card, handCard) {
        const name = 'あなた';
        super(name, card, handCard);
    }
    async isNeedDrowCardRandomOne() {
        const cardScore = this._handCard.calculateCardScore();
        let isNeed = await (0, questionYesOrNo_1.questionYesOrNo)(`あなたの現在の得点は${cardScore}です。カードを引きますか？（y/n）`);
        while (isNeed) {
            this.drawCardRandomOne();
            const cardScore = this._handCard.calculateCardScore();
            const questionMassage = `あなたの現在の得点は${cardScore}です。カードを引きますか？（y/n）`;
            isNeed = await (0, questionYesOrNo_1.questionYesOrNo)(questionMassage);
        }
    }
    BurstCheck(cardScore) {
        (0, burstCheck_1.BurstCheckEnd)(this.name, cardScore);
    }
}
exports.Player = Player;
//# sourceMappingURL=player.js.map