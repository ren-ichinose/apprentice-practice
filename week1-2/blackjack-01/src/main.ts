import { Card } from './classes/card/card';
import { GameMaster } from './classes/gameMaster/gameMaster';
import { Dealer } from './classes/person/dealer';
import { Player } from './classes/person/player';
import { createComputerPlayer } from './utils/createComputerPlayer';
import { gameStart } from './utils/gameStart';


// Todo：CPUがいない場合のロジック（createComputerPlayer()の第1引数が0の時）に問題が無いかを確認する。
// Todo：最初の時点で21を超えていた場合に、負けとなるロジックがないため、修正する。
// Todo：gameMasterクラスは、共通部分と条件に依存する内容が含まれているため、クラス設計を再度見直す。


// 参加者と進行役のインスタンスを生成
const crads = new Card();
const computerPlayers = createComputerPlayer(3, crads);
const dealer = new Dealer(crads);
const player = new Player(crads);
const gameMaster = new GameMaster(dealer, player, computerPlayers);

// CPUをゲームから除外する関数
export const gameEndComputerPlayer = (name: string): void => {
  computerPlayers.forEach((computerPlayer, index) => {
    computerPlayer.name === name && computerPlayers.splice(index, 1);
  });
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

// ディーラーが2枚のトランプを取得する
dealer.getRandomOne();
dealer.getRandomOneSilent();

gameMaster
  .isNeedGetRandomOne() // プレイヤーがカードを引くターン
  .then(() => {
    // Todo:CPUのターンを開始し、17以上になるまでカードを引く処理
    console.log('ディーラーのターンを開始します。');
    dealer.displayCards(); // プレイヤー画面に表示
    gameMaster.getRandomrepeat(); // カードを繰り返し取得する
    console.log('ディーラーのターンを終了します。');
    gameMaster.displayWinner(); // 勝敗を発表する
  })
  .catch((error) => {
    console.log(error.message); // エラー発生時の処理
  });