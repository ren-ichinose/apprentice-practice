"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const card_1 = require("./classes/card/card");
const gameAssist_1 = require("./classes/gameAssist/gameAssist");
const handCard_1 = require("./classes/handCard/handCard");
const dealer_1 = require("./classes/person/dealer");
const player_1 = require("./classes/person/player");
const createComputerPlayer_1 = require("./utils/createComputerPlayer");
const deleteComputerPlayer_1 = require("./utils/deleteComputerPlayer");
const gameStart_1 = require("./utils/gameStart");
const blackJackGame = async () => {
    const totalPlayers = await (0, gameStart_1.gmaeStartAndQuetion)();
    const CardTypes = ['スペード', 'ハート', 'ダイヤ', 'クラブ'];
    const jokerNumber = 0;
    const deckOfCards = new card_1.Card(CardTypes, jokerNumber);
    const dealersHandCard = new handCard_1.HandCard();
    const playersHandCard = new handCard_1.HandCard();
    const dealer = new dealer_1.Dealer(deckOfCards, dealersHandCard);
    const player = new player_1.Player(deckOfCards, playersHandCard);
    const computerPlayers = (0, createComputerPlayer_1.createComputerPlayer)(totalPlayers, deckOfCards);
    const gameAssist = new gameAssist_1.GameAssist(dealer, player, computerPlayers);
    [player, ...computerPlayers].forEach((participant) => {
        participant.drawCardRandomOne();
        participant.drawCardRandomOne();
    });
    const createNewComputerPlayers = (currentComputerPlayers) => {
        const newComputerPlayers = (0, deleteComputerPlayer_1.deleteComputerPlayer)(currentComputerPlayers);
        computerPlayers.length = 0;
        computerPlayers.push(...newComputerPlayers);
    };
    createNewComputerPlayers(computerPlayers);
    dealer.drawCardRandomOne();
    dealer.drawCardRandomOneSilent();
    await player.isNeedDrowCardRandomOne();
    computerPlayers.forEach((cpu) => {
        cpu.drawCardRandomrepeat();
    });
    createNewComputerPlayers(computerPlayers);
    dealer.secondTurn();
    gameAssist.displayWinner();
};
blackJackGame().catch(() => {
    console.error('ゲームを終了します');
});
//# sourceMappingURL=main.js.map