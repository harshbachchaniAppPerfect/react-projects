import React, { useState } from "react";
import { useTodo } from "../contexts/index.js";

function TodoForm({ name }) {
  const [todo, setTodo] = useState("");
  const { mutateaddTodo } = useTodo();
  const [text, setText] = useState("");
  const add = (e) => {
    e.preventDefault();
    if (!todo) return;

    mutateaddTodo(todo);
    setTodo("");
  };
  return (
    <form className="flex" onSubmit={add}>
      <h1 className="text-blue-400 text-3xl">{text}</h1>
      <h1 className="text-blue-400 text-3xl">{name}</h1>
      <label htmlFor="AddTodo">Add Todo</label>
      <input
        id="AddTodo"
        type="text"
        placeholder="Write Todo..."
        value={todo}
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
      <button
        type=""
        onClick={(e) => {
          setText("Hello Harsh");
        }}
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Edit
      </button>
    </form>
  );
}

export default TodoForm;
