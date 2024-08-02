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
    <App
    // ankleTestFail={false}
    // calfTestFail={false}
    // // @ts-expect-error
    // clientInfo={null}
    // kneeExerciseNo={0}
    // gluteMedExerciseNo={0}
    // hamstringExerciseNo={0}
    // gluteMaxExerciseNo={0}
    // balanceExerciseNo={0}
    />
  </React.StrictMode>
)
