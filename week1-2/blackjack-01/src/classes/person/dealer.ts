import type { CardTypes } from '../interfaces/interfaces';
import { Person } from './person';


export class Dealer extends Person {
  /*
  数字と絵柄の組み合わせから構成されている、プレイヤーが現在持っているカードの配列
  */
  private _cards: CardTypes[];

  constructor() {
    const name = 'ディーラー';
    const role = 'dealer';
    super(name, role);
    this._cards = [];
  }

  get cards(): CardTypes[] {
    return this._cards;
  }

  /*
  現在のカードの配列に引数にとるカードを加える
  */
  set cards(cards) {
    this._cards = [...this._cards, ...cards];
  }
}