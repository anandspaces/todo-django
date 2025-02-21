import { useDispatch, useSelector } from "react-redux";
import { removeTodo, Todo } from "../features/todo/todoSlice";
import { AppDispatch, RootState } from "../app/store";

function Todos() {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4 text-gray-700">Todo List</h2>
      <ul className="space-y-3">
        {todos.length > 0 ? (
          todos.map((todo: Todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-lg"
            >
              <span className="text-gray-800">{todo.text}</span>
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
        )}
      </ul>
    </div>
  );
}

export default Todos;
