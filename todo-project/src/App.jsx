import React, { useReducer, useRef, useState } from "react";
import Todo from "./components/Todo.jsx";
import { initialTodos } from "./utils/todos.js";
import todosReducer from "./utils/todosReducer.js";
function App() {
  const [text, setText] = useState("");
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);
  const myId = useRef(3);
  function handleAddTodo(text) {
    dispatch({
      type: "added",
      id: myId.current++,
      text: text,
    });
  }

  function handleChangeTodo(todo) {
    dispatch({
      type: "changed",
      todo: todo,
    });
  }

  function handleDeleteTodo(id) {
    dispatch({
      type: "deleted",
      id: id,
    });
  }
  return (
    <>
      <div className="container mx-auto my-10">
        <h1 className="text-center text-3xl font-semibold mb-4">ToDo List</h1>
        <div className="md:w-1/2 mx-auto">
          <div className="bg-white shadow-md rounded-lg p-6">
            <form>
              <div className="flex mb-4">
                <input
                  type="text"
                  className="w-full px-4 py-2 mr-2 rounded-lg
                             border-gray-300 focus:outline-none
                              focus:border-blue-500"
                  placeholder="Add new Task"
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                  value={text}
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddTodo(text);
                    setText("");
                  }}
                  className="bg-blue-500 hover:bg-blue-700 
                            text-white font-bold py-2 px-4 rounded"
                >
                  Add
                </button>
              </div>
            </form>
            <ul>
              {todos.map((todo) => {
                return (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    handleChangeTodo={handleChangeTodo}
                    handleDeleteTodo={handleDeleteTodo}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
