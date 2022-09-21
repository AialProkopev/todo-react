import {
  ChangeEvent,
  FC,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react"
import { useDispatch } from "react-redux"
import {
  changeTodo,
  removeTodo,
  Todo,
} from "../../../store/reducers/todos.slice"

interface Props {
  todo: Todo
}
export const TodoItem: FC<Props> = ({ todo }) => {
  const [inputValue, setInputValue] = useState(todo.title)
  const [isEditMode, setIsEditMode] = useState(false)
  const dispatch = useDispatch()
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    isEditMode && inputRef.current && inputRef.current.focus()
  }, [isEditMode])

  const handleDelete = () => {
    dispatch(removeTodo(todo.id))
  }
  const handleChangeEditMode = () => {
    isEditMode && dispatch(changeTodo(todo.id, inputValue))
    setIsEditMode(!isEditMode)
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }
  const handlePressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    e.key === "Enter" && handleChangeEditMode()
  }

  return (
    <li>
      {isEditMode ? (
        <input
          type="text"
          ref={inputRef}
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handlePressEnter}
        />
      ) : (
        <h2>{todo.title}</h2>
      )}

      <button onClick={handleChangeEditMode}>Change</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  )
}
