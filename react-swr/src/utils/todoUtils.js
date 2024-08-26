import {
  apiaddTodo,
  apiupdateTodo,
  apideleteTodo,
  apitoggleTodo,
} from "../api/todoApi.js";

const addTodo = async (title) => {
  try {
    const res = await apiaddTodo(title);
    return res.data[0];
  } catch (error) {
    throw error;
  }
};
const updateTodo = async (id, title) => {
  try {
    const res = await apiupdateTodo({ id, title });
    return res.data[0];
  } catch (error) {
    throw error;
  }
};
const deleteTodo = async (id) => {
  try {
    const res = await apideleteTodo({ id });
    return res.data[0];
  } catch (error) {
    throw error;
  }
};
const toggleComplete = async (id) => {
  try {
    const res = await apitoggleTodo({ id });
    return res.data[0];
  } catch (error) {
    console.log(`Error is ${error}`);
    throw error;
  }
};

export { addTodo, updateTodo, deleteTodo, toggleComplete };
