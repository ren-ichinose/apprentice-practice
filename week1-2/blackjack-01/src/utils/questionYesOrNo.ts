import * as readline from 'readline';


/*
  コンソールでy/nの質問をし、真偽値を返す関数。
  
  question: string
  コンソールで表示する質問内容
*/
export const questionYesOrNo = async (question: string): Promise<boolean> => {
  const lr = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  return await new Promise<boolean>((resolve) => {
    lr.question(question, (answer) => {
      resolve(answer === 'y' );
      lr.close();
    });
  });
};

export const questionNumber = async (question: string): Promise<number> => {
  const lr = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  return await new Promise<number>((resolve) => {
    lr.question(question, (answer = '') => {
      resolve(Number(answer));
      lr.close();
    });
  });
};