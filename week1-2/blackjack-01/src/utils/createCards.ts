import type { CardTypes } from '../classes/interfaces/interfaces';


// 52枚のトランプを生成する関数
export const createCards = (
  types: string[],
  jokerNumber: number
): CardTypes[] => {
  const mapCards: CardTypes[] = [];

  types.forEach((type: string) => {
    [...Array(13)].forEach((_, i) => {
      const number = i + 1;
      mapCards.push({ type, number });
    });
  });

  const jokers = createJoker(jokerNumber);
  const resultCards = [...mapCards, ...jokers];
  return resultCards;
};

const createJoker = (jokerNumber: number): CardTypes[] => {
  const eachCards: CardTypes[] = [];
  [...Array(jokerNumber)].forEach((_) => {
    eachCards.push({ type: 'joker', number: 0 });
  });
  return eachCards;
};

// // テストコード
// const types = ['スペード', 'ハート', 'ダイヤ', 'クラブ'];
// const jokerZero = 0;
// console.log(createCards(types, jokerZero))

// const jokerOne = 1;
// console.log(createCards(types, jokerOne));

// const jokerTwo = 2;
// console.log(createCards(types, jokerTwo));