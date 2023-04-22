import { GameMaster } from './classes/gameMaster/gameMaster';
import { gmaeStartAndQuetion } from './utils/gameStart';

const blackJackGame = async (): Promise<void> => {
  // ゲームスタートの宣言と参加者の人数を標準入力より取得する
  const totalPlayers = await gmaeStartAndQuetion();
  const gameMaster = new GameMaster(totalPlayers);
  await gameMaster.gameStart();
};

blackJackGame().catch(() => {
  console.error('ゲームを終了します');
});
