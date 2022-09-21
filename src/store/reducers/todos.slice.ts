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
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter(item => item.id !== action.payload)
        },
        changeTodo: {
            reducer: (state, action: PayloadAction<{id: string, title: string}>) => {
                const { id, title } = action.payload
                state.todos = state.todos.map(item=>{
                    if (item.id === id) {
                        return {
                            ...item,
                            title: title
                        }
                    }
                    return item
                })
            },
            prepare(id: string, title: string) {
                return {
                    payload: {
                        id, title
                    }
                }
            }
        }
    }
})

export const {
    addTodo,
    removeTodo,
    changeTodo
} = todosSlice.actions;

export const todosReducer = todosSlice.reducer;