import { Card } from './classes/card/card';
import { GameMaster } from './classes/gameMaster/gameMaster';
import { Dealer } from './classes/person/dealer';
import { Player } from './classes/person/player';


console.log('ブラックジャックを開始します。');

const crads = new Card();
const dealer = new Dealer(crads);
const player = new Player(crads);
const gameMaster = new GameMaster(dealer, player);

// プレイヤーとディーラーが各自2枚のトランプを取得する
player.getRandomOne();
player.getRandomOne();
dealer.getRandomOne();
dealer.getRandomOneSilent();

gameMaster
  .isNeedGetRandomOne() // プレイヤーがカードを引くターン
  .then(() => {
    console.log('ディーラーのターンを開始します。');
    dealer.displayCards(); // プレイヤー画面に表示
    gameMaster.getRandomrepeat(); // カードを繰り返し取得する
    console.log('ディーラーのターンを終了します。');
    gameMaster.displayWinner(); // 勝敗を発表する
  })
  .catch((error) => {
    console.log(error.message); // エラー発生時の処理
  });