"use strict";
const printBooks = (books) => {
    books.forEach(({ bookTitle, authorName }) => {
        console.log(`${bookTitle}:${authorName}`);
    });
};
printBooks([
    { bookTitle: '『JavaScript入門』', authorName: '山田太郎' },
    { bookTitle: '『JavaScriptの絵本』', authorName: '山田次郎' },
]);
const users = [
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
];
const checkPermission = (username, permission) => {
    const user = users.find(({ username: findedUsername }) => findedUsername === username);
    if (!user)
        throw new Error();
    return user.permissions[permission];
};
console.log(checkPermission('山田', 'canWrite'));
//# sourceMappingURL=main.js.map