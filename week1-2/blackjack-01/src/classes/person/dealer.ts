import { isBurst } from '../../utils/burst';
import { calculateCardScore } from '../../utils/calculateCardScore';
import { gameEnd } from '../../utils/gameEnd';
import type { Card } from '../card/card';
import { Person } from './person';

export class Dealer extends Person {
  constructor(card: Card) {
    const name = 'ディーラー';
    super(name, card);
  }

  /*
    トランプをランダムに取得して、手持ちのトランプに加える
    取得したトランプは表示しない
  */
  getRandomOneSilent(): void {
    const { type, number } = this._card.getRandomOne();
    this._myCards.push({ type, number });
    console.log('ディーラーの引いた2枚目のカードはわかりません。');
  }

  // ディーラーが17以上になるまでランダムに1枚のトランプを引く関数
  getRandomrepeat(): void {

    this.BurstCheck();

    let cardScore = calculateCardScore(this.myCards);

    while (cardScore < 17) {
      this.getRandomOne();
      cardScore = calculateCardScore(this.myCards);
    }
  }

  /*
    カードの得点を計算する。
    21を超えた場合はゲームを終了させる関数を呼び出す。
  */
  protected BurstCheck(): void {
    const cardScore = calculateCardScore(this._myCards);
    const isBurstResult = isBurst(cardScore);
    if (isBurstResult) {
      console.log('みなさんの勝ちです。');
      gameEnd();
    }
  }

  // 2枚目に取得したトランプを表示する
  displaySecondsCard(): void {
    const { type, number } = this.myCards[1];
    console.log(`ディーラーの引いた2枚目のカードは${type}の${number}でした。`);
  }
}
