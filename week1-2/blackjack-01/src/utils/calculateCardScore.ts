import type { CardTypes } from '../classes/interfaces/interfaces';


/*
  カードの得点を計算する関数(ノーマル)
export const calculateCardScore = (cards: CardTypes[]): number => {
  const result = cards.reduce((sum, card) => {
    return sum + card.number;
  }, 0);
  return result;
};
*/

// カードの得点を計算する関数(トランプの数字がAの場合、1もしくは11として計算する。)
export const calculateCardScore = (cards: CardTypes[]): number => {
  // トランプのAの配列を格納する変数
  const aceCards: CardTypes[] = [];

  /*
    Aを除いた数字のスコアを計算
    AはaceCardsに格納する。
  */
  const nonAceCardScore = cards.reduce((sum, card) => {
    if (card.number !== 1) return sum + card.number;
    aceCards.push(card);
    return sum;
  }, 0);

  // 1のトランプを持っていない場合は現在の合計値を返す。
  if (aceCards.length === 0) return nonAceCardScore;

  /*
    以下はAのトランプを持っている場合の処理
      Aを11として扱った場合、カードの合計の値が21を超えなければ、
      Aを11として得点を計算し、呼び出しもとに得点の合計を返す。
  */
  let CardScore = 0;
  // prettier-ignore
  if (nonAceCardScore < (12 - aceCards.length)) {
    CardScore = nonAceCardScore + 11 + (aceCards.length - 1)
  }

  /*
    Aを1として得点を計算し、呼び出しもとに得点の合計を返す。
  */
  CardScore = nonAceCardScore + aceCards.length;
  return CardScore;
};

// // 得点計算のテスト
//   // 21
//   console.log(
//     calculateCardScore([
//       { type: '', number: 10 },
//       { type: '', number: 1 },
//     ])
//   );

//   // 12
//   console.log(
//     calculateCardScore([
//       { type: '', number: 11 },
//       { type: '', number: 1 },
//     ])
//   );

//   // 21
//   console.log(
//     calculateCardScore([
//       { type: '', number: 9 },
//       { type: '', number: 1 },
//       { type: '', number: 1 },
//     ])
//   );

//   // 12
//   console.log(
//     calculateCardScore([
//       { type: '', number: 10 },
//       { type: '', number: 1 },
//       { type: '', number: 1 },
//     ])
//   );

//   // 13
//   console.log(
//     calculateCardScore([
//       { type: '', number: 10 },
//       { type: '', number: 1 },
//       { type: '', number: 1 },
//       { type: '', number: 1 },
//     ])
//   );