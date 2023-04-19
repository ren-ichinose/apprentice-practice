"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gmaeStartAndQuetion = void 0;
const questionYesOrNo_1 = require("./questionYesOrNo");
const gmaeStartAndQuetion = async () => {
    try {
        console.log('ブラックジャックを開始します。');
        const totalComputerPlayer = await (0, questionYesOrNo_1.questionNumber)('CPUを追加する場合は0〜3の整数を入力してください。');
        if (totalComputerPlayer > 3)
            throw new Error();
        if (isNaN(totalComputerPlayer))
            throw new Error();
        return totalComputerPlayer;
    }
    catch (error) {
        console.log('入力内容に誤りがあります');
        console.log('CPUは3人でゲームを開始します');
        return 3;
    }
};
exports.gmaeStartAndQuetion = gmaeStartAndQuetion;
//# sourceMappingURL=gameStart.js.map