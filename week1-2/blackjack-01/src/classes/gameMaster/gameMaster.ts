import { deleteComputerPlayer } from '../../utils/deleteComputerPlayer';
import { gameEnd } from '../../utils/gameEnd';
import { gmaeStartAndQuetion } from '../../utils/gameStart';
import { getWinnerScore } from '../../utils/getWinnerScore';
import { Card } from '../card/card';
import { HandCard } from '../handCard/handCard';
import type { AllNameAndScore } from '../interfaces/interfaces';
import type { ComputerPlayer } from '../person/computerPlayer';
import { Dealer } from '../person/dealer';
import { Player } from '../person/player';

export class GameMaster {
  /*
    課題：_computerPlayersがundefinedも許容している。
    課題：ゲッターでasを使用してしまっている。
    なぜ：
    _computerPlayersを初期化する為には、非同期処理でCPUの数を取得しなければならない。
    コンストラクタ内で、非同期処理で取得して初期化する実装をすると、初期化子がないとのエラーが発生するため、
    以下のような実装になってしまった。
  */
  private readonly _dealer: Dealer;
  private readonly _player: Player;
  private _computerPlayers?: ComputerPlayer[];
  private readonly _deckOfCards: Card;

  constructor() {
    // 生成方法の設定をし、トランプを生成する
    const CardTypes = ['スペード', 'ハート', 'ダイヤ', 'クラブ'];
    const jokerNumber = 0;

    // 参加者・進行役・山札のインスタンスを生成
    this._deckOfCards = new Card(CardTypes, jokerNumber);
    this._dealer = new Dealer(this.deckOfCards, new HandCard());
    this._player = new Player(this.deckOfCards, new HandCard());
  }

  get dealer(): Dealer {
    return this._dealer;
  }

  get player(): Player {
    return this._player;
  }

  get deckOfCards(): Card {
    return this._deckOfCards;
  }

  get computerPlayers(): ComputerPlayer[] {
    return this._computerPlayers as ComputerPlayer[];
  }

  // ゲームを開始する関数
  async gameStart(): Promise<void> {
    // ゲームを開始に必要なアクション（開始宣言・CPUのインスタンスの生成）
    await this.firstAction(this.deckOfCards).catch(() => {});

    // プレイヤーとCPUが各自2枚のトランプを取得する
    // ポリモーフィズム(メッセージは同じ、挙動は異なる)
    [this.player, ...this.computerPlayers].forEach((participant) => {
      participant.drawCardRandomOne();
      participant.drawCardRandomOne();
    });

    // 得点が21を超えたCPUを取り除き、新たな配列を生成する
    this.createNewComputerPlayers(this.computerPlayers);

    // ディーラーが2枚のトランプを取得する
    this.dealer.drawCardRandomOne();
    this.dealer.drawCardRandomOneSilent();

    // プレイヤーがカードを引くターン
    await this.player.isNeedDrowCardRandomOne();

    // CPUのターンを開始し、17以上になるまでカードを取得する
    this.computerPlayers.forEach((cpu) => {
      cpu.drawCardRandomrepeat();
    });

    // 得点が21を超えたCPUを取り除き、新たな配列を生成する
    this.createNewComputerPlayers(this.computerPlayers);

    // ディーラーのターン
    this.dealer.secondTurn();

    // 勝敗を発表する
    this.displayWinner();
  }

  // CPUの人数を取得し、人数分のCPUのインスタンスを生成する。
  async firstAction(deckOfCards: Card): Promise<void> {
    this._computerPlayers = await gmaeStartAndQuetion(deckOfCards);
  }

  /*
    1.得点が21を超えたCPUを取り除き、新たな配列を生成する
    2.CPUの配列を空配列にする
    3.生成した配列をセットする
  */
  private createNewComputerPlayers(
    currentComputerPlayers: ComputerPlayer[]
  ): void {
    const newComputerPlayers = deleteComputerPlayer(currentComputerPlayers);
    this.computerPlayers.length = 0;
    this.computerPlayers.push(...newComputerPlayers);
  }

  // 勝者を発表する関数
  private displayWinner(): void {
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
  private createAllNameAndScore(): AllNameAndScore[] {
    const participants = [this._dealer, this._player, ...this.computerPlayers];
    const computerPlayersScore = participants.map(({ name, handCards }) => {
      const score = handCards.calculateCardScore();
      return { name, score };
    });

    return computerPlayersScore;
  }
}
