/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { CssBaseline } from "@mui/material"

// styles
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline />
    {/* @ts-expect-error */}
    <App />
  </React.StrictMode>
)
