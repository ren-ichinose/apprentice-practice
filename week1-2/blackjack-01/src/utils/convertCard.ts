export const convertCardNumber = (number: number): string | number => {
  if (number === 1) return 'A';
  if (number === 11) return 'J';
  if (number === 12) return 'Q';
  if (number === 13) return 'K';
  return number;
};
