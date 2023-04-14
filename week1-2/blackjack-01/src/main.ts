import { Participant } from './classes/participant/participant';

/* eslint-disable-next-lin */
console.log('ブラックジャックを開始します。');

const player = new Participant('あなた', 'プレイヤー');
const dealer = new Participant('ディーラー', 'ディーラー');
console.log(player.name);
console.log(dealer.name);
