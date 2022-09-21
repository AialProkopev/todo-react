import React from "react"
import { Todo } from "../../../store/reducers/todos.slice"

interface Props {
  todo: Todo
}
export const TodoItem: React.FC<Props> = ({ todo }) => {
  return (
    <li>
      <span>{todo.title}</span>
      <button>Change</button>
      <button>Delete</button>
    </li>
  )
}
