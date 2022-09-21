import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./pages/app.component"
import "./styles/reset.scss"
import "./styles/index.scss"
import { store } from "./store/store"
import { Provider } from "react-redux"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)