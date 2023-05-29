import express from "express";

import { 
  CreateTodos, 
  DeleteTodoAll, 
  DeleteTodobyId, 
  GetTodo, 
  GetTodobyid, 
  updateTodobyid 
} from "../controllers/todos.js";

const router = express.Router();

router.get("/todo", GetTodo);

router.post("/todo", CreateTodos);

router.get("/todo/:id", GetTodobyid);

router.delete("/todo/:id", DeleteTodobyId);

router.put("/todo/:id", updateTodobyid);

router.delete("/todo", DeleteTodoAll);

export default router;
