import { calculateCardScore } from '../../utils/calculateCardScore';
import { questionYesOrNo } from '../../utils/questionYesOrNo';
import type { Card } from '../card/card';
import { Person } from './person';


export class Player extends Person {
  constructor(card: Card) {
    const name = 'あなた';
    super(name, card);
  }

  async isNeedGetRandomOne(): Promise<void> {
    // カードのスコアを取得 > ユーザーにトランプを引くか尋ねる > 入力内容を取得する。
    const cardScore = calculateCardScore(this.myCards);
    let isNeed = await questionYesOrNo(
      `あなたの現在の得点は${cardScore}です。カードを引きますか？（y/n）`
    );

    // 現在の得点が21点以下で、かつyが押下された場合はカードを取得する
    while (isNeed) {
      this.getRandomOne();
      const cardScore = calculateCardScore(this.myCards);
      const questionMassage = `あなたの現在の得点は${cardScore}です。カードを引きますか？（y/n）`;
      isNeed = await questionYesOrNo(questionMassage);
    }
  }
}