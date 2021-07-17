const todoForm = document.querySelector('#todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('#todo-list');

const TODOS_KEY = 'todos';
let todos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function paintTodo(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;
  const span = document.createElement('span');
  span.innerText = newTodo.text;
  const button = document.createElement('button');
  button.innerText = '❌';

  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);

  // deleting event
  button.addEventListener('click', (e) => {
    const li = e.target.parentElement;
    li.remove();

    todos = todos.filter((item) => item.id !== parseInt(li.id));
    saveTodos();
  });
}

// submitting event
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const newTodoObj = {
    text: todoInput.value,
    id: Date.now(),
  };

  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
  todoInput.value = '';
});

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;

  parsedTodos.forEach((element) => {
    paintTodo(element);
  });
}
