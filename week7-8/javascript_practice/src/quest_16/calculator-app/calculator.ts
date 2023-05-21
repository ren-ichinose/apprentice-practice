const display = document.getElementById('display') as HTMLDivElement;
const digitButtons = document.querySelectorAll('.digit');
const operatorButtons = document.querySelectorAll('.operator');
const equals = document.getElementById('equals') as HTMLButtonElement;
const clear = document.getElementById('clear') as HTMLButtonElement;

let inputFirstNumber = 0;
let inputOperator = '';
let isNeedReset = false;

const calculation = (
  firstNumber: number,
  secondNumber: number,
  operator: string
) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
      break;
    case '-':
      return firstNumber - secondNumber;
      break;
    case '*':
      return firstNumber * secondNumber;
      break;
    case '/':
      return firstNumber / secondNumber;
      break;
    default:
      throw new Error();
  }
};

digitButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const digit = button.textContent;
    if (!digit) return;

    if (isNeedReset) {
      display.textContent = '';
      isNeedReset = false;
    }

    display.textContent += digit;
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const operator = button.textContent;
    if (!operator) return;

    if (!inputOperator) {
      inputFirstNumber = Number(display.textContent);
      display.textContent += operator;
      inputOperator = operator;
      isNeedReset = true;
      return;
    }

    const inputSecondNumber = Number(display.textContent);
    const result = calculation(
      inputFirstNumber,
      inputSecondNumber,
      inputOperator
    );

    display.textContent = result.toString();

    inputFirstNumber = result;
    inputOperator = operator;
    isNeedReset = true;
  });
});

equals.addEventListener('click', () => {
  if (!display.textContent) return;
  const inputSecondNumber = Number(display.textContent);
  const result = calculation(
    inputFirstNumber,
    inputSecondNumber,
    inputOperator
  );

  display.textContent = result.toString();

  inputFirstNumber = result;
  inputOperator = '';
  isNeedReset = true;
});

clear.addEventListener('click', () => {
  display.textContent = '';
  inputFirstNumber = 0;
  inputOperator = '';
  isNeedReset = false;
});
