import { calculateCardScore } from '../../utils/calculateCardScore';
import { gameEnd } from '../../utils/gameEnd';
import type { Card } from '../card/card';
import type { CardTypes } from '../interfaces/interfaces';

export class Person {
  /*
    _myCards: CardTypes[] 
    数字と絵柄の組み合わせから構成されている手札の配列

    _name: string,
    名前

    _role: 'player' | 'dealer'
    プレイヤーかディーラーかの役割を表す

    _card: Card
    Cardクラスのインスタンス
  */

  protected _myCards: CardTypes[];

  constructor(
    protected readonly _name: string,
    protected readonly _role: 'player' | 'dealer',
    protected readonly _card: Card
  ) {
    this._myCards = [];
  }

  get name(): string {
    return this._name;
  }

  get role(): string {
    return this._role;
  }

  get myCards(): CardTypes[] {
    return this._myCards;
  }

  /*
    トランプをランダムに取得して画面に表示する
    カードクラスから、取得したカードを削除する
  */
  getRandomOne(): void {
    const { type, number } = this._card.getRandomOne();
    this._myCards.push({ type, number });

    console.log(`${this._name}の引いたカードは${type}の${number}です。`);

    /*
      カードの得点を計算する。
      21を超えた場合はゲームを終了させる関数を呼び出す。
    */
    const cardScore = calculateCardScore(this._myCards);
    if (cardScore > 21) {
      console.log('得点が21を超えました。');
      console.log(`${this._name}の負けです。`);
      gameEnd();
    }
  }
}
