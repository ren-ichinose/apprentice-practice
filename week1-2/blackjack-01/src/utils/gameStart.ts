import { questionNumber } from './questionYesOrNo';

// ゲームを開始し、参加人数の質問をする関数
export const gmaeStartAndQuetion = async (): Promise<number> => {
  try {
    console.log('ブラックジャックを開始します。');

    const totalComputerPlayer = await questionNumber(
      'CPUを追加する場合は0〜4の整数を入力してください。'
    );

    if (totalComputerPlayer > 3) throw new Error();
    if (isNaN(totalComputerPlayer)) throw new Error();

    return totalComputerPlayer;
  } catch (error) {
    console.log('入力内容に誤りがあります');
    console.log('CPUは3人でゲームを開始します');
    return 3;
  }
};
