import React from "react";

export default function Todo({ todo, handleDeleteTodo, handleChangeTodo }) {
  return (
    <li className="border-b border-gray-200 flex items-center justify-between py-4">
      <label className="flex items-center">
        <input
          type="checkbox"
          className="mr-2"
          onChange={(e) => {
            todo.done = e.target.checked;
            handleChangeTodo(todo);
          }}
        />
        <span className={todo.done ? "text-decoration-line: line-through" : ""}>
          {todo.text}
        </span>
      </label>
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleDeleteTodo(todo.id);
          }}
          className="text-red-500 hover:text-red-700
             mr-2 delete-btn"
        >
          Delete
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            const txt =
              e.target.parentElement.parentElement.querySelector(
                "span"
              ).textContent;
            const newText = prompt("Edit the name of the task", txt);

            if (newText != null) {
              todo.text = newText;
              handleChangeTodo(todo);
            }
          }}
          className="text-blue-500
             hover:text-blue-700 edit-btn"
        >
          Edit
        </button>
      </div>
    </li>
  );
}
