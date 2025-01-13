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
  numberOfEachSideMessage?: string[]
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
  numberOfEachSideMessage,
  answer,
  onAnswerChange
}) => {
  return (
    <>
      <h3>{question}</h3>
      <p>{desc}</p>
      {bothSidesTogether && (
        <div>
          {bothSidesTogetherMessage && <h4>{bothSidesTogetherMessage}</h4>}
          {/* <FormLabel>Together:</FormLabel> */}
          <TextField
            type='number'
            InputProps={{ inputProps: { step: "0.1" } }}
            className='form-control question-input'
            label='Together'
            value={answer[0] !== null ? answer[0] : ""}
            onChange={(e) => onAnswerChange(e, 0)}
          />
        </div>
      )}
      {eachSide && (
        <>
          {numberOfEachSide && numberOfEachSideMessage ? (
            <div>
              {numberOfEachSideMessage.map((message, index) => (
                <div key={index}>
                  <h4>{message}</h4>
                  <div className='mb-2'>
                    {/* <FormLabel>Right:</FormLabel> */}
                    <TextField
                      type='number'
                      InputProps={{ inputProps: { step: "0.1" } }}
                      className='form-control'
                      label='Right'
                      required
                      value={answer[index * 2 + 1] !== null ? answer[index * 2 + 1] : ""}
                      onChange={(e) => onAnswerChange(e, index * 2 + 1)}
                    />
                  </div>
                  <div className='mb-2'>
                    {/* <FormLabel>Left:</FormLabel> */}
                    <TextField
                      type='number'
                      InputProps={{ inputProps: { step: "0.1" } }}
                      className='form-control'
                      label='Left'
                      required
                      value={answer[index * 2 + 2] !== null ? answer[index * 2 + 2] : ""}
                      onChange={(e) => onAnswerChange(e, index * 2 + 2)}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className='mb-2'>
                {eachSideMessage && <h4>{eachSideMessage}</h4>}
                <TextField
                  type='number'
                  InputProps={{ inputProps: { step: "0.1" } }}
                  className='form-control question-input'
                  required
                  label='Right'
                  value={answer[1] !== null ? answer[1] : ""}
                  onChange={(e) => onAnswerChange(e, 1)}
                />
              </div>
              <div className='mb-2'>
                <TextField
                  type='number'
                  InputProps={{ inputProps: { step: "0.1" } }}
                  className='form-control'
                  label='Left'
                  required
                  value={answer[2] !== null ? answer[2] : ""}
                  onChange={(e) => onAnswerChange(e, 2)}
                />
              </div>
            </>
          )}
        </>
      )}
      {!eachSide && !bothSidesTogether && (
        <TextField
          type='number'
          InputProps={{ inputProps: { step: "0.1" } }}
          className='mb-2 form-control'
          required
          value={answer[0] !== null ? answer[0] : ""}
          onChange={(e) => onAnswerChange(e, 0)}
        />
      )}
    </>
  )
}

export default Question
