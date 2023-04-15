"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const person_1 = require("./person");
class Player extends person_1.Person {
    constructor() {
        const name = 'あなた';
        const role = 'player';
        super(name, role);
        this._cards = [];
    }
    get cards() {
        return this._cards;
    }
    set cards(cards) {
        this._cards = [...this._cards, ...cards];
    }
}
exports.Player = Player;
//# sourceMappingURL=player.js.map