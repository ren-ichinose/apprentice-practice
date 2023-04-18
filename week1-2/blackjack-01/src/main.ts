import { Card } from './classes/card/card';
import { GameAssist } from './classes/gameAssist/gameAssist';
import { Dealer } from './classes/person/dealer';
import { Player } from './classes/person/player';
import { createComputerPlayer } from './utils/createComputerPlayer';
import { gameStart } from './utils/gameStart';


// Todo：gameMasterクラスは、共通部分と条件に依存する内容が含まれているため、クラス設計を再度見直す。

// 参加者と進行役のインスタンスを生成
const totalPlayers = 3;
const CardTypes = ['スペード', 'ハート', 'ダイヤ', 'クラブ'];
const jokerNumber = 0;

const crads = new Card(CardTypes, jokerNumber);
const computerPlayers = createComputerPlayer(totalPlayers, crads);
const dealer = new Dealer(crads);
const player = new Player(crads);
const gameAssist = new GameAssist(dealer, player, computerPlayers);

/*
  得点が17を超えた場合にCPUを削除する関数
    deleteComputerPlayers：削除するCPUの名前を一時的に格納する変数
    addDeleteComputerPlayers：deleteComputerPlayersに追加する関数
    gameEndComputerPlayer：CPUを削除する関数
*/
const deleteComputerPlayers: string[] = [];

export const addDeleteComputerPlayers = (name: string): void => {
  deleteComputerPlayers.push(name);
};

const gameEndComputerPlayer = (): void => {
  const deleteComputerPlayerIndex: number[] = [];

  deleteComputerPlayers.forEach((name) => {
    computerPlayers.forEach((computerPlayer, index) => {
      name === computerPlayer.name && deleteComputerPlayerIndex.push(index);
    });
  });

  const newComputerPlayers = computerPlayers.filter(
    (_, index) => !deleteComputerPlayerIndex.includes(index)
  );

  computerPlayers.splice(0);
  computerPlayers.push(...newComputerPlayers);
  deleteComputerPlayers.splice(0);
};

// ゲームスタート
gameStart();

// プレイヤー2枚のトランプを取得する
player.getRandomOne();
player.getRandomOne();

// CPUが各自2枚のトランプを取得する
computerPlayers.forEach((cpu) => {
  cpu.getRandomOne();
  cpu.getRandomOne();
});
deleteComputerPlayers.length !== 0 && gameEndComputerPlayer();

// ディーラーが2枚のトランプを取得する
dealer.getRandomOne();
dealer.getRandomOneSilent();

player
  .isNeedGetRandomOne() // プレイヤーがカードを引くターン
  .then(() => {
    // CPUのターンを開始し、17以上になるまでカードを取得する
    computerPlayers.forEach((cpu) => {
      cpu.getRandomrepeat();
    });
    deleteComputerPlayers.length !== 0 && gameEndComputerPlayer();

    console.log('ディーラーのターンを開始します。');
    dealer.displaySecondsCard(); // プレイヤー画面に表示
    dealer.getRandomrepeat(); // カードを繰り返し取得する
    console.log('ディーラーのターンを終了します。');
    gameAssist.displayWinner(); // 勝敗を発表する
  })
  .catch((error) => {
    console.log(error.message); // エラー発生時の処理
  });