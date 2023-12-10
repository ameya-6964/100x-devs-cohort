document.addEventListener("DOMContentLoaded", () => {
  fetchTodos();

  document
    .getElementById("todoInput")
    .addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        addTodo();
      }
    });
});

function fetchTodos() {
  fetch("/todos")
    .then((response) => response.json())
    .then((todos) => displayTodos(todos))
    .catch((error) => console.error("Error fetching todos:", error));
}

function displayTodos(todos) {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");

    const todoText = document.createElement("span");
    todoText.textContent = `${index + 1}. ${todo}`;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = () => editTodo(index);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteTodo(index);

    li.appendChild(todoText);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    todoList.appendChild(li);
  });
}

function addTodo() {
  const todoInput = document.getElementById("todoInput");
  const newTodo = todoInput.value.trim();

  if (newTodo !== "") {
    fetch("/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo: newTodo }),
    })
      .then((response) => response.json())
      .then(() => {
        todoInput.value = "";
        fetchTodos();
      })
      .catch((error) => console.error("Error adding todo:", error));
  }
}

function editTodo(index) {
  const todos = document.getElementById("todoList").children;
  const todoText = todos[index].getElementsByTagName("span")[0].textContent;
  const updatedTodo = prompt("Edit Todo:", todoText);

  if (updatedTodo !== null) {
    fetch(`/todos/${index}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo: updatedTodo }),
    })
      .then((response) => response.json())
      .then(() => fetchTodos())
      .catch((error) => console.error("Error updating todo:", error));
  }
}

function deleteTodo(index) {
  fetch(`/todos/${index}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then(() => fetchTodos())
    .catch((error) => console.error("Error deleting todo:", error));
}
