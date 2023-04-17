"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDeleteComputerPlayers = void 0;
const card_1 = require("./classes/card/card");
const gameMaster_1 = require("./classes/gameMaster/gameMaster");
const dealer_1 = require("./classes/person/dealer");
const player_1 = require("./classes/person/player");
const createComputerPlayer_1 = require("./utils/createComputerPlayer");
const gameStart_1 = require("./utils/gameStart");
const totalPlayers = 3;
const CardTypes = ['スペード', 'ハート', 'ダイヤ', 'クラブ'];
const jokerNumber = 0;
const crads = new card_1.Card(CardTypes, jokerNumber);
const computerPlayers = (0, createComputerPlayer_1.createComputerPlayer)(totalPlayers, crads);
const dealer = new dealer_1.Dealer(crads);
const player = new player_1.Player(crads);
const gameMaster = new gameMaster_1.GameMaster(dealer, player, computerPlayers);
const deleteComputerPlayers = [];
const addDeleteComputerPlayers = (name) => {
    deleteComputerPlayers.push(name);
};
exports.addDeleteComputerPlayers = addDeleteComputerPlayers;
const gameEndComputerPlayer = () => {
    const deleteComputerPlayerIndex = [];
    deleteComputerPlayers.forEach((name) => {
        computerPlayers.forEach((computerPlayer, index) => {
            name === computerPlayer.name && deleteComputerPlayerIndex.push(index);
        });
    });
    const newComputerPlayers = computerPlayers.filter((_, index) => !deleteComputerPlayerIndex.includes(index));
    computerPlayers.splice(0);
    computerPlayers.push(...newComputerPlayers);
    deleteComputerPlayers.splice(0);
};
(0, gameStart_1.gameStart)();
player.getRandomOne();
player.getRandomOne();
computerPlayers.forEach((cpu) => {
    cpu.getRandomOne();
    cpu.getRandomOne();
});
deleteComputerPlayers.length !== 0 && gameEndComputerPlayer();
dealer.getRandomOne();
dealer.getRandomOneSilent();
gameMaster
    .isNeedGetRandomOne()
    .then(() => {
    computerPlayers.forEach((cpu) => {
        cpu.getRandomrepeat();
    });
    deleteComputerPlayers.length !== 0 && gameEndComputerPlayer();
    console.log('ディーラーのターンを開始します。');
    dealer.displaySecondsCard();
    dealer.getRandomrepeat();
    console.log('ディーラーのターンを終了します。');
    gameMaster.displayWinner();
})
    .catch((error) => {
    console.log(error.message);
});
//# sourceMappingURL=main.js.map