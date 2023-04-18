"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameAssist = void 0;
const calculateCardScore_1 = require("../../utils/calculateCardScore");
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
        const dealerCardScore = (0, calculateCardScore_1.calculateCardScore)(this._dealer.myCards);
        const playerCardScore = (0, calculateCardScore_1.calculateCardScore)(this._player.myCards);
        const computerPlayersScore = this._computerPlayers.map((computerPlayer) => {
            return (0, calculateCardScore_1.calculateCardScore)(computerPlayer.myCards);
        });
        const dealerNameScore = { name: this._dealer.name, score: dealerCardScore };
        const playerNameScore = { name: this._player.name, score: playerCardScore };
        const computerPlayersNameScore = this._computerPlayers.map((computerPlayer, index) => {
            return {
                name: computerPlayer.name,
                score: computerPlayersScore[index],
            };
        });
        const allMember = [
            dealerNameScore,
            playerNameScore,
            ...computerPlayersNameScore,
        ];
        return allMember;
    }
}
exports.GameAssist = GameAssist;
//# sourceMappingURL=gameAssist.js.map