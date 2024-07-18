/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react"

// components
import Question from "./Question"
import Results from "./Results"
import ClientForm from "./ClientForm"
import { Container } from "react-bootstrap"

// types
import { masterExerciseList } from "../data/exerciseList"
import { exercisePaths } from "../data/exercisePaths"

export interface ClientInfo {
  name: string
  email: string
  workoutsPerWeek: number
}

export type Exercise = {
  Month: number
  ExerciseNo: number
  Exercise: string
  Sets: string
  Reps: string
  Hold: string
  Rest: string
  Link: string
  Notes: string
  isAddOn: string
  Category: string
}

type ExerciseCategory = {
  [key: string]: Exercise[]
}

interface ExercisePath {
  Path: number
  AnkleTestFail: boolean
  CalfTestFail: boolean
  WorkoutPerWeekNumber: number
  Workout1: string
  Workout2?: string
  Workout3?: string
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
  { question: "Hamstring Bridge Test", desc: "Record reps below", eachSide: true, exerciseGroup: "Hamstring Strength" },
  {
    question: "Single Leg Bridge Test",
    desc: "Record reps below",
    eachSide: true,
    exerciseGroup: "Gluteus Maximus Strength"
  },
  {
    question: "Balance Test",
    desc: "Record your results below",
    eachSide: true,
    numberOfEachSide: 2,
    numberOfEachSideMessage: ["Eyes Open", "Eyes Closed"],
    exerciseGroup: "Balance"
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
      return Array(q.numberOfEachSide * 2 + 1).fill(null) // Initialize with null
    } else if (q.eachSide) {
      return [null, null, null] // Initialize with null
    } else {
      return [null] // Initialize with null
    }
  })
}

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[][]>(initializeAnswers(questions))
  const [showResults, setShowResults] = useState(false)
  const [ankleTestFail, setAnkleTestFail] = useState(false)
  const [calfTestFail, setCalfTestFail] = useState(false)
  const [kneeExerciseNo, setKneeExerciseNo] = useState<number | null>(null)
  const [gluteMedExerciseNo, setGluteMedExerciseNo] = useState<number | null>(null)
  const [hamstringExerciseNo, setHamstringExerciseNo] = useState<number | null>(null)
  const [gluteMaxExerciseNo, setGluteMaxExerciseNo] = useState<number | null>(null)
  const [balanceExerciseNo, setBalanceExerciseNo] = useState<number | null>(null)
  const [clientInfo, setClientInfo] = useState<ClientInfo | null>(null) // State for client information
  const [editMode, setEditMode] = useState(false) // State for edit mode

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    const value = parseInt(e.target.value, 10) || 0 // Parse input value to number, default to 0 if NaN
    const newAnswers = [...answers]

    // Check if the value is not a number or is negative, reset to 0
    if (isNaN(value) || value < 0) {
      newAnswers[currentQuestion][index] = 0
    } else {
      newAnswers[currentQuestion][index] = value
    }

    setAnswers(newAnswers)
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

  const handleBackClick = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
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

  const getHamstringStrengthExerciseNo = (reps: number) => {
    if (reps >= 0 && reps < 5) return 1
    if (reps >= 5 && reps < 10) return 2
    if (reps >= 10 && reps < 15) return 3
    if (reps >= 15) return 4
    return null
  }

  const getGluteusMaximusStrengthExerciseNo = (reps: number) => {
    if (reps >= 0 && reps < 10) return 1
    if (reps >= 10 && reps < 20) return 2
    if (reps >= 20 && reps < 30) return 3
    if (reps >= 30) return 4
    return null
  }

  const getBalanceExerciseNo = (secs: number) => {
    if (secs >= 0 && secs <= 5) return 1
    if (secs > 5 && secs <= 9) return 2
    if (secs > 9) return 3
    return null
  }
  const calculateResults = () => {
    // Check ankle mobility test
    const ankleTestIndex = questions.findIndex((q) => q.exerciseGroup === "Ankle Mobility")
    if (ankleTestIndex !== -1) {
      const [_, ankleRight, ankleLeft] = answers[ankleTestIndex]
      setAnkleTestFail(ankleRight < 1 || ankleLeft < 1 ? true : false)
      console.log("Did ankle test fail?", ankleRight < 1 || ankleLeft < 1 ? true : false)
    }

    const calfTestIndex = questions.findIndex((q) => q.exerciseGroup === "Calf Strength")
    if (calfTestIndex !== -1) {
      const [calfTogether, calfRight, calfLeft] = answers[calfTestIndex]
      setCalfTestFail(calfTogether < 20 || calfRight < 20 || calfLeft < 20 ? true : false)
      console.log("Did calf test fail?", calfTogether < 20 || calfRight < 20 || calfLeft < 20 ? true : false)
    }

    // Calculate exercise numbers
    const kneeTestIndex = questions.findIndex((q) => q.exerciseGroup === "Knee Strength")
    if (kneeTestIndex !== -1) {
      const kneeAnswers = answers[kneeTestIndex]
      const lowestKneeValue = Math.min(...kneeAnswers)
      const kneeExerciseNo = getKneeStrengthExerciseNo(lowestKneeValue)
      setKneeExerciseNo(kneeExerciseNo)
      console.log("Knee Exercise Lowest Value", lowestKneeValue)
      console.log("Knee Exercise No:", kneeExerciseNo)
    }

    const gluteMedTestIndex = questions.findIndex((q) => q.exerciseGroup === "Gluteus Medius Strength")
    if (gluteMedTestIndex !== -1) {
      const gluteMedAnswers = answers[gluteMedTestIndex].filter((val) => val !== null)
      const lowestGluteMedValue = Math.min(...gluteMedAnswers)
      const gluteMedExerciseNo = getGluteusMediusStrengthExerciseNo(lowestGluteMedValue)
      setGluteMedExerciseNo(gluteMedExerciseNo)
      console.log("Gluteus Medius Strength Lowest Value", lowestGluteMedValue)
      console.log("Gluteus Medius Exercise No:", gluteMedExerciseNo)
    }

    const hamstringTestIndex = questions.findIndex((q) => q.exerciseGroup === "Hamstring Strength")
    if (hamstringTestIndex !== -1) {
      const hamstringAnswers = answers[hamstringTestIndex].filter((val) => val !== null)
      const lowestHamstringValue = Math.min(...hamstringAnswers)
      const hamstringExerciseNo = getHamstringStrengthExerciseNo(lowestHamstringValue)
      setHamstringExerciseNo(hamstringExerciseNo)
      console.log("Hamstring Strength Lowest Value", lowestHamstringValue)
      console.log("Hamstring Exercise No:", hamstringExerciseNo)
    }

    const gluteMaxTestIndex = questions.findIndex((q) => q.exerciseGroup === "Gluteus Maximus Strength")
    if (gluteMaxTestIndex !== -1) {
      const gluteMaxAnswers = answers[gluteMaxTestIndex].filter((val) => val !== null)
      const lowestGluteMaxValue = Math.min(...gluteMaxAnswers)
      const gluteMaxExerciseNo = getGluteusMaximusStrengthExerciseNo(lowestGluteMaxValue)
      setGluteMaxExerciseNo(gluteMaxExerciseNo)
      console.log("Gluteus Maximus Strength Lowest Value", lowestGluteMaxValue)
      console.log("Gluteus Maximus Exercise No:", gluteMaxExerciseNo)
    }

    const balanceTestIndex = questions.findIndex((q) => q.exerciseGroup === "Balance")
    if (balanceTestIndex !== -1) {
      const balanceAnswers = answers[balanceTestIndex].filter((val) => val !== null)
      const lowestBalanceValue = Math.min(...balanceAnswers)
      const balanceExerciseNo = getBalanceExerciseNo(lowestBalanceValue)
      setBalanceExerciseNo(balanceExerciseNo)
      console.log("Balance Test Lowest Value", lowestBalanceValue)
      console.log("Balance Exercise No:", balanceExerciseNo)
    }

    // Update exercise numbers based on masterExerciseList
    const exerciseMappings: { [key: string]: number | null } = {
      "Knee Strength": kneeExerciseNo,
      "Gluteus Medius Strength": gluteMedExerciseNo,
      "Hamstring Strength": hamstringExerciseNo,
      "Gluteus Maximus Strength": gluteMaxExerciseNo,
      Balance: balanceExerciseNo
    }

    Object.keys(exerciseMappings).forEach((group) => {
      if (exerciseMappings[group] !== null) {
        const exerciseNo = exerciseMappings[group]
        const exercises = masterExerciseList[group as keyof typeof masterExerciseList]

        // Find the exercise details based on ExerciseNo
        const exerciseDetails = exercises.find((ex) => ex.ExerciseNo === exerciseNo)

        switch (group) {
          case "Knee Strength":
            setKneeExerciseNo(exerciseNo)
            break
          case "Gluteus Medius Strength":
            setGluteMedExerciseNo(exerciseNo)
            break
          case "Hamstring Strength":
            setHamstringExerciseNo(exerciseNo)
            break
          case "Gluteus Maximus Strength":
            setGluteMaxExerciseNo(exerciseNo)
            break
          case "Balance":
            setBalanceExerciseNo(exerciseNo)
            break
          default:
            break
        }

        if (exerciseDetails) {
          console.log(`${group} Exercise Name:`, exerciseDetails.Exercise)
          console.log(`${group} Exercise Details:`, exerciseDetails)
        }
      }
    })
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
    <Container>
      {!clientInfo || editMode ? (
        <ClientForm initialInfo={clientInfo} onSubmit={handleClientInfoSubmit} />
      ) : !showResults ? (
        <Container>
          <div className='client-info-div'>
            <h2>Client Information:</h2>
            <p>Name: {clientInfo.name}</p>
            <p>Email: {clientInfo.email}</p>
            <p>Workouts per Week: {clientInfo.workoutsPerWeek}</p>

            <button onClick={handleEditClick}>Edit</button>
          </div>
          <div className='questions-div'>
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
            <button className='submit-btn mx-auto' onClick={handleNextClick}>
              {currentQuestion < questions.length - 1 ? "Next" : "Submit"}
            </button>
            {currentQuestion > 0 && (
              <button className='back-btn mx-auto' onClick={handleBackClick}>
                Back
              </button>
            )}
          </div>
        </Container>
      ) : (
        <>
          <div className='client-info-div'>
            <h2>Client Information:</h2>
            <p>Name: {clientInfo.name}</p>
            <p>Email: {clientInfo.email}</p>
            <p>Workouts per Week: {clientInfo.workoutsPerWeek}</p>
          </div>
          <Results
            ankleTestFail={ankleTestFail}
            calfTestFail={calfTestFail}
            clientInfo={clientInfo}
            kneeExerciseNo={kneeExerciseNo}
            gluteMedExerciseNo={gluteMedExerciseNo}
            gluteMaxExerciseNo={gluteMaxExerciseNo}
            hamstringExerciseNo={hamstringExerciseNo}
            balanceExerciseNo={balanceExerciseNo}
          />
        </>
      )}
      {editMode && <button onClick={handleCancelEdit}>Cancel</button>}
    </Container>
  )
}

export default Quiz
