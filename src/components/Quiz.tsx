// src/components/Quiz.tsx
import React, { useState } from 'react'
import Question from './Question'

interface QuestionData {
  question: string
  desc?: string
  eachSide?: boolean
  bothSidesTogether?: boolean
}

interface QuizProps {
  onQuizComplete: (score: number) => void
}

const questions: QuestionData[] = [
  {
    question: 'Calf Strength Stretch',
    eachSide: true,
    bothSidesTogether: true,
  },
  { question: 'Hip Strength Stretch', eachSide: true, bothSidesTogether: true },
  { question: 'Balance Test', eachSide: true },
  { question: 'Knee Strength Stretch', eachSide: true },
  { question: 'Whatever Strength Stretch', eachSide: true },
  // Add more questions when needed
]

const Quiz: React.FC<QuizProps> = ({ onQuizComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[][]>(
    questions.map((q) => (q.eachSide ? [0, 0, 0] : [0])),
  )

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    side: number,
  ) => {
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
        bothSidesTogether={questions[currentQuestion].bothSidesTogether}
        answer={answers[currentQuestion]}
        onAnswerChange={handleInputChange}
      />
      <button onClick={handleNextClick}>
        {currentQuestion < questions.length - 1 ? 'Next' : 'Finish'}
      </button>
    </div>
  )
}

export default Quiz
