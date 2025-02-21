import { useDispatch, useSelector } from "react-redux"
import { removeTodo, Todo } from "../features/todo/todoSlice"
import { AppDispatch, RootState } from "../app/store"

function Todos() {
  const todos = useSelector((state: RootState) => state.todos.todos)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <>
    <div>Todos</div>
    {todos.map((todo: Todo)=>(
      <li key={todo.id}>
        {todo.text}
        <button
          onClick={() => dispatch(removeTodo(todo.id))}
        >X</button>
      </li>
    ))}
    
    </>
  )
}
export default Todos