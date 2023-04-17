"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameMaster = void 0;
const calculateCardScore_1 = require("../../utils/calculateCardScore");
const gameEnd_1 = require("../../utils/gameEnd");
const getWinnerScore_1 = require("../../utils/getWinnerScore");
const questionYesOrNo_1 = require("../../utils/questionYesOrNo");
class GameMaster {
    constructor(_dealer, _player, _computerPlayers) {
        this._dealer = _dealer;
        this._player = _player;
        this._computerPlayers = _computerPlayers;
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
    displayWinner() {
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
        console.log(`${playerNameScore.name}の得点は${playerCardScore}です。`);
        computerPlayersNameScore.forEach(({ name, score }) => {
            console.log(`${name}の得点は${score}です。`);
        });
        console.log(`${dealerNameScore.name}の得点は${dealerCardScore}です。`);
        const winnerScore = (0, getWinnerScore_1.getWinnerScore)([
            dealerCardScore,
            playerCardScore,
            ...computerPlayersScore,
        ]);
        allMember.forEach((member) => {
            member.score === winnerScore && console.log(`${member.name}の勝ちです。`);
        });
        (0, gameEnd_1.gameEnd)();
    }
    displayWinnerShingle() {
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