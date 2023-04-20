import type { CardTypes } from '../interfaces/interfaces';


export class HandCard {
  constructor(protected _handCards: CardTypes[] = []) {
    this._handCards = _handCards;
  }

  get handCards(): CardTypes[] {
    return this._handCards;
  }

  set handCards(newhandCards) {
    this._handCards = newhandCards;
  }

  // カードの得点を計算する関数(トランプの数字がAの場合、1もしくは11として計算する。)
  calculateCardScore(): number {
    // トランプのAの配列を格納する変数
    const aceCards: CardTypes[] = [];

    /*
    Aを除いた数字のスコアを計算
    AはaceCardsに格納する。
  */
    const cardScoreWithoutAce = this.handCards.reduce((sum, handCard) => {
      if (handCard.number !== 1) return sum + handCard.number;
      aceCards.push(handCard);
      return sum;
    }, 0);

    // 1のトランプを持っていない場合は現在の合計値を返す。
    if (aceCards.length === 0) return cardScoreWithoutAce;

    /*
    以下はAのトランプを持っている場合の処理
      Aを11として扱った場合、カードの合計の値が21を超えなければ、
      Aを11として得点を計算し、呼び出しもとに得点の合計を返す。
  */
    // prettier-ignore
    if (cardScoreWithoutAce < (12 - aceCards.length)) {
    const CardScore = cardScoreWithoutAce + 11 + (aceCards.length - 1);
    return CardScore
  }

    /*
    Aを1として得点を計算し、呼び出しもとに得点の合計を返す。
  */
    const CardScore = cardScoreWithoutAce + aceCards.length;
    return CardScore;
  }
}