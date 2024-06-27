// src/components/Question.tsx
import React from 'react'

interface QuestionProps {
  question: string
  desc?: string
  eachSide?: boolean
  bothSidesTogether?: boolean
  answer: number[]
  onAnswerChange: (e: React.ChangeEvent<HTMLInputElement>, side: number) => void
}

const Question: React.FC<QuestionProps> = ({
  question,
  desc,
  eachSide,
  bothSidesTogether,
  answer,
  onAnswerChange,
}) => {
  return (
    <div>
      <h3>{question}</h3>
      <p>{desc}</p>
      {bothSidesTogether && (
        <div>
          <label>Together:</label>
          <input
            type='number'
            value={answer[0]}
            onChange={(e) => onAnswerChange(e, 0)}
          />
        </div>
      )}
      {eachSide && (
        <>
          <div>
            <label>Right:</label>
            <input
              type='number'
              value={answer[1]}
              onChange={(e) => onAnswerChange(e, 1)}
            />
          </div>
          <div>
            <label>Left:</label>
            <input
              type='number'
              value={answer[2]}
              onChange={(e) => onAnswerChange(e, 2)}
            />
          </div>
        </>
      )}
      {!eachSide && !bothSidesTogether && (
        <input
          type='number'
          value={answer[0]}
          onChange={(e) => onAnswerChange(e, 0)}
        />
      )}
    </div>
  )
}

export default Question
