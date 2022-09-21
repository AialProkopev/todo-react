import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface Todo {
  id: string,
  title: string,
}
interface Todos {
  todos : Array<Todo>
}

const initialState:Todos = {
    todos : []
}
type GenerateId = () => string

const generateId: GenerateId = () => Math.random().toString(16).slice(2) + new Date().getTime().toString(36)

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.todos = [{
                id: generateId(),
                title: action.payload
            }, ...state.todos]
        },
        
    }
})

export const {
    addTodo,
} = todosSlice.actions;

export const todosReducer = todosSlice.reducer;