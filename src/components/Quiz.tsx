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
  {
    question: "Wall Sit Test",
    desc: "Record the number of seconds you held each test below",
    eachSide: true,
    eachSideMessage: "Single Leg Wall Sit",
    bothSidesTogether: true,
    bothSidesTogetherMessage: "Double Leg Wall Sit",
    exerciseGroup: "Knee Strength"
  },
  {
    question: "Side Plank Test",
    eachSide: true,
    numberOfEachSide: 2,
    numberOfEachSideMessage: ["Version 1", "Version 2"],
    exerciseGroup: "Gluteus Medius Strength"
  },
  {
    question: "Calf Raise Test",
    desc: "Record your results below",
    eachSide: true,
    eachSideMessage: "Each Leg",
    bothSidesTogether: true,
    bothSidesTogetherMessage: "Together",
    exerciseGroup: "Calf Strength"
  }
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
  const [kneeExerciseNo, setKneeExerciseNo] = useState<number | null>(null)
  const [gluteExerciseNo, setGluteExerciseNo] = useState<number | null>(null)
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

  const getKneeStrengthExerciseNo = (lowestValue: number) => {
    if (lowestValue >= 0 && lowestValue <= 15) return 1
    if (lowestValue >= 16 && lowestValue <= 30) return 2
    if (lowestValue > 30 && lowestValue <= 60) return 3
    if (lowestValue > 60 && lowestValue <= 90) return 4
    if (lowestValue > 90) return 5
    return null
  }

  const getGluteusMediusStrengthExerciseNo = (lowestValue: number) => {
    if (lowestValue >= 0 && lowestValue <= 15) return 1
    if (lowestValue >= 16 && lowestValue <= 30) return 2
    if (lowestValue > 30 && lowestValue <= 60) return 3
    if (lowestValue > 60 && lowestValue <= 90) return 4
    if (lowestValue > 90) return 5
    return null
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
      const [calfTogether, calfRight, calfLeft] = answers[calfTestIndex]
      setCalfTestFail(calfTogether < 20 || calfRight < 20 || calfLeft < 20 ? "YES" : "NO")
      console.log("Did calf test fail?", calfTogether < 20 || calfRight < 20 || calfLeft < 20 ? "YES" : "NO")
    }
    const kneeTestIndex = questions.findIndex((q) => q.exerciseGroup === "Knee Strength")
    if (kneeTestIndex !== -1) {
      const kneeAnswers = answers[kneeTestIndex]
      const lowestKneeValue = Math.min(...kneeAnswers)
      const kneeExerciseNo = getKneeStrengthExerciseNo(lowestKneeValue)
      setKneeExerciseNo(kneeExerciseNo)
      console.log("Knee Exercise Lowest Value", lowestKneeValue)
      console.log("Knee Exercise No:", kneeExerciseNo)
    }
    const gluteTestIndex = questions.findIndex((q) => q.exerciseGroup === "Gluteus Medius Strength")
    if (gluteTestIndex !== -1) {
      const gluteAnswers = answers[gluteTestIndex]
      const lowestGluteValue = Math.min(...gluteAnswers)
      const gluteExerciseNo = getGluteusMediusStrengthExerciseNo(lowestGluteValue)
      setGluteExerciseNo(gluteExerciseNo)
      console.log("Gluteus Medius Strength Lowest Value", lowestGluteValue)
      console.log("Gluteus Medius Exercise No:", gluteExerciseNo)
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
        <Results
          ankleTestFail={ankleTestFail}
          calfTestFail={calfTestFail}
          clientInfo={clientInfo}
          // kneeExerciseNo={kneeExerciseNo}
        />
      )}
      {editMode && <button onClick={handleCancelEdit}>Cancel</button>}
    </div>
  )
}

export default Quiz
