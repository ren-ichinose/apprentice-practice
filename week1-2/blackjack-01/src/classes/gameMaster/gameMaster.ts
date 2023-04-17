import { calculateCardScore } from '../../utils/calculateCardScore';
import { gameEnd } from '../../utils/gameEnd';
import { getWinnerScore } from '../../utils/getWinnerScore';
import { questionYesOrNo } from '../../utils/questionYesOrNo';
import type { ComputerPlayer } from '../person/computerPlayer';
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
    private readonly _player: Player,
    private readonly _computerPlayers: ComputerPlayer[]
  ) {}

  // プレイヤーが続けてカードを引くかを確認する関数
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

  // 勝者を発表する関数
  displayWinner(): void {
    // // CPUがいない場合は、displayWinnerShingle関数に処理を移行する
    // if(!this._computerPlayers){
    //   this.displayWinnerShingle()
    //   return ;
    // }

    // 参加者の得点を取得する
    const dealerCardScore = calculateCardScore(this._dealer.myCards);
    const playerCardScore = calculateCardScore(this._player.myCards);
    const computerPlayersScore = this._computerPlayers.map((computerPlayer) => {
      return calculateCardScore(computerPlayer.myCards);
    });

    // 参加者の名前と得点をもつオブジェクトをつくる
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
    const allMember = [
      dealerNameScore,
      playerNameScore,
      ...computerPlayersNameScore,
    ];

    // 参加者の得点の表示
    console.log(`${playerNameScore.name}の得点は${playerCardScore}です。`);
    computerPlayersNameScore.forEach(({ name, score }) => {
      console.log(`${name}の得点は${score}です。`);
    });
    console.log(`${dealerNameScore.name}の得点は${dealerCardScore}です。`);

    // 勝者の得点を割り出す
    const winnerScore = getWinnerScore([
      dealerCardScore,
      playerCardScore,
      ...computerPlayersScore,
    ]);

    // 勝者の得点に該当する参加者を画面に表示する
    allMember.forEach((member) => {
      member.score === winnerScore && console.log(`${member.name}の勝ちです。`);
    });

    gameEnd();
  }

  // CPUがいない場合の勝者を発表する関数
  displayWinnerShingle(): void {
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