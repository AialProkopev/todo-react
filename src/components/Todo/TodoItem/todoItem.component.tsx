import {
  ChangeEvent,
  FC,
  FocusEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react"
import { useDispatch } from "react-redux"
import { addCompletedTodo } from "../../../store/actions"
import { changeTodo, removeTodo, Todo } from "../../../store/slices/todos.slice"
import styles from "./todoitem.module.scss"

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

  const handleDeleteTodo = () => {
    dispatch(removeTodo(todo.id))
  }
  const handleChangeEditMode = () => {
    if (inputValue && inputValue.trim()) {
      isEditMode && dispatch(changeTodo(todo.id, inputValue))
      setIsEditMode(!isEditMode)
    } else handleDeleteTodo()
  }
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }
  const handlePressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    e.key === "Enter" && handleChangeEditMode()
  }
  const handleBlurInput = (e: FocusEvent<HTMLInputElement>) => {
    if (e.relatedTarget?.id !== todo.id) {
      handleChangeEditMode()
    }
  }
  const handleClickCheckbox = () => {
    setTimeout(() => {
      dispatch(addCompletedTodo(todo))
      dispatch(removeTodo(todo.id))
    }, 500)
  }

  return (
    <li className={styles.todoItem}>
      <div className={styles.checkbox__wrapper}>
        <input
          type="checkbox"
          className={styles.todoItem__checkbox}
          onClick={handleClickCheckbox}
        />
        <span className={styles.checkbox__tooltip}>
          Do you want to complete the task?
        </span>
      </div>

      {isEditMode ? (
        <input
          className={styles.todoItem__input}
          type="text"
          maxLength={40}
          ref={inputRef}
          value={inputValue}
          onChange={handleChangeInput}
          onKeyDown={handlePressEnter}
          onBlur={handleBlurInput}
        />
      ) : (
        <h2 className={styles.todoItem__title}>{todo.title}</h2>
      )}

      <button
        id={todo.id}
        className={styles.todoItem__edit}
        onClick={handleChangeEditMode}
      >
        {isEditMode ? "Confirm" : "Edit"}
      </button>
      <button className={styles.todoItem__delete} onClick={handleDeleteTodo}>
        Delete
      </button>
    </li>
  )
}
