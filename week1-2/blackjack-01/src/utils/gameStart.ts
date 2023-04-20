import { questionNumber } from './questionYesOrNo';

// ゲームを開始し、参加人数の質問をする関数
export const gmaeStartAndQuetion = async (): Promise<number> => {
  console.log('ブラックジャックを開始します。');
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
