import React from "react"
import exercisePaths from "../data/exercisePaths"

interface ExercisePath {
  Path: number
  AnkleTestFail: string
  CalfTestFail: string
  WorkoutPerWeekNumber: number
  Workout1: string
  Workout2: string
}

interface ResultsProps {
  ankleTestFail: string
  calfTestFail: string
}

const getWorkoutPath = (
  AnkleTestFail: string,
  CalfTestFail: string,
  WorkoutPerWeekNumber: number
): ExercisePath | undefined => {
  return exercisePaths.find(
    (p) =>
      p.AnkleTestFail === AnkleTestFail &&
      p.CalfTestFail === CalfTestFail &&
      p.WorkoutPerWeekNumber === WorkoutPerWeekNumber
  )
}

const Results: React.FC<ResultsProps> = ({ ankleTestFail, calfTestFail }) => {
  const workoutPerWeekNumber = 2 // Assuming 2 workouts per week, adjust as needed
  const path = getWorkoutPath(ankleTestFail, calfTestFail, workoutPerWeekNumber)

  if (!path) {
    console.error("No workout path found for the given test results and workout frequency.")
    return null // Or display an error message
  }

  const workouts1 = path.Workout1.split(",").map((exerciseName) => exerciseName.trim())
  const workouts2 = path.Workout2.split(",").map((exerciseName) => exerciseName.trim())

  return (
    <div>
      <h2>Workout 1</h2>
      <ul>
        {workouts1.map((exerciseName, index) => (
          <li key={index}>{exerciseName}</li>
        ))}
      </ul>
      <h2>Workout 2</h2>
      <ul>
        {workouts2.map((exerciseName, index) => (
          <li key={index}>{exerciseName}</li>
        ))}
      </ul>
    </div>
  )
}

export default Results
