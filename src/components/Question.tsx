import React from "react"

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
  onAnswerChange: (e: React.ChangeEvent<HTMLInputElement>, side: number) => void
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
    <div>
      <h3>{question}</h3>
      <p>{desc}</p>
      {bothSidesTogether && (
        <div>
          {bothSidesTogetherMessage && <h4>{bothSidesTogetherMessage}</h4>}
          <label>Together:</label>
          <input type='text' value={answer[0] !== null ? answer[0] : ""} onChange={(e) => onAnswerChange(e, 0)} />
        </div>
      )}
      {eachSide && (
        <>
          {numberOfEachSide && numberOfEachSideMessage ? (
            <div>
              {numberOfEachSideMessage.map((message, index) => (
                <div key={index}>
                  <h4>{message}</h4>
                  <div>
                    <label>Right:</label>
                    <input
                      type='text'
                      required
                      value={answer[index * 2 + 1] !== null ? answer[index * 2 + 1] : ""}
                      onChange={(e) => onAnswerChange(e, index * 2 + 1)}
                    />
                  </div>
                  <div>
                    <label>Left:</label>
                    <input
                      type='text'
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
              <div>
                {eachSideMessage && <h4>{eachSideMessage}</h4>}
                <label>Right:</label>
                <input
                  type='text'
                  required
                  value={answer[1] !== null ? answer[1] : ""}
                  onChange={(e) => onAnswerChange(e, 1)}
                />
              </div>
              <div>
                <label>Left:</label>
                <input
                  type='text'
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
        <input
          type='text'
          required
          value={answer[0] !== null ? answer[0] : ""}
          onChange={(e) => onAnswerChange(e, 0)}
        />
      )}
    </div>
  )
}

export default Question
