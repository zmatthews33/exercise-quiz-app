// src/App.tsx
import React, { useState } from "react"
import Quiz from "./components/Quiz"
import Results from "./components/Results"

const App: React.FC = (props) => {
  const { ankleTestFail, calfTestFail, clientInfo, exercisePlan } = props
  const [quizComplete, setQuizComplete] = useState(false)
  const [score, setScore] = useState(0)

  const handleQuizComplete = (finalScore: number) => {
    setScore(finalScore)
    setQuizComplete(true)
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Fitness Quiz</h1>
      </header>
      {quizComplete ? (
        <Results
          ankleTestFail={ankleTestFail}
          calfTestFail={calfTestFail}
          clientInfo={clientInfo}
          exercisePlan={exercisePlan}
        />
      ) : (
        <Quiz onQuizComplete={handleQuizComplete} />
      )}
    </div>
  )
}

export default App
