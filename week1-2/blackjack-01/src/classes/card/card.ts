import type { CardTypes } from '../interfaces/interfaces';


export class Card {
  /*
    _currentCards: { type: string, number: number}[]
    トランプを格納するメンバ変数
  */
  private _currentCards: CardTypes[];

  constructor() {
    const mapCards: CardTypes[] = [];
    const types = ['スペード', 'ハート', 'ダイヤ', 'クラブ'];
    
    // 52枚のトランプを生成する関数
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

  // ランダムに1枚のトランプを返す関数
  getRandomOne(): CardTypes {
    const randomIndex = Math.floor(Math.random() * this._currentCards.length);
    const { type, number }: CardTypes = this._currentCards[randomIndex];

    // 生成されたランダムなカードの組み合わせを引数に私、トランプを取得している
    const randomCard = this.getSelectOne(type, number);
    return randomCard;
  }


  // 指定されたトランプを返す関数
  getSelectOne(type: string, number: number): CardTypes {

    // 現在の全てのトランプから、指定されたトランプを取得する
    const findedCard = this._currentCards.find((card) => {
      if (card.type !== type) return false;
      if (card.number !== number) return false;
      return card;
    });
    if (findedCard === undefined) throw new Error();

    
    // _currentCardsから取得したトランプを取り除く
    const newCurrentCards = this._currentCards.filter((card) => {
      if (card.type === findedCard.type && card.number === findedCard.number)
        return false;
      return true;
    });

    this._currentCards = newCurrentCards;
    return findedCard;
  }
}