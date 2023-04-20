import type { ComputerPlayer } from '../classes/person/computerPlayer';
import { isBurst } from './burstCheck';
import { calculateCardScore } from './calculateCardScore';

// 得点が21を超えたCPUを含んだ配列を返す関数
export const deleteComputerPlayer = (
  computerPlayers: ComputerPlayer[]
): ComputerPlayer[] => {
  const newComputerPlayers = computerPlayers.filter((computerPlayer) => {
    const cardScore = calculateCardScore(computerPlayer.handCards);
    const isBurstResult = isBurst(cardScore);
    return !isBurstResult;
  });

  return newComputerPlayers;
};
