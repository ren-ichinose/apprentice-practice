import type { Card } from '../classes/card/card';
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
    const computerPlayer = new ComputerPlayer(`CPU${count + 1}`, card);
    computerPlayers.push(computerPlayer);
    count++;
  }

  return computerPlayers;
};

// // テストコード
// const card = new Card();
// console.log(createComputerPlayer(3, card));
