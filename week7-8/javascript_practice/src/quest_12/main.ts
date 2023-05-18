// オブジェクトを理解する

// 書籍の名前と著者名をプロパティとして持つオブジェクトの配列 books を受け取り、「『書籍名』著者名」を出力する関数 printBooks を実装する
interface Books {
  bookTitle: string;
  authorName: string;
}

const printBooks = (books: Books[]): void => {
  books.forEach(({ bookTitle, authorName }) => {
    console.log(`${bookTitle}:${authorName}`);
  });
};

printBooks([
  { bookTitle: '『JavaScript入門』', authorName: '山田太郎' },
  { bookTitle: '『JavaScriptの絵本』', authorName: '山田次郎' },
]);

// ユーザー名 username とパーミッションの種類 permission を引数に受け取り、パーミッションが許可されているかどうかを判定する関数 checkPermission を実装する
interface User {
  username: string;
  permissions: {
    canRead: boolean;
    canWrite: boolean;
    canDelete: boolean;
  };
}

type Permission = 'canRead' | 'canWrite' | 'canDelete';

const users: User[] = [
  {
    username: '山田',
    permissions: {
      canRead: true,
      canWrite: true,
      canDelete: false,
    },
  },
  {
    username: '佐藤',
    permissions: {
      canRead: false,
      canWrite: true,
      canDelete: false,
    },
  },
  // ユーザーを追加してください
];

const checkPermission = (username: string, permission: Permission): boolean => {
  const user = users.find(
    ({ username: findedUsername }) => findedUsername === username
  );
  if (!user) throw new Error();
  return user.permissions[permission];
};

console.log(checkPermission('山田', 'canWrite'));
