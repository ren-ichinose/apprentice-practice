import { Card } from './classes/card/card';
import { GameAssist } from './classes/gameAssist/gameAssist';
import { HandCard } from './classes/handCard/handCard';
import type { ComputerPlayer } from './classes/person/computerPlayer';
import { Dealer } from './classes/person/dealer';
import { Player } from './classes/person/player';
import { createComputerPlayer } from './utils/createComputerPlayer';
import { deleteComputerPlayer } from './utils/deleteComputerPlayer';
import { gmaeStartAndQuetion } from './utils/gameStart';

// ゲームを実行する関数
const blackJackGame = async (): Promise<void> => {
  // ゲームスタートの宣言と参加者の人数を標準入力より取得する
  const totalPlayers = await gmaeStartAndQuetion();

  // カードの生成に方法の設定
  const CardTypes = ['スペード', 'ハート', 'ダイヤ', 'クラブ'];
  const jokerNumber = 0;

  // 山札・手札・参加者・進行役のインスタンスを生成
  const deckOfCards = new Card(CardTypes, jokerNumber);
  const dealersHandCard = new HandCard();
  const playersHandCard = new HandCard();
  const dealer = new Dealer(deckOfCards, dealersHandCard);
  const player = new Player(deckOfCards, playersHandCard);
  const computerPlayers = createComputerPlayer(totalPlayers, deckOfCards);
  const gameAssist = new GameAssist(dealer, player, computerPlayers);

  // プレイヤーとCPUが各自2枚のトランプを取得する
  [player, ...computerPlayers].forEach((participant) => {
    participant.drawCardRandomOne();
    participant.drawCardRandomOne();
  });

  /*
    1.得点が21を超えたCPUを取り除き、新たな配列を生成する
    2.CPUの配列を空配列にする
    3.生成した配列をセットする
  */
  const createNewComputerPlayers = (
    currentComputerPlayers: ComputerPlayer[]
  ): void => {
    const newComputerPlayers = deleteComputerPlayer(currentComputerPlayers);
    computerPlayers.length = 0;
    computerPlayers.push(...newComputerPlayers);
  };
  createNewComputerPlayers(computerPlayers);

  // ディーラーが2枚のトランプを取得する
  dealer.drawCardRandomOne();
  dealer.drawCardRandomOneSilent();

  // プレイヤーがカードを引くターン
  await player.isNeedDrowCardRandomOne();

  // CPUのターンを開始し、17以上になるまでカードを取得する
  computerPlayers.forEach((cpu) => {
    cpu.drawCardRandomrepeat();
  });

  // 得点が21を超えたCPUを取り除き、新たな配列を生成する
  createNewComputerPlayers(computerPlayers);

  console.log('ディーラーのターンを開始します。');
  dealer.displaySecondsCard(); // 2枚目のカードを画面に表示
  dealer.drawCardRandomrepeat(); // カードを繰り返し取得する
  console.log('ディーラーのターンを終了します。');

  // 勝敗を発表する
  gameAssist.displayWinner();
};

// ゲームを実行する関数を呼び出す
blackJackGame().catch(() => {
  console.error('ゲームを終了します');
});
