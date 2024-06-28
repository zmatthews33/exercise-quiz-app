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

const getWorkoutsFromPath = (path: ExercisePath | undefined): string[] => {
  const workouts: string[] = []

  if (path) {
    if (path.Workout1) {
      workouts.push(...path.Workout1.split(",").map((exerciseName) => exerciseName.trim()))
    }
    // if (path.Workout2) {
    //   workouts.push(...path.Workout2.split(",").map((exerciseName) => exerciseName.trim()))
    // }
  }

  return workouts
}

const Results: React.FC<ResultsProps> = ({ ankleTestFail, calfTestFail }) => {
  const workoutPerWeekNumber = 2 // Assuming 2 workouts per week, adjust as needed
  const path = getWorkoutPath(ankleTestFail, calfTestFail, workoutPerWeekNumber)

  if (!path) {
    console.error("No workout path found for the given test results and workout frequency.")
    return null // Or display an error message
  }

  const workouts = getWorkoutsFromPath(path)

  return (
    <div>
      <p>Based on the results of your tests...</p>
      <p>Here are some exercises for you:</p>
      <p>Did you fail the ankle test? {ankleTestFail}</p>
      <p>Did you fail the calf test? {calfTestFail}</p>
      <p>The selected path is: {path.Path}</p>
      {/* <h2>Week 1</h2> */}
      {/* <ul>
        {workouts.map((exerciseName, index) => (
          <li key={index}>{exerciseName}</li>
        ))}
      </ul> */}
    </div>
  )
}

export default Results
