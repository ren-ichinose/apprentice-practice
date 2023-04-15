// 100回 "こんにちは！" と出力する関数を定義
const helloLoop = () => {
  for (let i = 1; i <= 100; i++) console.log("hello");
};

helloLoop();

// n回羊の数えを出力する関数sheepを定義
const sheep = (n: number) => {
  for (let i = 1; i <= n; i++) console.log(`羊が${i}匹`);
};

sheep(3);

// 1から100までの足し算の結果を出力する関数を定義
const sum_1_100 = () => {
  let sumResult = 0;
  for (let i = 1; i <= 100; i++) sumResult += i;
  console.log(sumResult);
};

sum_1_100();

// 2つの整数xとyが与えられ、xからyまでの足し算の結果を出力する関数を定義
const sum = (x: number, y: number) => {
  let sumResult = 0;
  for (; x <= y; x++) {
    sumResult += x;
  }
  console.log(sumResult);
};

sum(10, 80);

// n日間お手伝いを継続した時のお小遣いの金額を算出する関数fibonacciを定義
const fibonacci = (n: number) => {
  let reward_2 = 0;
  let reward_1 = 0;
  let reward_current = 0;

  for (let i = 0; i <= n; i++) {
    if (i === 0) continue;
    if (i === 1) {
      reward_current = 1;
      continue;
    }

    reward_2 = reward_1;
    reward_1 = reward_current;
    reward_current = reward_1 + reward_2;
  }

  console.log(reward_current);
};

fibonacci(0);
fibonacci(1);
fibonacci(2);
fibonacci(3);
fibonacci(4);
fibonacci(7);
fibonacci(30);
