const addButton = document.getElementById('add-button') as HTMLButtonElement;

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  const todoForm = document.querySelector('form') as HTMLFormElement;
  const todoInputValue = (
    document.getElementById('todo-input') as HTMLInputElement
  ).value;

  const todoItem = document.createElement('li');
  todoItem.classList.add('todo-item');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const span = document.createElement('span');
  span.textContent = todoInputValue;

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button');
  deleteButton.textContent = '削除';

  todoItem.appendChild(checkbox);
  todoItem.appendChild(span);
  todoItem.appendChild(deleteButton);

  const todoList = document.getElementById('todo-list') as HTMLUListElement;
  todoList.appendChild(todoItem);

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      span.style.textDecoration = 'line-through';
    } else {
      span.style.textDecoration = '';
    }
  });

  deleteButton.addEventListener('click', () => {
    todoItem.remove();
  });

  todoForm.reset();
});
