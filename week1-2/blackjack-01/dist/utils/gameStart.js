"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gmaeStartAndQuetion = void 0;
const questionYesOrNo_1 = require("./questionYesOrNo");
const gmaeStartAndQuetion = async () => {
    console.log('ブラックジャックを開始します。');
    try {
        const totalComputerPlayer = await (0, questionYesOrNo_1.questionNumber)('CPUを追加する場合は0〜3の整数を入力してください。');
        if (totalComputerPlayer > 3 || isNaN(totalComputerPlayer))
            throw new Error();
        return totalComputerPlayer;
    }
    catch (error) {
        console.log('Error:入力内容を確認してください。');
        const totalComputerPlayer = await (0, questionYesOrNo_1.questionNumber)('CPUを追加する場合は0〜3の整数を入力してください。');
        if (totalComputerPlayer > 3 || isNaN(totalComputerPlayer)) {
            console.log('Error:入力内容を確認できませんでした。');
            console.log('CPUは3人でゲームを開始します。');
            return 3;
        }
        return totalComputerPlayer;
    }
};
exports.gmaeStartAndQuetion = gmaeStartAndQuetion;
//# sourceMappingURL=gameStart.js.map