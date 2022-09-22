import { TodoForm } from "./TodoForm/todoForm.component"
import { TodoList } from "./TodoList/todoList.component"
import styles from "./todo.module.scss"

export const Todo = () => {
  return (
    <main className={styles.todo}>
      <h1 className={styles.todo__title}>To Do App</h1>
      <TodoForm />
      <TodoList />
    </main>
  )
}
