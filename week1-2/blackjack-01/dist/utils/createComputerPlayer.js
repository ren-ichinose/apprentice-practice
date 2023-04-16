"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComputerPlayer = void 0;
const computerPlayer_1 = require("../classes/person/computerPlayer");
const createComputerPlayer = (number, card) => {
    let count = 0;
    const computerPlayers = [];
    while (count < number) {
        const computerPlayer = new computerPlayer_1.ComputerPlayer(`CPU${count + 1}`, card);
        computerPlayers.push(computerPlayer);
        count++;
    }
    return computerPlayers;
};
exports.createComputerPlayer = createComputerPlayer;
//# sourceMappingURL=createComputerPlayer.js.map