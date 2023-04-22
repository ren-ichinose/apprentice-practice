import { createComputerPlayer } from '../../utils/createComputerPlayer';
import { deleteComputerPlayer } from '../../utils/deleteComputerPlayer';
import { Card } from '../card/card';
import { GameAssist } from '../gameAssist/gameAssist';
import { HandCard } from '../handCard/handCard';
import type { ComputerPlayer } from '../person/computerPlayer';
import { Dealer } from '../person/dealer';
import { Player } from '../person/player';

export class GameMaster {
  private readonly _dealer: Dealer;
  private readonly _player: Player;
  private readonly _computerPlayers: ComputerPlayer[];
  private readonly _gameAssist: GameAssist;

  constructor(totalPlayers: number) {
    // 生成方法の設定をし、トランプを生成する
    const CardTypes = ['スペード', 'ハート', 'ダイヤ', 'クラブ'];
    const jokerNumber = 0;
    const deckOfCards = new Card(CardTypes, jokerNumber);

    // 参加者・進行役のインスタンスを生成
    this._dealer = new Dealer(deckOfCards, new HandCard());
    this._player = new Player(deckOfCards, new HandCard());
    this._computerPlayers = createComputerPlayer(totalPlayers, deckOfCards);
    this._gameAssist = new GameAssist(
      this._dealer,
      this._player,
      this._computerPlayers
    );
  }

  get dealer(): Dealer {
    return this._dealer;
  }

  get player(): Player {
    return this._player;
  }

  get computerPlayers(): ComputerPlayer[] {
    return this._computerPlayers;
  }

  get gameAssist(): GameAssist {
    return this._gameAssist;
  }

  async gameStart(): Promise<void> {
    // プレイヤーとCPUが各自2枚のトランプを取得する
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
    this.gameAssist.displayWinner();
  }

  /*
      1.得点が21を超えたCPUを取り除き、新たな配列を生成する
      2.CPUの配列を空配列にする
      3.生成した配列をセットする
    */
  createNewComputerPlayers(currentComputerPlayers: ComputerPlayer[]): void {
    const newComputerPlayers = deleteComputerPlayer(currentComputerPlayers);
    this.computerPlayers.length = 0;
    this.computerPlayers.push(...newComputerPlayers);
  }
}
