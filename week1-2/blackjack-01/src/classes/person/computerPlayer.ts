import { addDeleteComputerPlayers } from '../../main';
import { isBurst } from '../../utils/burst';
import { calculateCardScore } from '../../utils/calculateCardScore';
import { Person } from './person';

export class ComputerPlayer extends Person {
  /*
    カードの得点を計算する。
    21を超えた場合はCPUのみゲームを終了させる関数を呼び出す。
  */
  protected BurstCheck(): void {
    const cardScore = calculateCardScore(this._myCards);
    const isBurstResult = isBurst(cardScore);

    if (isBurstResult) {
      console.log(`${this._name}は負けです。`);
      addDeleteComputerPlayers(this._name);
    }
  }

  // CPUが17以上になるまでランダムに1枚のトランプを引く関数
  getRandomrepeat(): void {
    let cardScore = calculateCardScore(this._myCards);

    while (cardScore < 17) {
      this.getRandomOne();
      cardScore = calculateCardScore(this._myCards);
    }
  }
}
