import React from "react"
import { useDispatch } from "react-redux"
import {
  changeTodo,
  removeTodo,
  Todo,
} from "../../../store/reducers/todos.slice"

interface Props {
  todo: Todo
}
export const TodoItem: React.FC<Props> = ({ todo }) => {
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(removeTodo(todo.id))
  }
  const handleUpdate = () => {
    dispatch(changeTodo(todo.id, "hello from change"))
  }
  return (
    <li>
      <span>{todo.title}</span>
      <button onClick={handleUpdate}>Change</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  )
}
