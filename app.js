const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filteroption = document.querySelector(".filter-todo");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deletecheck);
filteroption.addEventListener("click", filtertodo);

function addTodo(event) {
  event.preventDefault();

  const tododiv = document.createElement("div");
  tododiv.classList.add("todo");

  const newtodo = document.createElement("li");
  newtodo.innerText = todoInput.value;
  newtodo.classList.add("todo-item");
  tododiv.appendChild(newtodo);

  const completeButton = document.createElement("button");
  completeButton.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
  completeButton.classList.add("complete-btn");
  tododiv.appendChild(completeButton);

  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
  trashButton.classList.add("trash-btn");
  tododiv.appendChild(trashButton);

  todoList.appendChild(tododiv);
  todoInput.value = "";
}

function deletecheck(e) {
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.remove();
  }

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
function filtertodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

function savetodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}
