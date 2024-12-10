/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react"
import axios from "axios"

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
  messageOne?: string
  messageTwo?: string
  exerciseGroup?: string
}

const questions: QuestionData[] = [
  {
    question: "Dorsiflexion Mobility Test",
    desc: "Record your distance from the wall below (in inches)",
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
    messageOne: "Version 1",
    messageTwo: "Version 2",
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
    desc: "Record your results below (in seconds)",
    eachSide: true,
    numberOfEachSide: 2,
    messageOne: "Eyes Open",
    messageTwo: "Eyes Closed",
    exerciseGroup: "Balance"
  },
  {
    question: "Calf Raise Test",
    desc: "Record your results below (in seconds)",
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
  const [ankleTestFail, setAnkleTestFail] = useState(false)
  const [calfTestFail, setCalfTestFail] = useState(false)
  const [kneeExerciseNo, setKneeExerciseNo] = useState<number | null>(null)
  const [gluteMedExerciseNo, setGluteMedExerciseNo] = useState<number | null>(null)
  const [hamstringExerciseNo, setHamstringExerciseNo] = useState<number | null>(null)
  const [gluteMaxExerciseNo, setGluteMaxExerciseNo] = useState<number | null>(null)
  const [balanceExerciseNo, setBalanceExerciseNo] = useState<number | null>(null)
  const [clientInfo, setClientInfo] = useState<ClientInfo | null>(null) // State for client information
  const [editMode, setEditMode] = useState(false) // State for edit mode

  const [quizComplete, setQuizComplete] = useState<boolean>(false)

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
      if (quizComplete) {
        setQuizComplete(true)
      }
      setShowResults(true)
      postAnswers()
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

  const postAnswers = async () => {
    try {
      // --- Ankle Mobility (2 Questions) ---
      const ankleMobilityTestIndex = 0 // 2 questions: Right and Left mobility
      const ankleMobilityAnswers = [
        answers[ankleMobilityTestIndex][0], // Right mobility
        answers[ankleMobilityTestIndex][1] // Left mobility
      ]
      const validAnkleMobilityAnswers = ankleMobilityAnswers.filter((val) => val !== null)
      console.log(validAnkleMobilityAnswers)
      // --- Knee Strength (3 Questions) ---
      const kneeStrengthTestIndex = 1 // 3 questions: Together, Right, Left seconds
      const kneeStrengthAnswers = [
        answers[kneeStrengthTestIndex][0], // Together seconds
        answers[kneeStrengthTestIndex][1], // Right seconds
        answers[kneeStrengthTestIndex][2] // Left seconds
      ]
      const validKneeStrengthAnswers = kneeStrengthAnswers.filter((val) => val !== null)
      console.log(validKneeStrengthAnswers)
      // --- Gluteus Medius Strength (4 Questions) ---
      const gluteMedStrengthTestIndex = 2 // 4 questions: Right V1, Left V1, Right V2, Left V2 seconds
      const gluteMedStrengthAnswers = [
        answers[gluteMedStrengthTestIndex][0], // Right V1 seconds
        answers[gluteMedStrengthTestIndex][1], // Left V1 seconds
        answers[gluteMedStrengthTestIndex][2], // Right V2 seconds
        answers[gluteMedStrengthTestIndex][3] // Left V2 seconds
      ]
      const validGluteMedStrengthAnswers = gluteMedStrengthAnswers.filter((val) => val !== null)
      console.log(validGluteMedStrengthAnswers)
      // --- Hamstring Strength (2 Questions) ---
      const hamstringStrengthTestIndex = 3 // 2 questions: Right reps, Left reps
      const hamstringStrengthAnswers = [
        answers[hamstringStrengthTestIndex][0], // Right reps
        answers[hamstringStrengthTestIndex][1] // Left reps
      ]
      const validHamstringStrengthAnswers = hamstringStrengthAnswers.filter((val) => val !== null)
      console.log(validHamstringStrengthAnswers)
      // --- Gluteus Maximus Strength (2 Questions) ---
      const gluteMaxStrengthTestIndex = 4 // 2 questions: Right reps, Left reps
      const gluteMaxStrengthAnswers = [
        answers[gluteMaxStrengthTestIndex][0], // Right reps
        answers[gluteMaxStrengthTestIndex][1] // Left reps
      ]
      const validGluteMaxStrengthAnswers = gluteMaxStrengthAnswers.filter((val) => val !== null)
      console.log(validGluteMaxStrengthAnswers)
      // --- Balance (4 Questions) ---
      const balanceTestIndex = 5 // 4 questions: Eyes open right, Eyes open left, Eyes closed right, Eyes closed left
      const balanceAnswers = [
        answers[balanceTestIndex][0], // Eyes open right seconds
        answers[balanceTestIndex][1], // Eyes open left seconds
        answers[balanceTestIndex][2], // Eyes closed right seconds
        answers[balanceTestIndex][3] // Eyes closed left seconds
      ]
      const validBalanceAnswers = balanceAnswers.filter((val) => val !== null)
      console.log(validBalanceAnswers)
      // --- Calf Strength (3 Questions) ---
      const calfStrengthTestIndex = 6 // 3 questions: Together reps, Right reps, Left reps
      const calfStrengthAnswers = [
        answers[calfStrengthTestIndex][0], // Together reps
        answers[calfStrengthTestIndex][1], // Right reps
        answers[calfStrengthTestIndex][2] // Left reps
      ]
      const validCalfStrengthAnswers = calfStrengthAnswers.filter((val) => val !== null)
      console.log(validCalfStrengthAnswers)
      // Prepare the payload with a check for clientInfo being null
      const payload = {
        name: clientInfo?.name,
        email: clientInfo?.email,
        workouts_per_week: clientInfo?.workoutsPerWeek,
        ankle_mobility_right_ins: validAnkleMobilityAnswers[0], // Right mobility
        ankle_mobility_left_ins: validAnkleMobilityAnswers[1], // Left mobility
        knee_strength_together_secs: validKneeStrengthAnswers[0], // Together seconds
        knee_strength_right_secs: validKneeStrengthAnswers[1], // Right seconds
        knee_strength_left_secs: validKneeStrengthAnswers[2], // Left seconds
        glute_med_strength_V1_right_secs: validGluteMedStrengthAnswers[0], // Right V1 seconds
        glute_med_strength_V1_left_secs: validGluteMedStrengthAnswers[1], // Left V1 seconds
        glute_med_strength_V2_right_secs: validGluteMedStrengthAnswers[2], // Right V2 seconds
        glute_med_strength_V2_left_secs: validGluteMedStrengthAnswers[3], // Left V2 seconds
        hamstring_strength_right_reps: validHamstringStrengthAnswers[0], // Right reps
        hamstring_strength_left_reps: validHamstringStrengthAnswers[1], // Left reps
        glute_max_strength_right_reps: validGluteMaxStrengthAnswers[0], // Right reps
        glute_max_strength_left_reps: validGluteMaxStrengthAnswers[1], // Left reps
        balance_eyes_open_right_secs: validBalanceAnswers[0], // Eyes open right seconds
        balance_eyes_open_left_secs: validBalanceAnswers[1], // Eyes open left seconds
        balance_eyes_closed_right_secs: validBalanceAnswers[2], // Eyes closed right seconds
        balance_eyes_closed_left_secs: validBalanceAnswers[3], // Eyes closed left seconds
        calf_strength_together_reps: validCalfStrengthAnswers[0], // Together reps
        calf_strength_right_reps: validCalfStrengthAnswers[1], // Right reps
        calf_strength_left_reps: validCalfStrengthAnswers[2], // Left reps
        test_no: 1 // Add test number or any other metadata
      }

      console.log("Formatted payload for POST:", payload)

      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/store-exercise-data`, payload)
      console.log("Successfully posted answers:", response.data)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error posting answers:", error.response || error.message)
      } else {
        console.error("Error posting answers:", error)
      }
    }
  }

  const onRestart = () => {
    setCurrentQuestion(0)
    setAnswers(initializeAnswers(questions))
    setShowResults(false)
    setQuizComplete(false)
    setAnkleTestFail(false)
    setCalfTestFail(false)
    setKneeExerciseNo(null)
    setGluteMedExerciseNo(null)
    setHamstringExerciseNo(null)
    setGluteMaxExerciseNo(null)
    setBalanceExerciseNo(null)
    setClientInfo(null)
    setEditMode(false)
  }

  return (
    <Container>
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
              exerciseGroup={questions[currentQuestion].exerciseGroup}
              answer={answers[currentQuestion]}
              onAnswerChange={handleAnswerChange}
              messageOne={questions[currentQuestion].messageOne}
              messageTwo={questions[currentQuestion].messageTwo}
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
          <div className='text-center mt-4'>
            <button onClick={onRestart}>Start Over</button>
          </div>
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
    </Container>
  )
}

export default Quiz
