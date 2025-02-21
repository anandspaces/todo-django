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
    <div>AddTodo</div>
    <form onSubmit={addTodoHandler} className="flex">
    <input
     type="text"
     className="mt-2"
     placeholder="Enter Todo"
     value={input}
     onChange={(e)=>setInput(e.target.value)}
    />
    <button type='submit' className="mt-2">Submit</button>
    </form>

    </>
  )
}
export default AddTodo