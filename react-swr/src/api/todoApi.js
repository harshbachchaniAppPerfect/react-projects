import axios from "axios";

const delay = () => new Promise((res) => setTimeout(() => res(), 800));
const todoApi = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const todoUrlEndPoint = "/todo";

export const apigetAllTodos = async () => {
  try {
    const response = await todoApi.get(todoUrlEndPoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const apigetTodoById = async ({ id }) => {
  try {
    const response = await todoApi.get(`${todoUrlEndPoint}/${id}`, { title });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const apiaddTodo = async ({ title }) => {
  try {
    await delay();

    const response = await todoApi.post(todoUrlEndPoint, { title });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const apiupdateTodo = async ({ id, title }) => {
  try {
    const response = await todoApi.put(`${todoUrlEndPoint}/${id}`, { title });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const apideleteTodo = async ({ id }) => {
  try {
    const response = await todoApi.delete(`${todoUrlEndPoint}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const apitoggleTodo = async ({ id }) => {
  try {
    const response = await todoApi.patch(`${todoUrlEndPoint}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
