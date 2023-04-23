import { GameMaster } from './classes/gameMaster/gameMaster';
import { questionYesOrNo } from './utils/questionYesOrNo';

const blackJackGame = async (): Promise<void> => {
  // ゲームスタートの宣言と参加者の人数を標準入力より取得する
  const isStart = await questionYesOrNo(
    'ブラックジャックをはじめますか？（y/n）'
  );
  if (isStart) {
    const gameMaster = new GameMaster();
    await gameMaster.gameStart();
  }
};

blackJackGame().catch(() => {
  console.error('ゲームを終了します');
});
