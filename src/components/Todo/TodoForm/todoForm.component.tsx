import React, { useState } from "react"
import styles from "./styles.module.scss"
import { useAppDispatch } from "../../../store/hooks"
import { addTodo } from "../../../store/actions"

interface Props {}
export const TodoForm: React.FC<Props> = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const dispatch = useAppDispatch()

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value)

  const handleAddTodo = () => {
    dispatch(addTodo(inputValue))
    setInputValue("")
  }

  return (
    <section className={styles.todoForm}>
      <input
        className={styles.todoForm__input}
        type="text"
        value={inputValue}
        onChange={handleChangeInput}
      />
      <button
        className={styles.todoForm__add}
        disabled={inputValue ? false : true}
        onClick={handleAddTodo}
      >
        Add
      </button>
    </section>
  )
}
