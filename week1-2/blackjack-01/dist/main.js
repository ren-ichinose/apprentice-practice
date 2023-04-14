"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const participant_1 = require("./classes/participant/participant");
console.log('ブラックジャックを開始します。');
const player = new participant_1.Participant('あなた', 'プレイヤー');
const dealer = new participant_1.Participant('ディーラー', 'ディーラー');
console.log(player.name);
console.log(dealer.name);
//# sourceMappingURL=main.js.map