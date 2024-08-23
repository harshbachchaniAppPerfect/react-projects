import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todos: [],
  mutateaddTodo: (todo) => {},
  mutateupdateTodo: (id, todo) => {},
  mutatedeleteTodo: (id) => {},
  mutatetoggleComplete: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};
