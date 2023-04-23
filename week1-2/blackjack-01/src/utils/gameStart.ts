import type { Card } from "../classes/card/card";
import type { ComputerPlayer } from "../classes/person/computerPlayer";
import { createComputerPlayer } from "./createComputerPlayer";


// ゲームを開始時の必要なアクション
export const gmaeStartAndQuetion = async (deckOfCards: Card): Promise<ComputerPlayer[]> => {
  // 開始宣言
  console.log('ブラックジャックを開始します。');

  // CPUのインスタンスを人数分生成
  const computerPralyers = await createComputerPlayer(deckOfCards);
  return computerPralyers;
};