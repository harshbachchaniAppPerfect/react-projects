import { Router } from "express";
import {
  addTodo,
  updateTodo,
  getAllTodos,
  getTodoById,
  deleteTodo,
  toggleTodo,
} from "../controllers/todo.controller.js";
const router = Router();

router.route("/").get(getAllTodos).post(addTodo);
router
  .route("/:id")
  .get(getTodoById)
  .put(updateTodo)
  .delete(deleteTodo)
  .patch(toggleTodo);

export default router;
