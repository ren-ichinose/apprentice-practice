"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameEndComputerPlayer = void 0;
const card_1 = require("./classes/card/card");
const gameMaster_1 = require("./classes/gameMaster/gameMaster");
const dealer_1 = require("./classes/person/dealer");
const player_1 = require("./classes/person/player");
const createComputerPlayer_1 = require("./utils/createComputerPlayer");
const gameStart_1 = require("./utils/gameStart");
const crads = new card_1.Card();
const computerPlayers = (0, createComputerPlayer_1.createComputerPlayer)(3, crads);
const dealer = new dealer_1.Dealer(crads);
const player = new player_1.Player(crads);
const gameMaster = new gameMaster_1.GameMaster(dealer, player, computerPlayers);
const gameEndComputerPlayer = (name) => {
    computerPlayers.forEach((computerPlayer, index) => {
        computerPlayer.name === name && computerPlayers.splice(index, 1);
    });
};
exports.gameEndComputerPlayer = gameEndComputerPlayer;
(0, gameStart_1.gameStart)();
player.getRandomOne();
player.getRandomOne();
computerPlayers.forEach((cpu) => {
    cpu.getRandomOne();
    cpu.getRandomOne();
});
dealer.getRandomOne();
dealer.getRandomOneSilent();
gameMaster
    .isNeedGetRandomOne()
    .then(() => {
    console.log('ディーラーのターンを開始します。');
    dealer.displayCards();
    gameMaster.getRandomrepeat();
    console.log('ディーラーのターンを終了します。');
    gameMaster.displayWinner();
})
    .catch((error) => {
    console.log(error.message);
});
//# sourceMappingURL=main.js.map