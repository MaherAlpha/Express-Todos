import { Router } from "express";
import todoController from "../controller/todo.js";

const router= new Router();
router.get('/allTodos', todoController.getAll);
router.get('/todos/:id', todoController.getTodoById);
router.post('/todos',todoController.createNewTodo);

export default router;