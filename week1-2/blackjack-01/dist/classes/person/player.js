"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const person_1 = require("./person");
class Player extends person_1.Person {
    constructor(card) {
        const name = 'あなた';
        super(name, card);
    }
}
exports.Player = Player;
//# sourceMappingURL=player.js.map