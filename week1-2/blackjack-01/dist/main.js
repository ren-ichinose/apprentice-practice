"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gameMaster_1 = require("./classes/gameMaster/gameMaster");
const questionYesOrNo_1 = require("./utils/questionYesOrNo");
const blackJackGame = async () => {
    const isStart = await (0, questionYesOrNo_1.questionYesOrNo)('ブラックジャックをはじめますか？（y/n）');
    if (isStart) {
        const gameMaster = new gameMaster_1.GameMaster();
        await gameMaster.gameStart();
    }
};
blackJackGame().catch(() => {
    console.error('ゲームを終了します');
});
//# sourceMappingURL=main.js.map