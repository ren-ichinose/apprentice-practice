import { deleteCard, findCrad } from '../../utils/cardsHandler';
import { createCards } from '../../utils/createCards';
import type { CardTypes } from '../interfaces/interfaces';


export class Card {
  /*
    _currentCards: { type: string, number: number}[]
    トランプの配列を格納するメンバ変数
  */
  private _currentCards: CardTypes[];

  // 引数に応じた組み合わせのトランプを生成してセットする
  constructor(types: string[], jokerNumber: number) {
    const cards = createCards(types, jokerNumber);
    this._currentCards = cards;
  }

  get currentCards(): CardTypes[] {
    return this._currentCards;
  }

  // ランダムに1枚のトランプを返す関数
  getRandomOne(): CardTypes {
    // ランダムにトランプを決定する
    const randomIndex = Math.floor(Math.random() * this._currentCards.length);
    const { type, number } = this._currentCards[randomIndex];

    // 選んだトランプを取得する
    const randomCard = this.getSelectOne(type, number);
    return randomCard;
  }

  // 指定されたトランプを返す関数
  getSelectOne(type: string, number: number): CardTypes {
    // 現在の全てのトランプから、指定されたトランプを取得する
    const findedCard = findCrad(type, number, this._currentCards);

    // _currentCardsから取得したトランプを取り除いた配列を取得する
    const newCurrentCards = deleteCard(
      findedCard.type,
      findedCard.number,
      this._currentCards
    );

    this._currentCards = newCurrentCards;
    return findedCard;
  }
}