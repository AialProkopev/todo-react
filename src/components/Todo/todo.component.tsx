import { TodoForm } from "./TodoForm/todoForm.component"
import { TodoList } from "./TodoList/todoList.component"

export const Todo = () => {
  return (
    <main>
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList />
    </main>
  )
}
