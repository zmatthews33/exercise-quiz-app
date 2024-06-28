import React, { useState } from "react"
import Question from "./Question"
import ClientForm from "./ClientForm"
import Results from "./Results"

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
    bothSidesTogether: true,
    exerciseGroup: "Ankle Mobility"
  },
  {
    question: "Wall Sit Test",
    desc: "Record the number of seconds you held each test below",
    eachSide: true,
    eachSideMessage: "Single Leg Wall Sit",
    bothSidesTogether: true,
    bothSidesTogetherMessage: "Double Leg Wall Sit"
  },
  {
    question: "Side Plank Test",
    eachSide: true,
    numberOfEachSide: 2,
    numberOfEachSideMessage: ["Version 1", "Version 2"]
  },
  { question: "Knee Strength Stretch", desc: "Record reps below", eachSide: true },
  { question: "Single Leg Bridge Test", desc: "Record reps below", eachSide: true },
  { question: "Hamstring Bridge Test", desc: "Record reps below", eachSide: true },
  {
    question: "Balance Test",
    desc: "Record your results below",
    eachSide: true,
    numberOfEachSide: 2,
    numberOfEachSideMessage: ["Eyes Open", "Eyes Closed"]
  },
  { question: "Calf Raise Test", desc: "Record your results below", eachSide: true, exerciseGroup: "Calf Strength" }
]

const initializeAnswers = (questions: QuestionData[]) => {
  return questions.map((q) => {
    if (q.eachSide && q.numberOfEachSide) {
      return Array(q.numberOfEachSide * 2 + 1).fill(0) // Initialize with 0 for number inputs
    } else if (q.eachSide) {
      return [0, 0, 0]
    } else {
      return [0]
    }
  })
}

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[][]>(initializeAnswers(questions))
  const [showResults, setShowResults] = useState(false)
  const [ankleTestFail, setAnkleTestFail] = useState("NO")
  const [calfTestFail, setCalfTestFail] = useState("NO")
  const [clientInfo, setClientInfo] = useState({ name: "", email: "", workoutPerWeekNumber: 2 })
  const [editClientInfo, setEditClientInfo] = useState(false)

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

  const handleClientFormSubmit = (name: string, email: string, workoutPerWeekNumber: number) => {
    setClientInfo({ name, email, workoutPerWeekNumber })
    setEditClientInfo(false)
    setCurrentQuestion(1) // Move to the first question after the form
  }

  const calculateResults = () => {
    // Check ankle mobility test
    const ankleTestIndex = questions.findIndex((q) => q.exerciseGroup === "Ankle Mobility")
    if (ankleTestIndex !== -1) {
      const ankleResult = Math.max(...answers[ankleTestIndex])
      setAnkleTestFail(ankleResult < 20 ? "YES" : "NO")
    }

    // Check calf strength test
    const calfTestIndex = questions.findIndex((q) => q.exerciseGroup === "Calf Strength")
    if (calfTestIndex !== -1) {
      const calfResult = Math.max(...answers[calfTestIndex])
      setCalfTestFail(calfResult < 1 ? "YES" : "NO")
    }
  }

  return (
    <div>
      {currentQuestion === 0 || editClientInfo ? (
        <ClientForm onSubmit={handleClientFormSubmit} initialData={clientInfo} />
      ) : !showResults ? (
        <>
          <div>
            <h2>Client Information</h2>
            <p>Name: {clientInfo.name}</p>
            <p>Email: {clientInfo.email}</p>
            <p>Number of Workouts per Week: {clientInfo.workoutPerWeekNumber}</p>
            <button onClick={() => setEditClientInfo(true)}>Edit</button>
          </div>
          <Question
            question={questions[currentQuestion - 1].question}
            desc={questions[currentQuestion - 1].desc}
            eachSide={questions[currentQuestion - 1].eachSide}
            eachSideMessage={questions[currentQuestion - 1].eachSideMessage}
            bothSidesTogether={questions[currentQuestion - 1].bothSidesTogether}
            bothSidesTogetherMessage={questions[currentQuestion - 1].bothSidesTogetherMessage}
            numberOfEachSide={questions[currentQuestion - 1].numberOfEachSide}
            numberOfEachSideMessage={questions[currentQuestion - 1].numberOfEachSideMessage}
            exerciseGroup={questions[currentQuestion - 1].exerciseGroup}
            answer={answers[currentQuestion - 1]}
            onAnswerChange={handleAnswerChange}
          />
          <button onClick={handleNextClick}>{currentQuestion < questions.length ? "Next" : "Finish"}</button>
        </>
      ) : (
        <Results ankleTestFail={ankleTestFail} calfTestFail={calfTestFail} />
      )}
    </div>
  )
}

export default Quiz
