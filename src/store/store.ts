import { configureStore } from '@reduxjs/toolkit'
import todosSlice from './slices/todos.slice'
import completedTodosSlice from './slices/completedTodos.slice'

export const store = configureStore({
  reducer: {
    todos: todosSlice,
    completedTodos: completedTodosSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch