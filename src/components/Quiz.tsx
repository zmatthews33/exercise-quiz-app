/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react"
import Question from "./Question"
import Results from "./Results"
import ClientForm from "./ClientForm"

// import exercisePaths from "../data/exercisePaths"

export interface ClientInfo {
  name: string
  email: string
  workoutsPerWeek: number
}
interface QuestionData {
  question: string
  desc?: string
  eachSide?: boolean
  eachSideMessage?: string
  bothSidesTogether?: boolean
  bothSidesTogetherMessage?: string
  numberOfEachSide?: number
  numberOfEachSideMessage?: string[]
  exerciseGroup?: string
}

const questions: QuestionData[] = [
  {
    question: "Dorsiflexion Mobility Test",
    desc: "Record your distance from the wall below",
    eachSide: true,
    exerciseGroup: "Ankle Mobility"
  },
  { question: "Calf Raise Test", desc: "Record your results below", eachSide: true, exerciseGroup: "Calf Strength" }
]

const initializeAnswers = (questions: QuestionData[]) => {
  return questions.map((q) => {
    if (q.eachSide && q.numberOfEachSide) {
      return Array(q.numberOfEachSide * 2 + 1).fill(null)
    } else if (q.eachSide) {
      return [null, null, null]
    } else {
      return [null]
    }
  })
}

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[][]>(initializeAnswers(questions))
  const [showResults, setShowResults] = useState(false)
  const [ankleTestFail, setAnkleTestFail] = useState("NO")
  const [calfTestFail, setCalfTestFail] = useState("NO")
  const [clientInfo, setClientInfo] = useState<ClientInfo | null>(null) // State for client information
  const [editMode, setEditMode] = useState(false) // State for edit mode

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = parseInt(e.target.value, 10) // Parse input value to number
    if (!isNaN(value)) {
      const newAnswers = [...answers]
      newAnswers[currentQuestion][index] = value
      setAnswers(newAnswers)
    }
  }

  const handleNextClick = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calculate results
      calculateResults()
      setShowResults(true)
    }
  }

  const calculateResults = () => {
    // Check ankle mobility test
    const ankleTestIndex = questions.findIndex((q) => q.exerciseGroup === "Ankle Mobility")

    if (ankleTestIndex !== -1) {
      const [_, ankleRight, ankleLeft] = answers[ankleTestIndex]
      setAnkleTestFail(ankleRight < 1 || ankleLeft < 1 ? "YES" : "NO")
      console.log("Did ankle test fail?", ankleRight < 1 || ankleLeft < 1 ? "YES" : "NO")
    }
    const calfTestIndex = questions.findIndex((q) => q.exerciseGroup === "Calf Strength")

    if (calfTestIndex !== -1) {
      const [_, calfRight, calfLeft] = answers[calfTestIndex]
      setCalfTestFail(calfRight < 20 || calfLeft < 20 ? "YES" : "NO")
      console.log("Did calf test fail?", calfRight < 20 || calfLeft < 20 ? "YES" : "NO")
    }
  }
  const handleClientInfoSubmit = (info: ClientInfo) => {
    setClientInfo(info)
    setEditMode(false) // Exit edit mode after submitting
  }

  const handleEditClick = () => {
    setEditMode(true) // Enter edit mode
  }

  const handleCancelEdit = () => {
    setEditMode(false) // Cancel editing and revert changes
  }
  return (
    <div>
      {!clientInfo || editMode ? (
        <ClientForm initialInfo={clientInfo} onSubmit={handleClientInfoSubmit} />
      ) : !showResults ? (
        <>
          <h2>Client Information:</h2>
          <p>Name: {clientInfo.name}</p>
          <p>Email: {clientInfo.email}</p>
          <p>Workouts per Week: {clientInfo.workoutsPerWeek}</p>

          <button onClick={handleEditClick}>Edit</button>

          <Question
            question={questions[currentQuestion].question}
            desc={questions[currentQuestion].desc}
            eachSide={questions[currentQuestion].eachSide}
            eachSideMessage={questions[currentQuestion].eachSideMessage}
            bothSidesTogether={questions[currentQuestion].bothSidesTogether}
            bothSidesTogetherMessage={questions[currentQuestion].bothSidesTogetherMessage}
            numberOfEachSide={questions[currentQuestion].numberOfEachSide}
            numberOfEachSideMessage={questions[currentQuestion].numberOfEachSideMessage}
            exerciseGroup={questions[currentQuestion].exerciseGroup}
            answer={answers[currentQuestion]}
            onAnswerChange={handleAnswerChange}
          />
          <button onClick={handleNextClick}>{currentQuestion < questions.length - 1 ? "Next" : "Finish"}</button>
        </>
      ) : (
        <Results ankleTestFail={ankleTestFail} calfTestFail={calfTestFail} clientInfo={clientInfo} />
      )}
      {editMode && <button onClick={handleCancelEdit}>Cancel</button>}
    </div>
  )
}

export default Quiz
