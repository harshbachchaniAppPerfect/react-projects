import useSWR from "swr";
import { TodoProvider } from "./contexts/index.js";
import { TodoItem, TodoForm } from "./components/index.js";
import toast, { Toaster } from "react-hot-toast";
import { apigetAllTodos, todoUrlEndPoint as cacheKey } from "./api/todoApi.js";
import {
  addTodo,
  updateTodo,
  deleteTodo,
  toggleComplete,
} from "./utils/todoUtils.js";
import {
  addTodoOptions,
  updateTodoOptions,
  deleteTodoOptions,
  toggleTodoOptions,
} from "./api/todoAPISWR.js";

function App() {
  const getAllItems = async () => {
    try {
      const res = await apigetAllTodos();
      return res.data;
    } catch (error) {
      console.log(`Error is ${error}`);
      toast.error("Failed to Fetched items.", {
        duration: 1000,
      });
      throw error;
    }
  };
  const {
    isLoading,
    error,
    data: todos,
    mutate,
  } = useSWR(cacheKey, getAllItems, {
    onSuccess: (data) => data.sort((a, b) => b.id - a.id),
  });

  const mutateaddTodo = async (title) => {
    try {
      await mutate(
        addTodo(title),
        addTodoOptions({ id: 200, title, completed: false })
      );
      toast.success("Success! Added new item.", {
        duration: 1000,
        icon: "🎉",
      });
    } catch (error) {
      console.log(`Error is ${error}`);
      toast.error("Failed to add the new item.", {
        duration: 1000,
      });
    }
  };
  const mutateupdateTodo = async (id, title) => {
    try {
      await mutate(updateTodo(id, title), updateTodoOptions({ id, title }));
      toast.success("Success! Updated Item Successfully.", {
        duration: 1000,
        icon: "🎉",
      });
    } catch (error) {
      console.log(`Error is ${error}`);
      toast.error("Failed to update the item.", {
        duration: 1000,
      });
    }
  };
  const mutatedeleteTodo = async (id) => {
    try {
      await mutate(deleteTodo(id), deleteTodoOptions({ id }));
      toast.success("Success! Item deleted Successfully.", {
        duration: 1000,
        icon: "🎉",
      });
    } catch (error) {
      console.log(`Error is ${error}`);
      toast.error("Failed to delete the item.", {
        duration: 1000,
      });
    }
  };
  const mutatetoggleComplete = async (id) => {
    try {
      await mutate(toggleComplete(id), toggleTodoOptions({ id }));
      toast.success("Success! Item toggled Successfully.", {
        duration: 1000,
        icon: "🎉",
      });
    } catch (error) {
      console.log(`Error is ${error}`);
      toast.error("Failed to toggle item.", {
        duration: 1000,
      });
    }
  };

  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <TodoProvider
      value={{
        todos,
        mutateaddTodo,
        mutateupdateTodo,
        mutatedeleteTodo,
        mutatetoggleComplete,
      }}
    >
      <Toaster toastOptions={{ position: "top-center" }} />
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos In My Web
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              todos.map((todo) =>
                todo ? (
                  <div key={todo.id} className="w-full">
                    <TodoItem todo={todo} />
                  </div>
                ) : (
                  todos.pop()
                )
              )
            )}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
