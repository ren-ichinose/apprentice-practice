"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameMaster = void 0;
const createComputerPlayer_1 = require("../../utils/createComputerPlayer");
const deleteComputerPlayer_1 = require("../../utils/deleteComputerPlayer");
const gameEnd_1 = require("../../utils/gameEnd");
const gameStart_1 = require("../../utils/gameStart");
const getWinnerScore_1 = require("../../utils/getWinnerScore");
const card_1 = require("../card/card");
const handCard_1 = require("../handCard/handCard");
const dealer_1 = require("../person/dealer");
const player_1 = require("../person/player");
class GameMaster {
    constructor() {
        const CardTypes = ['スペード', 'ハート', 'ダイヤ', 'クラブ'];
        const jokerNumber = 0;
        const deckOfCards = new card_1.Card(CardTypes, jokerNumber);
        this._dealer = new dealer_1.Dealer(deckOfCards, new handCard_1.HandCard());
        this._player = new player_1.Player(deckOfCards, new handCard_1.HandCard());
    }
    get dealer() {
        return this._dealer;
    }
    get player() {
        return this._player;
    }
    get computerPlayers() {
        return this._computerPlayers;
    }
    async gameStart() {
        await this.initializeComputerPlayer(this.player.deckOfCards).catch(() => { });
        [this.player, ...this.computerPlayers].forEach((participant) => {
            participant.drawCardRandomOne();
            participant.drawCardRandomOne();
        });
        this.createNewComputerPlayers(this.computerPlayers);
        this.dealer.drawCardRandomOne();
        this.dealer.drawCardRandomOneSilent();
        await this.player.isNeedDrowCardRandomOne();
        this.computerPlayers.forEach((cpu) => {
            cpu.drawCardRandomrepeat();
        });
        this.createNewComputerPlayers(this.computerPlayers);
        this.dealer.secondTurn();
        this.displayWinner();
    }
    createNewComputerPlayers(currentComputerPlayers) {
        const newComputerPlayers = (0, deleteComputerPlayer_1.deleteComputerPlayer)(currentComputerPlayers);
        this.computerPlayers.length = 0;
        this.computerPlayers.push(...newComputerPlayers);
    }
    async initializeComputerPlayer(deckOfCards) {
        const totalPlayers = await (0, gameStart_1.gmaeStartAndQuetion)();
        this._computerPlayers = (0, createComputerPlayer_1.createComputerPlayer)(totalPlayers, deckOfCards);
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
        const participants = [this._dealer, this._player, ...this.computerPlayers];
        const computerPlayersScore = participants.map(({ name, handCards }) => {
            const score = handCards.calculateCardScore();
            return { name, score };
        });
        return computerPlayersScore;
    }
}
exports.GameMaster = GameMaster;
//# sourceMappingURL=gameMaster.js.map