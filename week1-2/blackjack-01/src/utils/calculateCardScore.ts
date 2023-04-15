import type { CardTypes } from '../classes/interfaces/interfaces';

/*
  カードの得点を計算する関数
*/
export const calculateCardScore = (cards: CardTypes[]): number => {
  const result = cards.reduce((sum, crad) => {
    return sum + crad.number;
  }, 0);
  return result;
};