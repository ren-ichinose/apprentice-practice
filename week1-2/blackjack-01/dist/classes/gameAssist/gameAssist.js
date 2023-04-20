"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameAssist = void 0;
const gameEnd_1 = require("../../utils/gameEnd");
const getWinnerScore_1 = require("../../utils/getWinnerScore");
class GameAssist {
    constructor(_dealer, _player, _computerPlayers) {
        this._dealer = _dealer;
        this._player = _player;
        this._computerPlayers = _computerPlayers;
    }
    displayWinner() {
        const allNameAndScore = this.createAllNameAndScore();
        allNameAndScore.forEach(({ name, score }) => {
            console.log(`${name}の得点は${score}です。`);
        });
        const allScore = allNameAndScore.map(({ score }) => score);
        const winnerScore = (0, getWinnerScore_1.getWinnerScore)(allScore);
        allNameAndScore.forEach((NameAndScore) => {
            NameAndScore.score === winnerScore &&
                console.log(`${NameAndScore.name}の勝ちです。`);
        });
        (0, gameEnd_1.gameEnd)();
    }
    createAllNameAndScore() {
        const participants = [this._dealer, this._player, ...this._computerPlayers];
        const computerPlayersScore = participants.map(({ name, handCards }) => {
            const score = handCards.calculateCardScore();
            return { name, score };
        });
        return computerPlayersScore;
    }
}
exports.GameAssist = GameAssist;
//# sourceMappingURL=gameAssist.js.map