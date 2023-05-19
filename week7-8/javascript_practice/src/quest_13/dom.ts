// h1 タグのテキストを「シンプルブログ」に変更
const h1Element = document.querySelector('h1');
if (h1Element) h1Element.textContent = 'シンプルブログ';

// フォームの送信ボタンをクリックしたときに、フォームに入力された内容（タイトルと本文）をコンソールに出力する
const postForm = document.getElementById('post-form') as HTMLFormElement;
postForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const postFormTitle = document.getElementById('title') as HTMLInputElement;
  const postFormContent = document.getElementById(
    'content'
  ) as HTMLTextAreaElement;

  if (!postFormTitle.value || !postFormContent.value) {
    postForm.reset();
    return;
  }

  console.log('タイトル：', postFormTitle.value);
  console.log('本文：', postFormContent.value);

  // フォームの送信ボタンをクリックしたときに、フォームの内容をdivタグ内にタイトルと本文を挿入する
  const posts = document.getElementById('posts');
  if (!posts) return;

  const postsTitle = document.createElement('h2');
  const postsContent = document.createElement('p');

  postsTitle.textContent = postFormTitle.value;
  postsContent.textContent = postFormContent.value;

  posts.appendChild(postsTitle);
  posts.appendChild(postsContent);

  // フォームの送信ボタンをクリックしたときに、フォームの中身を空にする。
  postForm.reset();

  // 要素ノードの削除
  if (posts.children.length > 6) {
    posts.removeChild(posts.children[0]);
    posts.removeChild(posts.children[0]);
  }
});

// スタイルの変更をする
postForm.addEventListener('mouseover', () => {
  postForm.style.backgroundColor = 'yellow';
});

postForm.addEventListener('mouseout', () => {
  postForm.style.backgroundColor = 'white';
});
