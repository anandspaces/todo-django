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
    <>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Todo</h2>
      <form onSubmit={addTodoHandler} className="flex items-center space-x-3">
        <input
          type="text"
          className="flex-grow p-3 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter Todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-200"
        >
          Add
        </button>
      </form>
    </>
  );
}

export default AddTodo;
