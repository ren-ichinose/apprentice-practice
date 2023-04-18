import { calculateCardScore } from '../../utils/calculateCardScore';
import { gameEnd } from '../../utils/gameEnd';
import { getWinnerScore } from '../../utils/getWinnerScore';
import type { AllNameAndScore } from '../interfaces/interfaces';
import type { ComputerPlayer } from '../person/computerPlayer';
import type { Dealer } from '../person/dealer';
import type { Player } from '../person/player';


export class GameAssist {
  /*
    protected readonly dealer: Dealer,
    protected readonly player: Player
    DealertとPlayerクラスのインスタンス
  */
  constructor(
    protected readonly _dealer: Dealer,
    protected readonly _player: Player,
    protected readonly _computerPlayers: ComputerPlayer[]
  ) {}

  // 勝者を発表する関数
  displayWinner(): void {
    // 参加者全員の名前と得点のオブジェクトを格納した配列をつくる
    const allNameAndScore = this.createAllNameAndScore();

    // 参加者の得点の表示
    allNameAndScore.forEach(({ name, score }) => {
      console.log(`${name}の得点は${score}です。`);
    });

    // 勝者の得点を割り出す
    const allScore = allNameAndScore.map(({ score }) => score);
    const winnerScore = getWinnerScore(allScore);

    // 勝者の得点に該当する参加者を画面に表示する
    allNameAndScore.forEach((NameAndScore) => {
      NameAndScore.score === winnerScore &&
        console.log(`${NameAndScore.name}の勝ちです。`);
    });

    gameEnd();
  }

  // 参加者全員の得点を取得して、名前と得点を含むオブジェクトの配列を返す関数
  createAllNameAndScore(): AllNameAndScore[] {
    // 参加者の得点を取得する
    const dealerCardScore = calculateCardScore(this._dealer.myCards);
    const playerCardScore = calculateCardScore(this._player.myCards);
    const computerPlayersScore = this._computerPlayers.map((computerPlayer) => {
      return calculateCardScore(computerPlayer.myCards);
    });

    // 参加者の名前と得点を含むオブジェクトをつくる
    const dealerNameScore = { name: this._dealer.name, score: dealerCardScore };
    const playerNameScore = { name: this._player.name, score: playerCardScore };
    const computerPlayersNameScore = this._computerPlayers.map(
      (computerPlayer, index) => {
        return {
          name: computerPlayer.name,
          score: computerPlayersScore[index],
        };
      }
    );

    // 参加者全員の名前と得点のオブジェクトを格納した配列をつくる
    const allMember: AllNameAndScore[] = [
      dealerNameScore,
      playerNameScore,
      ...computerPlayersNameScore,
    ];

    return allMember;
  }
}