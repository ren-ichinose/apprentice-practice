import type { Card } from '../classes/card/card';
import { HandCard } from '../classes/handCard/handCard';
import { ComputerPlayer } from '../classes/person/computerPlayer';

export const createComputerPlayer = (
  number: number,
  card: Card
): ComputerPlayer[] => {
  /*
    count：CPUのインスタンスを作成した数
    computerPlayers: computerPlayer[]：CPUのインスタンスを格納する配列
  */
  let count = 0;
  const computerPlayers: ComputerPlayer[] = [];

  // CPUのインスタンスの作成
  while (count < number) {
    // 手札のインスタンスの生成
    const handCard = new HandCard();
    const computerPlayer = new ComputerPlayer(
      `CPU${count + 1}`,
      card,
      handCard
    );
    computerPlayers.push(computerPlayer);
    count++;
  }

  return computerPlayers;
};

// // テストコード
// const card = new Card();
// console.log(createComputerPlayer(3, card));
