import React, { useState } from 'react';

// components
import Question from './Question';

interface QuestionData {
  question: string;
  eachSide?: boolean;
}

interface QuizProps {
  onQuizComplete: (score: number) => void;
}

const questions: QuestionData[] = [
  { question: "Enter the time you were able to hold stretch 1 (in seconds)", eachSide: true },
  { question: "Enter the time you were able to hold stretch 2 (in seconds)" },
  // Add more questions when I get them
];

const Quiz: React.FC<QuizProps> = ({ onQuizComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[][]>(questions.map(q => q.eachSide ? [0, 0] : [0]));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, side: number) => {
    const value = parseInt(e.target.value);
    const newAnswers = [...answers];
    newAnswers[currentQuestion][side] = isNaN(value) ? 0 : value;
    setAnswers(newAnswers);
  };

  const handleNextClick = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const totalScore = answers.flat().reduce((acc, curr) => acc + curr, 0);
      onQuizComplete(totalScore);
    }
  };

  return (
    <div>
      <Question
        question={questions[currentQuestion].question}
        eachSide={questions[currentQuestion].eachSide}
        answer={answers[currentQuestion]}
        onAnswerChange={handleInputChange}
      />
      <button onClick={handleNextClick}>
        {currentQuestion < questions.length - 1 ? "Next" : "Finish"}
      </button>
    </div>
  );
};

export default Quiz;
