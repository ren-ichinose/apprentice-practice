import type { CardTypes } from '../classes/interfaces/interfaces';

// 現在の全てのトランプから、指定されたトランプを取得する
export const findCrad = (
  type: string,
  number: number,
  currentCards: CardTypes[]
): CardTypes => {
  const findedCard = currentCards.find((card) => {
    if (card.type !== type) return false;
    if (card.number !== number) return false;
    return card;
  });

  if (findedCard === undefined)
    throw new Error('カードを取得できませんでした。');
  return findedCard;
};

// _currentCardsから取得したトランプを取り除く
export const deleteCard = (
  type: string,
  number: number,
  currentCards: CardTypes[]
): CardTypes[] => {
  const newCurrentCards = currentCards.filter((currentCard) => {
    if (currentCard.type === type && currentCard.number === number)
      return false;
    return true;
  });
  return newCurrentCards;
};
