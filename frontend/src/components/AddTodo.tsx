import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input,setInput] = useState("");
  const dispatch = useDispatch();
  function addTodoHandler(e:any){
    e.preventDefault();
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