const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let todos = JSON.parse(localStorage.getItem(TODOS_KEY));
console.log(todos);
if (todos !== null) {
  todos.forEach(todo => todoList.prepend(getTodoListItem(todo)));
} else {
  todos = [];
}

function saveTodos() {
  console.log(todos);
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function addNewTodo(newTodo) {
  todos.push(newTodo);
  saveTodos();
}

todoForm.addEventListener("submit", event => {
  event.preventDefault();
  const newTodo = { id: Date.now(), text: todoInput.value };
  todoInput.value = "";
  addNewTodo(newTodo);
  todoList.prepend(getTodoListItem(newTodo));
});

function getTodoListItem(newTodo) {
  const listItem = document.createElement("li");
  listItem.id = newTodo.id;
  listItem.appendChild(getDeleteButton());
  listItem.appendChild(getTodoItem(newTodo));
  return listItem;
}

function getTodoItem(newTodo) {
  const todoItem = document.createElement("span");
  todoItem.innerText = newTodo.text;
  return todoItem;
}

function getDeleteButton() {
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "❌";
  deleteButton.addEventListener("click", event => {
    const li = event.target.parentNode;
    li.remove();
    todos = todos.filter(item => item.id !== parseInt(li.id));
    saveTodos();
  });
  return deleteButton;
}
