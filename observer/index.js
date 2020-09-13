import TodoListObserver from "./TodoList.js";

const todoInput = document.getElementById("task-input");
const addTodoBtn = document.getElementById("add-task");
const todoList = document.getElementById("todo-list");
const todoListItemReference = document
  .getElementById("task-list-item")
  .cloneNode(true);

// Subscriber fns
function addToTodoList(todoValue) {
  const taskEl = todoListItemReference.cloneNode(true);
  const taskText = document.createElement("span");
  taskText.textContent = todoValue;
  taskEl.childNodes[1].childNodes[1].appendChild(taskText);
  taskEl.className = "";

  // Add to dom
  todoList.appendChild(taskEl);
}

function resetInputField() {
  todoInput.value = "";
}

function bindCheckboxEvents() {
  const checkTaskBtns = document.getElementsByClassName("check-task");

  Array.from(checkTaskBtns).forEach((taskBtn) => {
    taskBtn.onclick = onCheckItem;
  });
}

TodoListObserver.subscribe(addToTodoList);
TodoListObserver.subscribe(resetInputField);
TodoListObserver.subscribe(bindCheckboxEvents);

// Event handling
function onAddItem() {
  const todoValue = todoInput.value;

  if (todoValue.length === 0) return;

  TodoListObserver.notify(todoValue);
}
addTodoBtn.onclick = onAddItem;

function onCheckItem(ev) {
  ev.target.parentNode.parentNode.parentNode.remove();
}
