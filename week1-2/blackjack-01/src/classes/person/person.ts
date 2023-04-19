import { calculateCardScore } from '../../utils/calculateCardScore';
import type { Card } from '../card/card';
import type { CardTypes } from '../interfaces/interfaces';

export abstract class Person {
  /*
  _name: string             名前
  _card: Card               Cardクラスのインスタンス
  _myCards: CardTypes[]     数字と絵柄の組み合わせから構成されている手札の配列
  */
  constructor(
    protected readonly _name: string,
    protected readonly _card: Card,
    protected _myCards: CardTypes[] = []
  ) {}

  get name(): string {
    return this._name;
  }

  get Cards(): Card {
    return this._card;
  }

  get myCards(): CardTypes[] {
    return this._myCards;
  }

  // トランプをランダムに取得して手札にセットする関数
  protected drawCard(): CardTypes {
    const card = this._card.getRandomOne();
    this._myCards.push(card);
    return card;
  }

  /*
    取得したカードを画面に表示し
    BurstCheck()に得点を渡す
  */
  getRandomOne(): void {
    const { type, number } = this.drawCard();
    console.log(`${this._name}の引いたカードは${type}の${number}です。`);
    const cardScore = calculateCardScore(this._myCards);
    this.BurstCheck(cardScore);
  }

  /*
    抽象メソッドのため、サブクラスで下記の実装が必要
    21を超えた（バースト）場合はゲームを終了させる処理
    または、バーストした参加者を除いてゲームを継続する処理
  */
  protected abstract BurstCheck(cardScore: number): void;

  // CPUが17以上になるまでランダムに1枚のトランプを引く関数
  getRandomrepeat(): void {
    let cardScore = calculateCardScore(this._myCards);

    while (cardScore < 17) {
      this.getRandomOne();
      cardScore = calculateCardScore(this._myCards);
    }
  }
}
