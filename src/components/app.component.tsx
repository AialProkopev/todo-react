import React from "react"
import { Todo } from "./Todo/todo.component"
import { TodoHistory } from "./TodoHistory/todoHistory.component"

export const App = () => {
  return (
    <main className="main">
      <h1>to do app</h1>
      <Todo />
      <TodoHistory />
    </main>
  )
}
