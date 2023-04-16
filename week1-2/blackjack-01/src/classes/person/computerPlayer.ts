import { gameEndComputerPlayer } from '../../main';
import { calculateCardScore } from '../../utils/calculateCardScore';
import type { Card } from '../card/card';
import { Person } from './person';


export class ComputerPlayer extends Person {
  constructor(name: string, card: Card) {
    const role = 'player';
    super(name, role, card);
  }

  getRandomOne(): void {
    const { type, number } = this._card.getRandomOne();
    this._myCards.push({ type, number });

    console.log(`${this._name}の引いたカードは${type}の${number}です。`);

    /*
      カードの得点を計算する。
      21を超えた場合はCPUのみゲームを終了させる関数を呼び出す。
    */
    const cardScore = calculateCardScore(this._myCards);
    if (cardScore > 21) {
      console.log('得点が21を超えました。');
      console.log(`${this._name}は負けです。`);
      gameEndComputerPlayer(this._name);
    }
  }
}