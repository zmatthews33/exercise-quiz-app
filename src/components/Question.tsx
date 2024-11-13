import React from "react"

// components
import { TextField } from "@mui/material"

interface QuestionProps {
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
  answer: number[]
  onAnswerChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, side: number) => void
}

const Question: React.FC<QuestionProps> = ({
  question,
  desc,
  eachSide,
  eachSideMessage,
  bothSidesTogether,
  bothSidesTogetherMessage,
  numberOfEachSide,
  messageOne,
  messageTwo,
  answer,
  onAnswerChange
}) => {
  return (
    <>
      <h3>{question}</h3>
      <p>{desc}</p>
      {bothSidesTogether && (
        <>
          <div className='mb-2'>
            {bothSidesTogetherMessage && <h4>{bothSidesTogetherMessage}</h4>}
            <TextField
              className='form-control question-input'
              label='Together'
              value={answer[0] !== null ? answer[0] : ""}
              onChange={(e) => onAnswerChange(e, 0)}
            />
          </div>
          <div className='mb-2'>
            {eachSideMessage && <h4>{eachSideMessage}</h4>}
            <TextField
              className='form-control question-input'
              required
              label='Right'
              value={answer[1] !== null ? answer[1] : ""}
              onChange={(e) => onAnswerChange(e, 1)}
            />
          </div>
          <div className='mb-2'>
            <TextField
              className='form-control'
              label='Left'
              required
              value={answer[2] !== null ? answer[2] : ""}
              onChange={(e) => onAnswerChange(e, 2)}
            />
          </div>
        </>
      )}
      {eachSide && (
        <>
          {numberOfEachSide === 2 && (
            <div>
              <div>
                <h4>{messageOne}</h4>
                <div className='mb-2'>
                  <TextField
                    className='form-control'
                    label='Right'
                    required
                    value={answer[0] !== null ? answer[0] : ""}
                    onChange={(e) => onAnswerChange(e, 0)}
                  />
                </div>
                <div className='mb-2'>
                  <TextField
                    className='form-control'
                    label='Left'
                    required
                    value={answer[1] !== null ? answer[1] : ""}
                    onChange={(e) => onAnswerChange(e, 1)}
                  />
                </div>
              </div>
              <div>
                <h4>{messageTwo}</h4>
                <div className='mb-2'>
                  <TextField
                    className='form-control'
                    label='Right'
                    required
                    value={answer[2] !== null ? answer[2] : ""}
                    onChange={(e) => onAnswerChange(e, 2)}
                  />
                </div>
                <div className='mb-2'>
                  <TextField
                    className='form-control'
                    label='Left'
                    required
                    value={answer[3] !== null ? answer[3] : ""}
                    onChange={(e) => onAnswerChange(e, 3)}
                  />
                </div>
              </div>
            </div>
          )}
          {!bothSidesTogether && !numberOfEachSide && (
            <>
              <div className='mb-2'>
                <TextField
                  className='form-control'
                  label='Right'
                  required
                  value={answer[0] !== null ? answer[0] : ""}
                  onChange={(e) => onAnswerChange(e, 0)}
                />
              </div>
              <div className='mb-2'>
                <TextField
                  className='form-control'
                  label='Left'
                  required
                  value={answer[1] !== null ? answer[1] : ""}
                  onChange={(e) => onAnswerChange(e, 1)}
                />
              </div>
            </>
          )}
        </>
      )}
    </>
  )
}

export default Question
