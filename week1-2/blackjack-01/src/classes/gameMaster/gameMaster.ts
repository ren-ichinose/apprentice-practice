import { calculateCardScore } from '../../utils/calculateCardScore';
import { gameEnd } from '../../utils/gameEnd';
import { questionYesOrNo } from '../../utils/questionYesOrNo';
import type { Dealer } from '../person/dealer';
import type { Player } from '../person/player';


export class GameMaster {
  /*
    private readonly dealer: Dealer,
    private readonly player: Player
    DealertとPlayerクラスのインスタンス
  */
  constructor(
    private readonly _dealer: Dealer,
    private readonly _player: Player
  ) {}

  // 続けてカードを引くかを確認する関数
  async isNeedGetRandomOne(): Promise<void> {
    // カードのスコアを取得 > ユーザーにトランプを引くか尋ねる > 入力内容を取得する。
    const cardScore = calculateCardScore(this._player.myCards);
    let isNeed = await questionYesOrNo(
      `あなたの現在の得点は${cardScore}です。カードを引きますか？（y/n）`
    );

    // 現在の得点が21点以下で、かつyが押下された場合はカードを取得する
    while (isNeed) {
      this._player.getRandomOne();
      const cardScore = calculateCardScore(this._player.myCards);
      const questionMassage = `あなたの現在の得点は${cardScore}です。カードを引きますか？（y/n）`;
      isNeed = await questionYesOrNo(questionMassage);
    }
  }

  // 17を超えるまでランダムに1枚のトランプを引く関数
  getRandomrepeat(): void {
    let cardScore = calculateCardScore(this._dealer.myCards);

    // 2枚目の時点で21を超えている場合はゲームを終了する
    if (cardScore > 21) {
      console.log(`${this._player.name}の勝ちです。`);
      gameEnd();
    }

    while (cardScore < 17) {
      this._dealer.getRandomOne();
      cardScore = calculateCardScore(this._dealer.myCards);
    }
  }

  // 勝者を発表する関数
  displayWinner(): void {
    // 参加者の得点を取得する
    const dealerCardScore = calculateCardScore(this._dealer.myCards);
    const playerCardScore = calculateCardScore(this._player.myCards);

    console.log(`${this._player.name}の得点は${playerCardScore}です。`);
    console.log(`${this._dealer.name}の得点は${dealerCardScore}です。`);


    // 得点を比較して参加者を発表する
    if (dealerCardScore === playerCardScore) {
      console.log(`引き分けです！`);
    } else if (dealerCardScore < playerCardScore) {
      console.log(`${this._player.name}の勝ちです。`);
    } else {
      console.log(`${this._dealer.name}の勝ちです。`);
    }
    gameEnd();
  }
}