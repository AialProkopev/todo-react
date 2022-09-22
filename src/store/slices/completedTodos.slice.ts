import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "./todos.slice";

interface CompletedTodos {
  completedTodos: Array<Todo>
}
const initialState: CompletedTodos = {
  completedTodos: []
}

const completedTodosSlice = createSlice({
  name: 'completedTodos',
  initialState,
  reducers: {
    addCompletedTodo: (state, action: PayloadAction<Todo>) => {
      state.completedTodos = [action.payload, ...state.completedTodos]
    }
  }
})
export const {
  addCompletedTodo
} = completedTodosSlice.actions

export default completedTodosSlice.reducer