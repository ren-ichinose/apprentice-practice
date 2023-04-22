"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gameMaster_1 = require("./classes/gameMaster/gameMaster");
const gameStart_1 = require("./utils/gameStart");
const blackJackGame = async () => {
    const totalPlayers = await (0, gameStart_1.gmaeStartAndQuetion)();
    const gameMaster = new gameMaster_1.GameMaster(totalPlayers);
    await gameMaster.gameStart();
};
blackJackGame().catch(() => {
    console.error('ゲームを終了します');
});
//# sourceMappingURL=main.js.map