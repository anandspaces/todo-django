import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { AppDispatch } from "../app/store";

function AddTodo() {
  const [input,setInput] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  function addTodoHandler(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    if (input.trim() === "") return;
    dispatch(addTodo(input))
    setInput('')
  }

  return (
    <>
    <form onSubmit={addTodoHandler} className="flex">
    <div>AddTodo</div>
    <input
     type="text"
     className="mt-2"
     placeholder="Enter Todo"
     value={input}
     onChange={(e)=>setInput(e.target.value)}
    />
    </form>

    </>
  )
}
export default AddTodo