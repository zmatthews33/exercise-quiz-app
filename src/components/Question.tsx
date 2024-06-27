import React from 'react';

interface QuestionProps {
  question: string;
  eachSide?: boolean;
  answer: number[];
  onAnswerChange: (e: React.ChangeEvent<HTMLInputElement>, side: number) => void;
}

const Question: React.FC<QuestionProps> = ({ question, eachSide, answer, onAnswerChange }) => {
  return (
    <div>
      <h3>{question}</h3>
      {eachSide ? (
        <>
          <div>
            <label>Right:</label>
            <input
              type="number"
              value={answer[0]}
              onChange={(e) => onAnswerChange(e, 0)}
            />
          </div>
          <div>
            <label>Left:</label>
            <input
              type="number"
              value={answer[1]}
              onChange={(e) => onAnswerChange(e, 1)}
            />
          </div>
        </>
      ) : (
        <input
          type="number"
          value={answer[0]}
          onChange={(e) => onAnswerChange(e, 0)}
        />
      )}
    </div>
  );
};

export default Question;
