"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteComputerPlayer = void 0;
const burstCheck_1 = require("./burstCheck");
const deleteComputerPlayer = (computerPlayers) => {
    const newComputerPlayers = computerPlayers.filter((computerPlayer) => {
        const cardScore = computerPlayer.handCards.calculateCardScore();
        const isBurstResult = (0, burstCheck_1.isBurst)(cardScore);
        return !isBurstResult;
    });
    return newComputerPlayers;
};
exports.deleteComputerPlayer = deleteComputerPlayer;
//# sourceMappingURL=deleteComputerPlayer.js.map