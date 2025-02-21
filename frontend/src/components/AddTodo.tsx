import { useState } from "react"

function AddTodo() {
  const [input,setInput] = useState("")
  function addTodoHandler(e){
    e.preventDefault()

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