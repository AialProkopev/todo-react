import React from "react"
import { useAppSelector } from "../../store/hooks"
import styles from "./todoHistory.module.scss"
import { TodoHistoryItem } from "./TodoHistoryItem/todoHistoryItem.component"

export const TodoHistory = () => {
  const { completedTodos } = useAppSelector((state) => state.completedTodos)

  return (
    <article className={styles.todoHistory}>
      <h2 className={styles.todoHistory__title}>recent completed:</h2>

      {completedTodos.length ? (
        <ul className={styles.todoHistory__list}>
          {completedTodos.map(
            (item, index) =>
              index < 5 && <TodoHistoryItem todo={item} key={item.id} />
          )}
        </ul>
      ) : (
        <p>empty</p>
      )}
    </article>
  )
}
