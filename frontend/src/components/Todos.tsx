import { useDispatch, useSelector } from "react-redux";
import { removeTodo, Todo } from "../features/todo/todoSlice";
import { AppDispatch, RootState } from "../app/store";
import { useEffect, useState } from "react";
import axios from "axios";

function Todos() {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch<AppDispatch>();
  const [newtodos, setNewtodos] = useState<Todo[]>([]);
  const [backend, setBackend] = useState(true)

  // Fetch Todos from Django API
  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/todos/");
      setNewtodos(response.data);
      setBackend(true); // Backend is available
    } catch (error) {
      console.error("Backend not available:", error);
      setNewtodos(todos); // Fallback to redux state
      setBackend(false);
    }
  };

  // Delete Todo
  const removeTodoHandler = async (id: number) => {
    if(backend) {
      try {
        await axios.delete(`http://127.0.0.1:8000/todos/${id}/`);
        fetchTodos(); // Refresh todos after deleting
      } catch (error) {
        console.error("Failed to delete from backend:", error);
      }
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [])

  return (
    <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 mt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Todos</h2>
      <ul
        className="space-y-3 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
      >
        {backend ? (newtodos.length > 0 ? (
          newtodos.map((todo: Todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <span className="text-gray-700">{todo.text}</span>
              <button
                onClick={() => removeTodoHandler(Number(todo.id))}
                className="text-red-500 hover:text-red-700 transition-all duration-200"
              >
                &#10005;
              </button>
            </li>
          ))
        ) : (
          <li className="text-gray-500">No todos yet. Add one above!</li>
        ))
      :
        (todos.length > 0 ? (
          todos.map((todo: Todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <span className="text-gray-700">{todo.text}</span>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-red-500 hover:text-red-700 transition-all duration-200"
              >
                &#10005;
              </button>
            </li>
          ))
        ) : (
          <li className="text-gray-500">No todos yet. Add one above!</li>
        ))
      }
      </ul>
    </div>
  );
}

export default Todos;
