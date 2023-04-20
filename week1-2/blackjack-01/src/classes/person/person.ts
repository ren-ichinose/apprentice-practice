import type { Card } from '../card/card';
import type { HandCard } from '../handCard/handCard';
import type { CardTypes } from '../interfaces/interfaces';

export abstract class Person {
  /*
  _name: string             名前
  _deckOfCards: Card               Cardクラスのインスタンス
  _handCards: HandCard     数字と絵柄の組み合わせから構成されている手札の配列
  */
  constructor(
    protected readonly _name: string,
    protected readonly _deckOfCards: Card,
    protected _handCard: HandCard
  ) {}

  get name(): string {
    return this._name;
  }

  get deckOfCards(): Card {
    return this._deckOfCards;
  }

  get handCards(): HandCard {
    return this._handCard;
  }

  // トランプをランダムに取得して手札にセットする関数
  protected drawCard(): CardTypes {
    const card = this._deckOfCards.drawCardRandomOne();
    this._handCard.handCards = [...this._handCard.handCards, card];
    return card;
  }

  /*
    取得したカードを画面に表示し
    BurstCheck()に得点を渡す
  */
  drawCardRandomOne(): void {
    const { type, number } = this.drawCard();
    console.log(`${this._name}の引いたカードは${type}の${number}です。`);
    const cardScore = this._handCard.calculateCardScore();

    this.BurstCheck(cardScore);
  }

  /*
    抽象メソッドのため、サブクラスで下記の実装が必要
    21を超えた（バースト）場合はゲームを終了させる処理
    または、バーストした参加者を除いてゲームを継続する処理
  */
  protected abstract BurstCheck(cardScore: number): void;

  // CPUが17以上になるまでランダムに1枚のトランプを引く関数
  drawCardRandomrepeat(): void {
    let cardScore = this._handCard.calculateCardScore();

    while (cardScore < 17) {
      this.drawCardRandomOne();
      cardScore = this._handCard.calculateCardScore();
    }
  }
}
