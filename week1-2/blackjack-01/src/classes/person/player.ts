import { BurstCheckEnd } from '../../utils/burstCheck';
import { questionYesOrNo } from '../../utils/questionYesOrNo';
import type { Card } from '../card/card';
import type { HandCard } from '../handCard/handCard';
import { Person } from './person';

export class Player extends Person {
  constructor(card: Card, handCard: HandCard) {
    const name = 'あなた';
    super(name, card, handCard);
  }

  async isNeedDrowCardRandomOne(): Promise<void> {
    // カードのスコアを取得 > ユーザーにトランプを引くか尋ねる > 入力内容を取得する。
    const cardScore = this._handCard.calculateCardScore();
    let isNeed = await questionYesOrNo(
      `あなたの現在の得点は${cardScore}です。カードを引きますか？（y/n）`
    );

    // 現在の得点が21点以下で、かつyが押下された場合はカードを取得する
    while (isNeed) {
      this.drawCardRandomOne();
      const cardScore = this._handCard.calculateCardScore();
      const questionMassage = `あなたの現在の得点は${cardScore}です。カードを引きますか？（y/n）`;
      isNeed = await questionYesOrNo(questionMassage);
    }
  }

  protected BurstCheck(cardScore: number): void {
    BurstCheckEnd(this.name, cardScore);
  }
}
