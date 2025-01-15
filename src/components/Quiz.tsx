/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react"

// components
import Question from "./Question"
import Results from "./Results"
import ClientForm from "./ClientForm"
import { Container, Row } from "react-bootstrap"

// types
import { masterExerciseList } from "../data/exerciseList"

type QuizProps = {
  setQuizComplete: (quizComplete: boolean) => void
}
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

const Quiz: React.FC<QuizProps> = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[][]>(initializeAnswers(questions))
  const [showResults, setShowResults] = useState(false)
  const [calfTestFail, setCalfTestFail] = useState(false)
  const [calfExerciseNo, setCalfExerciseNo] = useState<number | null>(null)
  const [ankleExerciseNo, setAnkleExerciseNo] = useState<number | null>(null)
  const [kneeExerciseNo, setKneeExerciseNo] = useState<number | null>(null)
  const [gluteMedExerciseNo, setGluteMedExerciseNo] = useState<number | null>(null)
  const [hamstringExerciseNo, setHamstringExerciseNo] = useState<number | null>(null)
  const [gluteMaxExerciseNo, setGluteMaxExerciseNo] = useState<number | null>(null)
  const [balanceExerciseNo, setBalanceExerciseNo] = useState<number | null>(null)
  const [clientInfo, setClientInfo] = useState<ClientInfo | null>(null) // State for client information
  const [editMode, setEditMode] = useState(false) // State for edit mode

  const [quizComplete, setQuizComplete] = useState<boolean>(false)

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    const value = parseFloat(e.target.value) // Use parseFloat to support decimals
    const newAnswers = [...answers]

    if (!isNaN(value) && value >= 0) {
      newAnswers[currentQuestion][index] = value // Assign the valid number
    } else {
      newAnswers[currentQuestion][index] = 0 // Default to 0 for invalid input
    }

    setAnswers(newAnswers)
  }

  const handleNextClick = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calculate results
      calculateResults()
      if (quizComplete) {
        setQuizComplete(true)
      }
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
    if (lowestValue >= 0 && lowestValue <= 4) return 1
    if (lowestValue >= 5 && lowestValue <= 9) return 2
    if (lowestValue >= 10 && lowestValue <= 12) return 3
    if (lowestValue >= 13 && lowestValue <= 17) return 4
    if (lowestValue >= 18 && lowestValue <= 30) return 5
    if (lowestValue > 30) return 6
    return null
  }

  const getHamstringStrengthExerciseNo = (reps: number) => {
    if (reps >= 0 && reps <= 2) return 1
    if (reps >= 3 && reps <= 5) return 2
    if (reps >= 6 && reps <= 8) return 3
    if (reps >= 9 && reps <= 12) return 4
    if (reps >= 13) return 5
    return null
  }

  const getGluteusMaximusStrengthExerciseNo = (reps: number) => {
    if (reps >= 0 && reps <= 3) return 1
    if (reps >= 4 && reps <= 6) return 2
    if (reps >= 7 && reps <= 12) return 3
    if (reps >= 13 && reps <= 18) return 4
    if (reps >= 19) return 5
    return null
  }

  const getBalanceExerciseNo = (secs: number) => {
    if (secs >= 0 && secs <= 5) return 1
    if (secs > 5 && secs <= 7) return 2
    if (secs > 7 && secs <= 10) return 3
    if (secs > 10) return 4
    return null
  }

  const getCalfExerciseNo = (reps: number) => {
    if (reps >= 0 && reps <= 2) return 1
    if (reps >= 3 && reps <= 5) return 2
    if (reps >= 6 && reps <= 7) return 3
    if (reps >= 8 && reps <= 10) return 4
    if (reps >= 11 && reps <= 13) return 5
    if (reps >= 14 && reps <= 16) return 6
    if (reps >= 17 && reps <= 19) return 7
    if (reps > 19) return 8
    return null
  }

  const getAnkleExerciseNo = (inches: number) => {
    if (inches >= 0 && inches <= 1) return 1
    if (inches > 1 && inches <= 2) return 2
    if (inches > 2 && inches <= 3) return 3
    if (inches > 3 && inches <= 3.5) return 4
    if (inches > 3.5 && inches <= 4) return 5
    if (inches > 4) return 6
    return null
  }

  const calculateResults = () => {
    const calfTestIndex = questions.findIndex((q) => q.exerciseGroup === "Calf Strength")

    if (calfTestIndex !== -1) {
      const [calfTogether, calfRight, calfLeft] = answers[calfTestIndex]

      // Determine if the calf test failed
      const didFail = calfTogether < 20 || calfRight < 20 || calfLeft < 20
      setCalfTestFail(didFail)
      // console.log("Did calf test fail?", didFail)

      // Additional logic if the calf test failed
      if (didFail) {
        const calfAnswers = answers[calfTestIndex]
        const lowestCalfValue = Math.min(...calfAnswers)
        const calfExerciseNo = getCalfExerciseNo(lowestCalfValue)
        setCalfExerciseNo(calfExerciseNo)
        // console.log("Calf Exercise Lowest Value", lowestCalfValue)
        // console.log("Calf Exercise No:", calfExerciseNo)
      }
    }

    // Calculate exercise numbers
    const ankleTestIndex = questions.findIndex((q) => q.exerciseGroup === "Ankle Mobility")
    if (ankleTestIndex !== -1) {
      const ankleAnswers = answers[ankleTestIndex].filter((val) => val !== null) // Filter invalid values
      const lowestAnkleValue = Math.min(...ankleAnswers)
      const ankleExerciseNo = getAnkleExerciseNo(lowestAnkleValue)
      setAnkleExerciseNo(ankleExerciseNo)
      // console.log("Ankle Exercise Lowest Value", lowestAnkleValue)
      // console.log("Ankle Exercise No:", ankleExerciseNo)
    }

    const kneeTestIndex = questions.findIndex((q) => q.exerciseGroup === "Knee Strength")
    if (kneeTestIndex !== -1) {
      const kneeAnswers = answers[kneeTestIndex].filter((val) => val !== null)
      const lowestKneeValue = Math.min(...kneeAnswers)
      const kneeExerciseNo = getKneeStrengthExerciseNo(lowestKneeValue)
      setKneeExerciseNo(kneeExerciseNo)
      // console.log("Knee Exercise Lowest Value", lowestKneeValue)
      // console.log("Knee Exercise No:", kneeExerciseNo)
    }

    const gluteMedTestIndex = questions.findIndex((q) => q.exerciseGroup === "Gluteus Medius Strength")
    if (gluteMedTestIndex !== -1) {
      const gluteMedAnswers = answers[gluteMedTestIndex].filter((val) => val !== null)
      const lowestGluteMedValue = Math.min(...gluteMedAnswers)
      const gluteMedExerciseNo = getGluteusMediusStrengthExerciseNo(lowestGluteMedValue)
      setGluteMedExerciseNo(gluteMedExerciseNo)
      // console.log("Gluteus Medius Strength Lowest Value", lowestGluteMedValue)
      // console.log("Gluteus Medius Exercise No:", gluteMedExerciseNo)
    }

    const hamstringTestIndex = questions.findIndex((q) => q.exerciseGroup === "Hamstring Strength")
    if (hamstringTestIndex !== -1) {
      const hamstringAnswers = answers[hamstringTestIndex].filter((val) => val !== null)
      const lowestHamstringValue = Math.min(...hamstringAnswers)
      const hamstringExerciseNo = getHamstringStrengthExerciseNo(lowestHamstringValue)
      setHamstringExerciseNo(hamstringExerciseNo)
      // console.log("Hamstring Strength Lowest Value", lowestHamstringValue)
      // console.log("Hamstring Exercise No:", hamstringExerciseNo)
    }

    const gluteMaxTestIndex = questions.findIndex((q) => q.exerciseGroup === "Gluteus Maximus Strength")
    if (gluteMaxTestIndex !== -1) {
      const gluteMaxAnswers = answers[gluteMaxTestIndex].filter((val) => val !== null)
      const lowestGluteMaxValue = Math.min(...gluteMaxAnswers)
      const gluteMaxExerciseNo = getGluteusMaximusStrengthExerciseNo(lowestGluteMaxValue)
      setGluteMaxExerciseNo(gluteMaxExerciseNo)
      // console.log("Gluteus Maximus Strength Lowest Value", lowestGluteMaxValue)
      // console.log("Gluteus Maximus Exercise No:", gluteMaxExerciseNo)
    }

    const balanceTestIndex = questions.findIndex((q) => q.exerciseGroup === "Balance")
    if (balanceTestIndex !== -1) {
      const balanceAnswers = answers[balanceTestIndex].filter((val) => val !== null)
      const lowestBalanceValue = Math.min(...balanceAnswers)
      const balanceExerciseNo = getBalanceExerciseNo(lowestBalanceValue)
      setBalanceExerciseNo(balanceExerciseNo)
      // console.log("Balance Test Lowest Value", lowestBalanceValue)
      // console.log("Balance Exercise No:", balanceExerciseNo)
    }

    // Update exercise numbers based on masterExerciseList
    const exerciseMappings: { [key: string]: number | null } = {
      "Ankle Mobility": ankleExerciseNo,
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
          case "Ankle Mobility":
            setAnkleExerciseNo(exerciseNo)
            break
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
      <header className='App-header text-center pb-4'>
        <h1>{!showResults ? "Screening Form" : "Screening Results"}</h1>
      </header>
      {!clientInfo || editMode ? (
        // <Container>
        <>
          <ClientForm initialInfo={clientInfo} onSubmit={handleClientInfoSubmit} />

          {editMode && (
            <Row>
              <button className='cancel-button' onClick={handleCancelEdit}>
                Cancel
              </button>
            </Row>
          )}
        </>
      ) : // </Container>
      !showResults ? (
        <Container>
          <div className='client-info-div'>
            <h2>Client Information:</h2>
            <p>Name: {clientInfo.name}</p>
            <p>Email: {clientInfo.email}</p>
            <p>Workouts per Week: {clientInfo.workoutsPerWeek}</p>

            <button className='edit-button' onClick={handleEditClick}>
              Edit
            </button>
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
            calfTestFail={calfTestFail}
            clientInfo={clientInfo}
            ankleExerciseNo={ankleExerciseNo}
            calfExerciseNo={calfExerciseNo}
            kneeExerciseNo={kneeExerciseNo}
            gluteMedExerciseNo={gluteMedExerciseNo}
            gluteMaxExerciseNo={gluteMaxExerciseNo}
            hamstringExerciseNo={hamstringExerciseNo}
            balanceExerciseNo={balanceExerciseNo}
          />
        </>
      )}
    </Container>
  )
}

export default Quiz
