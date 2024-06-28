import React, { useState } from "react"
import Question from "./Question"
import Results from "./Results"
// import exercisePaths from "../data/exercisePaths"

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
  // {
  //   question: "Wall Sit Test",
  //   desc: "Record the number of seconds you held each test below",
  //   eachSide: true,
  //   eachSideMessage: "Single Leg Wall Sit",
  //   bothSidesTogether: true,
  //   bothSidesTogetherMessage: "Double Leg Wall Sit"
  // },
  // {
  //   question: "Side Plank Test",
  //   eachSide: true,
  //   numberOfEachSide: 2,
  //   numberOfEachSideMessage: ["Version 1", "Version 2"]
  // },
  // { question: "Knee Strength Stretch", desc: "Record reps below", eachSide: true },
  // { question: "Single Leg Bridge Test", desc: "Record reps below", eachSide: true },
  // { question: "Hamstring Bridge Test", desc: "Record reps below", eachSide: true },
  // {
  //   question: "Balance Test",
  //   desc: "Record your results below",
  //   eachSide: true,
  //   numberOfEachSide: 2,
  //   numberOfEachSideMessage: ["Eyes Open", "Eyes Closed"]
  // },
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
      const ankleResult = Math.max(...answers[ankleTestIndex])

      //fix ankle pass/fail
      setAnkleTestFail(ankleResult < 1 ? "YES" : "NO")
      console.log("Did ankle test fail?", ankleResult < 1 ? "YES" : "NO")
    }

    // Check calf strength test
    const calfTestIndex = questions.findIndex((q) => q.exerciseGroup === "Calf Strength")

    if (calfTestIndex !== -1) {
      const calfResult = Math.max(...answers[calfTestIndex])
      setCalfTestFail(calfResult < 20 ? "YES" : "NO")
      console.log("Did calf test fail?", calfResult < 20 ? "YES" : "NO")
    }
  }

  return (
    <div>
      {!showResults ? (
        <>
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
        <Results ankleTestFail={ankleTestFail} calfTestFail={calfTestFail} />
      )}
    </div>
  )
}

export default Quiz
