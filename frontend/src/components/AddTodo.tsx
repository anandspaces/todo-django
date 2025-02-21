import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { AppDispatch } from "../app/store";

function AddTodo() {
  const [input, setInput] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  function addTodoHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (input.trim() === "") return;
    dispatch(addTodo(input));
    setInput("");
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-gray-700">Add New Todo</h2>
      <form onSubmit={addTodoHandler} className="flex items-center space-x-2">
        <input
          type="text"
          className="flex-grow p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter Todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
