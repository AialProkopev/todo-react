import { FC } from "react"
import { Todo } from "../../../store/slices/todos.slice"
import styles from "./todoHistoryItem.module.scss"
interface Props {
  todo: Todo
}
export const TodoHistoryItem: FC<Props> = ({ todo }) => {
  return <li className={styles.item}>{todo.title}</li>
}
