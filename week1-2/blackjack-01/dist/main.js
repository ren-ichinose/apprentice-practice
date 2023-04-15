"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const card_1 = require("./classes/card/card");
const gameMaster_1 = require("./classes/gameMaster/gameMaster");
const dealer_1 = require("./classes/person/dealer");
const player_1 = require("./classes/person/player");
console.log('ブラックジャックを開始します。');
const crads = new card_1.Card();
const dealer = new dealer_1.Dealer(crads);
const player = new player_1.Player(crads);
const gameMaster = new gameMaster_1.GameMaster(dealer, player);
player.getRandomOne();
player.getRandomOne();
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