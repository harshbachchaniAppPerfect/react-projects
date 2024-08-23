import { pool } from "../db/config.js";
import { queryHandler } from "../utils/queryHandler.js";

const createTodoTable = async () => {
  try {
    const res = await pool.query(`
              CREATE TABLE IF NOT EXISTS todos(
                  id SERIAL PRIMARY KEY,
                  title TEXT NOT NULL,
                  completed BOOLEAN NOT NULL default false
              )   
          `);
    console.log("Todos table created successfully");
  } catch (error) {
    console.log("Error creating Todos table: ", error);
  }
};

const querygetAllTodos = async (values) => {
  const query = `SELECT * FROM todos ORDER BY id`;
  return queryHandler(query, values);
};
const queryaddTodo = async (values) => {
  const query = `INSERT INTO todos(title) VALUES($1) RETURNING *`;
  return queryHandler(query, values);
};
const querygetTodoById = async (values) => {
  const query = `SELECT * FROM todos where id=$1`;
  return queryHandler(query, values);
};

const queryupdateTodo = async (values) => {
  const query = `UPDATE todos SET title=$1 WHERE id=$2 RETURNING *`;
  return queryHandler(query, values);
};
const querytoggleTodo = async (values) => {
  const query = `UPDATE todos SET completed=$1 WHERE id=$2 RETURNING *`;
  return queryHandler(query, values);
};
const querydeleteTodo = async (values) => {
  const query = `DELETE FROM todos WHERE id=$1 RETURNING *`;
  return queryHandler(query, values);
};

export {
  createTodoTable,
  queryaddTodo,
  querygetAllTodos,
  querygetTodoById,
  querydeleteTodo,
  queryupdateTodo,
  querytoggleTodo,
};
