"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const burst_1 = require("../../utils/burst");
const calculateCardScore_1 = require("../../utils/calculateCardScore");
const questionYesOrNo_1 = require("../../utils/questionYesOrNo");
const person_1 = require("./person");
class Player extends person_1.Person {
    constructor(card) {
        const name = 'あなた';
        super(name, card);
    }
    async isNeedGetRandomOne() {
        const cardScore = (0, calculateCardScore_1.calculateCardScore)(this.myCards);
        let isNeed = await (0, questionYesOrNo_1.questionYesOrNo)(`あなたの現在の得点は${cardScore}です。カードを引きますか？（y/n）`);
        while (isNeed) {
            this.getRandomOne();
            const cardScore = (0, calculateCardScore_1.calculateCardScore)(this.myCards);
            const questionMassage = `あなたの現在の得点は${cardScore}です。カードを引きますか？（y/n）`;
            isNeed = await (0, questionYesOrNo_1.questionYesOrNo)(questionMassage);
        }
    }
    BurstCheck(cardScore) {
        (0, burst_1.BurstCheckEnd)(this.name, cardScore);
    }
}
exports.Player = Player;
//# sourceMappingURL=player.js.map