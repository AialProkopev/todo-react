import { TodoForm } from "./TodoForm/todoForm.component"
import { TodoList } from "./TodoList/todoList.component"
import styles from "./todo.module.scss"

export const Todo = () => {
  return (
    <article className={styles.todo}>
      <h2 className={styles.todo__title}>form</h2>
      <TodoForm />
      <TodoList />
    </article>
  )
}
