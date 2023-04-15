import type { Card } from '../card/card';
import { Person } from './person';


export class Dealer extends Person {
  constructor(card: Card) {
    const name = 'ディーラー';
    const role = 'dealer';
    super(name, role, card);
  }

  /*
    トランプをランダムに取得する
    カードクラスから、取得したトランプを削除する
    取得したトランプは表示しない
  */
  getRandomOneSilent(): void {
    const { type, number } = this._card.getRandomOne();
    this._myCards.push({ type, number });
    console.log('ディーラーの引いた2枚目のカードはわかりません。');
  }

  // 2枚目のトランプを表示する
  displayCards(): void {
    const { type, number } = this._myCards[1];
    console.log(`ディーラーの引いた2枚目のカードは${type}の${number}でした。`);
  }
}