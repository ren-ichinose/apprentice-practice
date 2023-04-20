"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandCard = void 0;
class HandCard {
    constructor(_handCards = []) {
        this._handCards = _handCards;
        this._handCards = _handCards;
    }
    get handCards() {
        return this._handCards;
    }
    set handCards(newhandCards) {
        this._handCards = newhandCards;
    }
    calculateCardScore() {
        const aceCards = [];
        const cardScoreWithoutAce = this.handCards.reduce((sum, handCard) => {
            if (handCard.number !== 1)
                return sum + handCard.number;
            aceCards.push(handCard);
            return sum;
        }, 0);
        if (aceCards.length === 0)
            return cardScoreWithoutAce;
        if (cardScoreWithoutAce < (12 - aceCards.length)) {
            const CardScore = cardScoreWithoutAce + 11 + (aceCards.length - 1);
            return CardScore;
        }
        const CardScore = cardScoreWithoutAce + aceCards.length;
        return CardScore;
    }
}
exports.HandCard = HandCard;
//# sourceMappingURL=handCard.js.map