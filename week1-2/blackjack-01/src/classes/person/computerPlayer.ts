import { isBurst } from '../../utils/burst';
import { Person } from './person';

export class ComputerPlayer extends Person {
  /*
    カードの得点を計算する。
    21を超えた場合はCPUのみゲームを終了させる関数を呼び出す。
  */
  protected BurstCheck(cardScore:number): void {
    const isBurstResult = isBurst(cardScore);

    if (isBurstResult) {
      console.log('得点が21を超えました。');
      console.log(`${this._name}は負けです。`);
    }
  }
}
