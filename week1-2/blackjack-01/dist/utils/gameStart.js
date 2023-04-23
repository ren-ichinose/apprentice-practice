"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gmaeStartAndQuetion = void 0;
const createComputerPlayer_1 = require("./createComputerPlayer");
const gmaeStartAndQuetion = async (deckOfCards) => {
    console.log('ブラックジャックを開始します。');
    const computerPralyers = await (0, createComputerPlayer_1.createComputerPlayer)(deckOfCards);
    return computerPralyers;
};
exports.gmaeStartAndQuetion = gmaeStartAndQuetion;
//# sourceMappingURL=gameStart.js.map