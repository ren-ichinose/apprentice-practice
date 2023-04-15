import { Dealer } from './classes/person/dealer';
import { Player } from './classes/person/player';

/* eslint-disable-next-lin /*
console.log('ブラックジャックを開始します。');

/*
プレイヤークラスとディーラークラスをインスタンス化する
*/
const player = new Player();
const dealer = new Dealer();

console.log(player.name);
console.log(dealer.name);
