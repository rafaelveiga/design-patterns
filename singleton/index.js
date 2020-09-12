import TodoList from "./TodoList.js";

const referenceItemEl = document
  .getElementById("task-list-item")
  .cloneNode(true);

function refreshTodos() {
  const taskList = TodoList.getAll();
  const todoListEl = document.getElementById("todo-list");

  todoListEl.textContent = "";

  taskList.map((task) => {
    // Create Element
    const taskEl = referenceItemEl.cloneNode(true);
    const taskText = document.createElement("span");
    taskText.textContent = task.text;
    taskEl.childNodes[1].childNodes[1].appendChild(taskText);
    taskEl.className = "";

    // Add task id attr
    const taskIdAttr = document.createAttribute("data-task-id");
    taskIdAttr.value = task.id;

    taskEl.childNodes[1].childNodes[1].childNodes[1].setAttributeNode(
      taskIdAttr
    );

    // Add to dom
    todoListEl.appendChild(taskEl);
  });
}

function bindEvents() {
  const addTaskBtn = document.getElementById("add-task");
  const checkTaskBtns = document.getElementsByClassName("check-task");

  addTaskBtn.onclick = onAddItem;

  Array.from(checkTaskBtns).forEach((taskBtn) => {
    taskBtn.onclick = onCheckItem;
  });
}

function onAddItem() {
  const taskInputEl = document.getElementById("task-input");
  const taskValue = taskInputEl.value;

  if (taskValue.length === 0) return;

  TodoList.add(taskValue);

  refreshTodos();
  bindEvents();
}

function onCheckItem(ev) {
  const taskId = ev.target.getAttribute("data-task-id");

  console.log(ev.target.getAttribute("data-task-id"));

  TodoList.remove(taskId);

  refreshTodos();
  bindEvents();
}

TodoList.add("eaee");

refreshTodos();
bindEvents();
