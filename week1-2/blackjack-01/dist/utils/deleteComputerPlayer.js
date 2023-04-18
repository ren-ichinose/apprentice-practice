"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteComputerPlayer = void 0;
const burst_1 = require("./burst");
const calculateCardScore_1 = require("./calculateCardScore");
const deleteComputerPlayer = (computerPlayers) => {
    const newComputerPlayers = computerPlayers.filter((computerPlayer) => {
        const cardScore = (0, calculateCardScore_1.calculateCardScore)(computerPlayer.myCards);
        const isBurstResult = (0, burst_1.isBurst)(cardScore);
        return !isBurstResult;
    });
    return newComputerPlayers;
};
exports.deleteComputerPlayer = deleteComputerPlayer;
//# sourceMappingURL=deleteComputerPlayer.js.map