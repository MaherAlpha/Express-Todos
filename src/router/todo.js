import { Router } from "express";
import todoController from "../controller/todo.js";

const router= new Router();
router.get('/allTodos', todoController.getAll);

export default router;