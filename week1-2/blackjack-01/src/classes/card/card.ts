import type { CardTypes } from "../interfaces/interfaces";

export class Card {
  /*
    トランプを格納するメンバ変数
    { type: string, number: number}[]
  */
  private _currentCards: CardTypes[];

  constructor() {
    const mapCards: CardTypes[] = [];
    const types = ['スペード', 'ハート', 'ダイヤ', 'クラブ'];

    /*
      52枚のトランプを生成する関数
    */
    types.forEach((type) => {
      [...Array(13)].forEach((_, i) => {
        const number = i + 1;
        mapCards.push({ type, number });
      });
    });

    this._currentCards = mapCards;
  }

  get currentCards(): CardTypes[] {
    return this._currentCards;
  }

  /*
    getOne関数を使用し、ランダムにトランプを返す関数
  */
  randomOne(): CardTypes {
    const randomIndex = Math.floor(Math.random() * 53);
    const { type, number } = this._currentCards[randomIndex];
    if (type === undefined) throw new Error();

    const randomCard = this.getOne(type, number);
    return randomCard;
  }

  /*
    任意のトランプを返す関数
  */
  getOne(type: string, number: number): CardTypes {
    const findedCard = this._currentCards.find((card) => {
      if (card.type !== type) return false;
      if (card.number !== number) return false;
      return card;
    });
    if (findedCard === undefined) throw new Error();

    const newCurrentCards = this._currentCards.filter((card) => {
      if (card.type !== findedCard.type) return true;
      if (card.number !== number) return true;
      return false;
    });

    this._currentCards = [...newCurrentCards];
    return findedCard;
  }
}
