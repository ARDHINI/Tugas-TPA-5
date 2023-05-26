import express from "express";

import {
  getTodos,
  createTodo,
  getTodo,
  deleteTodo,
  updateTodo,
  deleteAllTodo,
} from "../controllers/todos.js";

const router = express.Router();

router.get("/", getTodos);

router.post("/", createTodo);

router.get("/:id", getTodo);

router.delete("/:id", deleteTodo);

router.put("/:id", updateTodo);

router.delete("/", deleteAllTodo);

export default router;
