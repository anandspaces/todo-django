import { useDispatch, useSelector } from "react-redux"
import { removeTodo } from "../features/todo/todoSlice"

function Todos() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  return (
    <>
    <div>Todos</div>
    {todos.map((tools)=>(
      <li key={todo.id}>
        {todos.text}
        <button
          onClick={()=> dispatch(removeTodo(todos.id))}
        >X</button>
      </li>
    ))}
    
    </>
  )
}
export default Todos