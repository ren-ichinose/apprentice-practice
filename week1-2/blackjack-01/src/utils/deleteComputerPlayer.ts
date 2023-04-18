import type { ComputerPlayer } from '../classes/person/computerPlayer';
import { isBurst } from './burst';
import { calculateCardScore } from './calculateCardScore';

// 得点が21を超えたCPUを削除する関数
export const deleteComputerPlayer = (
  computerPlayers: ComputerPlayer[]
): ComputerPlayer[] => {
  const newComputerPlayers = computerPlayers.filter((computerPlayer) => {
    const cardScore = calculateCardScore(computerPlayer.myCards);
    const isBurstResult = isBurst(cardScore);
    return !isBurstResult;
  });

  return newComputerPlayers;
};
