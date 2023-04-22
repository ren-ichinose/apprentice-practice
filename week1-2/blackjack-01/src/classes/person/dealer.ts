import { isBurst } from '../../utils/burstCheck';
import { convertCardNumber } from '../../utils/convertCard';
import { gameEnd } from '../../utils/gameEnd';
import type { Card } from '../card/card';
import type { HandCard } from '../handCard/handCard';
import { Person } from './person';

export class Dealer extends Person {
  constructor(card: Card, handCard: HandCard) {
    const name = 'ディーラー';
    super(name, card, handCard);
  }

  // ディーラーの2ターン目の処理
  secondTurn(): void {
    console.log('ディーラーのターンを開始します。');
    this.displaySecondsCard(); // 2枚目のカードを画面に表示
    this.drawCardRandomrepeat(); // カードを繰り返し取得する
    console.log('ディーラーのターンを終了します。');
  }

  /*
    トランプをランダムに取得して、手持ちのトランプに加える
    取得したトランプは表示しない
  */
  drawCardRandomOneSilent(): void {
    super.drawCard();
    console.log('ディーラーの引いた2枚目のカードはわかりません。');
  }

  // ディーラーが17以上になるまでランダムに1枚のトランプを引く関数
  drawCardRandomrepeat(): void {
    this.BurstCheck();
    super.drawCardRandomrepeat();
  }

  /*
    カードの得点を計算する。
    21を超えた場合はゲームを終了させる関数を呼び出す。
  */
  protected BurstCheck(): void {
    const cardScore = this._handCard.calculateCardScore();
    const isBurstResult = isBurst(cardScore);
    if (isBurstResult) {
      console.log('得点が21を超えました。');
      console.log('みなさんの勝ちです。');
      gameEnd();
    }
  }

  // 2枚目に取得したトランプを表示する
  displaySecondsCard(): void {
    const { type, number } = this._handCard.handCards[1];
    console.log(
      `ディーラーの引いた2枚目のカードは${type}の${convertCardNumber(
        number
      )}でした。`
    );
  }
}
