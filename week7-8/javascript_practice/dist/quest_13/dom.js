"use strict";
const h1Element = document.querySelector('h1');
if (h1Element)
    h1Element.textContent = 'シンプルブログ';
const postForm = document.getElementById('post-form');
postForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const postFormTitle = document.getElementById('title');
    const postFormContent = document.getElementById('content');
    if (!postFormTitle.value || !postFormContent.value) {
        postForm.reset();
        return;
    }
    console.log('タイトル：', postFormTitle.value);
    console.log('本文：', postFormContent.value);
    const posts = document.getElementById('posts');
    if (!posts)
        return;
    const postsTitle = document.createElement('h2');
    const postsContent = document.createElement('p');
    postsTitle.textContent = postFormTitle.value;
    postsContent.textContent = postFormContent.value;
    posts?.appendChild(postsTitle);
    posts?.appendChild(postsContent);
    postForm.reset();
    if (posts.children.length > 6) {
        posts.removeChild(posts.children[0]);
        posts.removeChild(posts.children[0]);
    }
});
postForm.addEventListener('mouseover', () => {
    postForm.style.backgroundColor = 'yellow';
});
postForm.addEventListener('mouseout', () => {
    postForm.style.backgroundColor = 'white';
});
//# sourceMappingURL=dom.js.map