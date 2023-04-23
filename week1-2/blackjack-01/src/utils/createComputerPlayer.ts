import type { Card } from '../classes/card/card';
import { HandCard } from '../classes/handCard/handCard';
import { ComputerPlayer } from '../classes/person/computerPlayer';
import { questionNumber } from './questionYesOrNo';

export const createComputerPlayer = async (
  card: Card
): Promise<ComputerPlayer[]> => {
  /*
    totalPlayers：CPUの数
    count：CPUのインスタンスを作成した数
    computerPlayers: computerPlayer[]：CPUのインスタンスを格納する配列
  */
  const totalPlayers = await questionNumberTotalPlayers();
  let count = 0;
  const computerPlayers: ComputerPlayer[] = [];

  // 人数分のCPUのインスタンスの作成
  while (count < totalPlayers) {
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

const questionNumberTotalPlayers = async (): Promise<number> => {
  try {
    const totalComputerPlayer = await questionNumber(
      'CPUを追加する場合は0〜3の整数を入力してください。'
    );

    if (totalComputerPlayer > 3 || isNaN(totalComputerPlayer))
      throw new Error();

    return totalComputerPlayer;
  } catch (error) {
    // 入力内容に誤りがある場合は、再度入力を促す
    console.log('Error:入力内容を確認してください。');
    const totalComputerPlayer = await questionNumber(
      'CPUを追加する場合は0〜3の整数を入力してください。'
    );

    // 入力内容に誤りがある場合は、プレイヤー人数を3としてゲームをスタートする
    if (totalComputerPlayer > 3 || isNaN(totalComputerPlayer)) {
      console.log('Error:入力内容を確認できませんでした。');
      console.log('CPUは3人でゲームを開始します。');
      return 3;
    }

    return totalComputerPlayer;
  }
};

// // テストコード
// const card = new Card();
// console.log(createComputerPlayer(3, card));
