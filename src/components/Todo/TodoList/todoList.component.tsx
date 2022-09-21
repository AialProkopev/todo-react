import React from "react"
import { useAppSelector } from "../../../store/hooks"
import { TodoItem } from "../TodoItem/todoItem.component"

interface Props {}
export const TodoList: React.FC<Props> = () => {
  const todos = useAppSelector((state) => state.todosReducer.todos)
  console.log(todos)

  return (
    <section>
      <ul>
        {todos.map((item) => (
          <TodoItem todo={item} key={item.id} />
        ))}
      </ul>
    </section>
  )
}
