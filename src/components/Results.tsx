import React from 'react'

// components
import ExerciseLink from './ExerciseLink'

// data
import {
  beginnerList,
  intermediateList,
  advancedList,
} from '../data/exerciseLists'

interface Exercise {
  name: string
  url: string
  sets?: number
  reps?: number
  hold?: number
}

interface ResultsProps {
  score: number
}

const getWorkoutRoutine = (score: number): Exercise[] => {
  if (score <= 2) {
    return beginnerList
  } else if (score <= 4) {
    return intermediateList
  } else {
    return advancedList
  }
}

const Results: React.FC<ResultsProps> = ({ score }) => {
  const routine = getWorkoutRoutine(score)

  return (
    <div>
      <p>Based on the results of your test...</p>
      <p>Here are some exercises for you:</p>
      <h2>Week 1</h2>
      <ul>
        {routine.map((exercise, index) => (
          <li key={index}>
            <ExerciseLink
              name={exercise.name}
              url={exercise.url}
              sets={exercise.sets}
              reps={exercise.reps}
              hold={exercise.hold}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Results
