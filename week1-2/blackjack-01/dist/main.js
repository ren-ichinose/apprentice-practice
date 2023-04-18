"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const card_1 = require("./classes/card/card");
const gameAssist_1 = require("./classes/gameAssist/gameAssist");
const dealer_1 = require("./classes/person/dealer");
const player_1 = require("./classes/person/player");
const createComputerPlayer_1 = require("./utils/createComputerPlayer");
const deleteComputerPlayer_1 = require("./utils/deleteComputerPlayer");
const gameStart_1 = require("./utils/gameStart");
const blackJackGame = async () => {
    const totalPlayers = await (0, gameStart_1.gmaeStartAndQuetion)();
    const CardTypes = ['スペード', 'ハート', 'ダイヤ', 'クラブ'];
    const jokerNumber = 0;
    const crads = new card_1.Card(CardTypes, jokerNumber);
    const dealer = new dealer_1.Dealer(crads);
    const player = new player_1.Player(crads);
    const computerPlayers = (0, createComputerPlayer_1.createComputerPlayer)(totalPlayers, crads);
    const gameAssist = new gameAssist_1.GameAssist(dealer, player, computerPlayers);
    [player, ...computerPlayers].forEach((participant) => {
        participant.getRandomOne();
        participant.getRandomOne();
    });
    const createNewComputerPlayers = (beforComputerPlayers) => {
        const newComputerPlayers = (0, deleteComputerPlayer_1.deleteComputerPlayer)(beforComputerPlayers);
        computerPlayers.length = 0;
        computerPlayers.push(...newComputerPlayers);
    };
    createNewComputerPlayers(computerPlayers);
    dealer.getRandomOne();
    dealer.getRandomOneSilent();
    await player.isNeedGetRandomOne();
    computerPlayers.forEach((cpu) => {
        cpu.getRandomrepeat();
    });
    createNewComputerPlayers(computerPlayers);
    console.log('ディーラーのターンを開始します。');
    dealer.displaySecondsCard();
    dealer.getRandomrepeat();
    console.log('ディーラーのターンを終了します。');
    gameAssist.displayWinner();
};
blackJackGame().catch(() => {
    console.error('ゲームを終了します');
});
//# sourceMappingURL=main.js.map