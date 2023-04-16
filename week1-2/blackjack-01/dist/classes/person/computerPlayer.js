"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerPlayer = void 0;
const person_1 = require("./person");
class ComputerPlayer extends person_1.Person {
    constructor(name, card) {
        const role = 'player';
        super(name, role, card);
    }
}
exports.ComputerPlayer = ComputerPlayer;
//# sourceMappingURL=computerPlayer.js.map