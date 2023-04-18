import { gameEnd } from './gameEnd';

// 21を超えているかを確認して真偽値を返す関数
export const isBurst = (cardScore: number): boolean => {
  if (cardScore > 21) {
    return true;
  }
  return false;
};

// 21を超えているかを確認して超えている場合はゲームを終了させる
export const BurstCheckEnd = (name: string, cardScore: number): void => {
  if (cardScore > 21) {
    console.log('得点が21を超えました。');
    console.log(`${name}は負けです。`);
    gameEnd();
  }
};
