"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameMaster = void 0;
const createComputerPlayer_1 = require("../../utils/createComputerPlayer");
const deleteComputerPlayer_1 = require("../../utils/deleteComputerPlayer");
const card_1 = require("../card/card");
const gameAssist_1 = require("../gameAssist/gameAssist");
const handCard_1 = require("../handCard/handCard");
const dealer_1 = require("../person/dealer");
const player_1 = require("../person/player");
class GameMaster {
    constructor(totalPlayers) {
        const CardTypes = ['スペード', 'ハート', 'ダイヤ', 'クラブ'];
        const jokerNumber = 0;
        const deckOfCards = new card_1.Card(CardTypes, jokerNumber);
        this._dealer = new dealer_1.Dealer(deckOfCards, new handCard_1.HandCard());
        this._player = new player_1.Player(deckOfCards, new handCard_1.HandCard());
        this._computerPlayers = (0, createComputerPlayer_1.createComputerPlayer)(totalPlayers, deckOfCards);
        this._gameAssist = new gameAssist_1.GameAssist(this._dealer, this._player, this._computerPlayers);
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
    get gameAssist() {
        return this._gameAssist;
    }
    async gameStart() {
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
        this.gameAssist.displayWinner();
    }
    createNewComputerPlayers(currentComputerPlayers) {
        const newComputerPlayers = (0, deleteComputerPlayer_1.deleteComputerPlayer)(currentComputerPlayers);
        this.computerPlayers.length = 0;
        this.computerPlayers.push(...newComputerPlayers);
    }
}
exports.GameMaster = GameMaster;
//# sourceMappingURL=gameMaster.js.map