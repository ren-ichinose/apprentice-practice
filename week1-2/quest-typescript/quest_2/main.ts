const inputNumber = prompt("数値を入力してください");
if (inputNumber) {
  const num = parseInt(inputNumber);
  if (num) {
    const result = num * 2;
    console.log(`2倍の数値です:${result}`);
  } else {
    console.log("数値を入力してください");
  }
} else {
  console.log("数値を入力してください");
}
