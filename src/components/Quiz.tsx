import React, { useState } from "react"
import Question from "./Question"

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

interface QuizProps {
  onQuizComplete: (score: number) => void
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

const Quiz: React.FC<QuizProps> = ({ onQuizComplete }) => {
  const initializeAnswers = (questions: QuestionData[]) => {
    return questions.map((q) => {
      if (q.eachSide && q.numberOfEachSide) {
        return Array(q.numberOfEachSide * 2 + 1).fill(0)
      } else if (q.eachSide) {
        return [0, 0, 0]
      } else {
        return [0]
      }
    })
  }

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[][]>(initializeAnswers(questions))

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, side: number) => {
    const value = parseInt(e.target.value)
    const newAnswers = [...answers]
    newAnswers[currentQuestion][side] = isNaN(value) ? 0 : value
    setAnswers(newAnswers)
  }

  const handleNextClick = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      const totalScore = answers.flat().reduce((acc, curr) => acc + curr, 0)
      onQuizComplete(totalScore)
    }
  }

  return (
    <div>
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
        onAnswerChange={handleInputChange}
      />
      <button onClick={handleNextClick}>{currentQuestion < questions.length - 1 ? "Next" : "Finish"}</button>
    </div>
  )
}

export default Quiz
