const express = require("express");
const router = express.Router();

let todos = [];

// Get all todos
router.get("/", (req, res) => {
  res.json(todos);
});

// Create a new todo
router.post("/", (req, res) => {
  const newTodo = req.body.todo;
  todos.push(newTodo);
  res.json(newTodo);
});

// Update a todo
router.put("/:id", (req, res) => {
  const todoId = req.params.id;
  const updatedTodo = req.body.todo;
  todos[todoId] = updatedTodo;
  res.json(updatedTodo);
});

// Delete a todo
router.delete("/:id", (req, res) => {
  const todoId = req.params.id;
  const deletedTodo = todos[todoId];

  if (deletedTodo !== undefined) {
    todos = todos.filter((todo, index) => index != todoId);
    res.json(deletedTodo);
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
});

module.exports = router;
