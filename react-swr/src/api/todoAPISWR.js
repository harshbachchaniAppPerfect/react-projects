export const addTodoOptions = (newTodo) => {
  return {
    optimisticData: (todos) => {
      console.log([...todos, newTodo].sort((a, b) => b.id - a.id));
      return [...todos, newTodo].sort((a, b) => b.id - a.id);
    },
    rollbackOnError: true,
  };
};

export const updateTodoOptions = ({ id, title }) => {
  return {
    optimisticData: (todos) => {
      const prevTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, title } : todo
      );
      return prevTodos;
    },
    rollbackOnError: true,
    revalidate: false,
    populateCache: (updated, todos) => {
      return todos.map((todo) => (todo.id === updated.id ? updated : todo));
    },
  };
};

export const toggleTodoOptions = ({ id }) => {
  return {
    optimisticData: (todos) => {
      const prevTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      return prevTodos;
    },
    rollbackOnError: true,
    revalidate: false,
    populateCache: (updated, todos) => {
      return todos.map((todo) => (todo.id === updated.id ? updated : todo));
    },
  };
};

export const deleteTodoOptions = ({ id }) => {
  return {
    optimisticData: (todos) => {
      return todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    rollbackOnError: true,
    revalidate: false,
    populateCache: (emptyObj, todos) => {
      const prevTodos = todos.filter((todo) => todo.id !== id);
      return prevTodos;
    },
  };
};
