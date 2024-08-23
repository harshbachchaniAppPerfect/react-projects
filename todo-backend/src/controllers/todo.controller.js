import { asyncHandler } from "../utils/asyncHandler.js";
import { pool } from "../db/config.js";
import { ApiError } from "../utils/apierror.js";
import { ApiResponse } from "../utils/apiresponse.js";
import {
  queryaddTodo,
  queryupdateTodo,
  querydeleteTodo,
  querygetAllTodos,
  querygetTodoById,
  querytoggleTodo,
} from "../queries/todo.query.js";

const getAllTodos = asyncHandler(async (req, res, next) => {
  try {
    const todos = await querygetAllTodos();
    return res
      .status(200)
      .json(new ApiResponse(200, todos, `Todos Fetched Successfully`));
  } catch (error) {
    new ApiError(
      error.statusCode || 500,
      error.message || "Internal Server Error",
      error.error || error
    );
  }
});

const getTodoById = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) return next(new ApiError(400, "TodoId is required"));
    const todo = await querygetTodoById([id]);
    if (todo.length == 0) return next(new ApiError(400, "Todo not found"));
    return res
      .status(200)
      .json(
        new ApiResponse(200, todo, `Todo with Id: ${id} Fetched Successfully`)
      );
  } catch (error) {
    new ApiError(
      error.statusCode || 500,
      error.message || "Internal Server Error",
      error.error || error
    );
  }
});

const addTodo = asyncHandler(async (req, res, next) => {
  try {
    const { title } = req.body;
    const todo = await queryaddTodo([title]);
    return res
      .status(200)
      .json(new ApiResponse(200, todo, "Todo Added Successfully"));
  } catch (error) {
    new ApiError(
      error.statusCode || 500,
      error.message || "Internal Server Error",
      error.error || error
    );
  }
});
const updateTodo = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) return next(new ApiError(400, "TodoId is required"));
    const { title } = req.body;
    if (!title)
      return next(
        new ApiError(400, "Title of Todo is required for updating todo")
      );
    const todo = await querygetTodoById([id]);
    if (todo.length == 0) return next(new ApiError(400, "Todo not exist"));

    const updatedTodo = await queryupdateTodo([title, id]);
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          updatedTodo,
          `Todo with Id: ${id} Updated Successfully`
        )
      );
  } catch (error) {
    new ApiError(
      error.statusCode || 500,
      error.message || "Internal Server Error",
      error.error || error
    );
  }
});

const toggleTodo = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) return next(new ApiError(400, "TodoId is required"));
    const todo = await querygetTodoById([id]);
    if (todo.length == 0) return next(new ApiError(400, "Todo not exist"));

    const completed = !todo[0].completed;
    const updatedTodo = await querytoggleTodo([Boolean(completed), id]);
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          updatedTodo,
          `Todo with Id: ${id} Toggled Successfully`
        )
      );
  } catch (error) {
    new ApiError(
      error.statusCode || 500,
      error.message || "Internal Server Error",
      error.error || error
    );
  }
});

const deleteTodo = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) return next(new ApiError(400, "TodoId is required"));
    const todo = await querygetTodoById([id]);
    if (todo.length == 0) return next(new ApiError(400, "Todo not exist"));
    await querydeleteTodo([id]);
    return res
      .status(200)
      .json(
        new ApiResponse(200, {}, `Todo with Id: ${id} Deleted Successfully`)
      );
  } catch (error) {
    new ApiError(
      error.statusCode || 500,
      error.message || "Internal Server Error",
      error.error || error
    );
  }
});

export {
  getAllTodos,
  addTodo,
  getTodoById,
  deleteTodo,
  updateTodo,
  toggleTodo,
};
