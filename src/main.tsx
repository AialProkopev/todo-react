import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./components/app.component"
import { store } from "./store/store"
import { Provider } from "react-redux"
import "./styles/reset.scss"
import "./styles/index.scss"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
