"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Participant = void 0;
class Participant {
    constructor(_name, _role, _cards = []) {
        this._name = _name;
        this._role = _role;
        this._cards = _cards;
    }
    get name() {
        return this._name;
    }
    get role() {
        return this._role;
    }
    get cards() {
        return this._cards;
    }
    set cards(cards) {
        this._cards = cards;
    }
}
exports.Participant = Participant;
//# sourceMappingURL=participant.js.map