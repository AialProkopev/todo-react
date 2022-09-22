import { FC } from "react"
import { useAppSelector } from "../../../store/hooks"
import { TodoItem } from "../TodoItem/todoItem.component"
import styles from "./todolist.module.scss"

export const TodoList: FC = () => {
  const { todos } = useAppSelector((state) => state.todos)

  return (
    <section className={styles.todoList}>
      <ul className={styles.todoList__list}>
        {todos.map((item) => (
          <TodoItem todo={item} key={item.id} />
        ))}
      </ul>
    </section>
  )
}
