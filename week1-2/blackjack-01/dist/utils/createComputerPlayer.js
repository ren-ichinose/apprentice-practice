"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComputerPlayer = void 0;
const handCard_1 = require("../classes/handCard/handCard");
const computerPlayer_1 = require("../classes/person/computerPlayer");
const questionYesOrNo_1 = require("./questionYesOrNo");
const createComputerPlayer = async (card) => {
    const totalPlayers = await questionNumberTotalPlayers();
    let count = 0;
    const computerPlayers = [];
    while (count < totalPlayers) {
        const handCard = new handCard_1.HandCard();
        const computerPlayer = new computerPlayer_1.ComputerPlayer(`CPU${count + 1}`, card, handCard);
        computerPlayers.push(computerPlayer);
        count++;
    }
    return computerPlayers;
};
exports.createComputerPlayer = createComputerPlayer;
const questionNumberTotalPlayers = async () => {
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
//# sourceMappingURL=createComputerPlayer.js.map