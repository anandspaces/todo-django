import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: string;
  text: string;
}

export interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [{id: nanoid(),text: "Hello World"}]
}


export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state,action: PayloadAction<string>) => {
      const todo: Todo = {
        id: nanoid(),
        text: action.payload
      }
      state.todos.push(todo)
    },
    removeTodo: (state,action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
  }
})

export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer