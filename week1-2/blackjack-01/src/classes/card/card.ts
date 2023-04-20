import type { CardTypes } from '../interfaces/interfaces';

export class Card {
  /*
    _currentDeckOfCards: { type: string, number: number}[]
    トランプの配列を格納するメンバ変数
  */
  private _currentDeckOfCards: CardTypes[];

  // 引数に応じた組み合わせのトランプを生成してセットする
  constructor(types: string[], jokerNumber: number) {
    const cards = this.createCards(types, jokerNumber);
    this._currentDeckOfCards = cards;
  }

  get currentDeckOfCards(): CardTypes[] {
    return this._currentDeckOfCards;
  }

  // 52枚のトランプを生成する関数
  private createCards(types: string[], jokerNumber: number): CardTypes[] {
    const deckOfCardsWithoutJoker: CardTypes[] = [];

    types.forEach((type: string) => {
      [...Array(13)].forEach((_, i) => {
        const number = i + 1;
        deckOfCardsWithoutJoker.push({ type, number });
      });
    });

    const jokers = this.createJokers(jokerNumber);
    const deckOfCards = [...deckOfCardsWithoutJoker, ...jokers];
    return deckOfCards;
  }

  // 引数の値に応じて、ジョーカーを作成する
  private createJokers(jokerNumber: number): CardTypes[] {
    const jokers: CardTypes[] = [];
    [...Array(jokerNumber)].forEach((_) => {
      jokers.push({ type: 'joker', number: 0 });
    });
    return jokers;
  }

  // ランダムに1枚のトランプを返す関数
  drawCardRandomOne(): CardTypes {
    // ランダムにトランプを決定して取得する
    const randomIndex = Math.floor(
      Math.random() * this._currentDeckOfCards.length
    );
    const drawnCard = this._currentDeckOfCards[randomIndex];

    // 取得したトランプを現在の手札から削除する
    this.deleteCards(drawnCard);
    return drawnCard;
  }

  // _currentDeckOfCardsから取得したトランプを1枚取り除く
  deleteCards({ type, number }: CardTypes): void {
    const newCurrentDeckOfCards = this.currentDeckOfCards.filter(
      (currentCard) => {
        if (currentCard.type === type && currentCard.number === number)
          return false;
        return true;
      }
    );

    this._currentDeckOfCards = newCurrentDeckOfCards;
  }
}
