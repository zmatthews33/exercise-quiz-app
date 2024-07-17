import React, { useEffect, useState } from "react"
import { masterExerciseList } from "../data/exerciseList"
import { Exercise } from "../components/Quiz"
import exercisePaths from "../data/exercisePaths"
import { ClientInfo } from "./ClientForm"

interface ResultsProps {
  ankleTestFail: boolean
  calfTestFail: boolean
  clientInfo: ClientInfo
  kneeExerciseNo: number | null
  gluteMedExerciseNo: number | null
  hamstringExerciseNo: number | null
  gluteMaxExerciseNo: number | null
  balanceExerciseNo: number | null
}

const Results: React.FC<ResultsProps> = ({
  ankleTestFail,
  calfTestFail,
  clientInfo,
  kneeExerciseNo,
  gluteMedExerciseNo,
  hamstringExerciseNo,
  gluteMaxExerciseNo,
  balanceExerciseNo
}) => {
  const workoutPerWeekNumber = clientInfo.workoutsPerWeek

  const path = exercisePaths.find(
    (p) =>
      p.AnkleTestFail === ankleTestFail &&
      p.CalfTestFail === calfTestFail &&
      p.WorkoutPerWeekNumber === workoutPerWeekNumber
  )

  const [week1Exercises, setWeek1Exercises] = useState<Exercise[]>([])
  const [week2Exercises, setWeek2Exercises] = useState<Exercise[]>([])
  const [week3Exercises, setWeek3Exercises] = useState<Exercise[]>([])

  useEffect(() => {
    if (path) {
      const categoriesWeek1 = path.Workout1.split(",").map((category) => category.trim())
      const categoriesWeek2 = path.Workout2 ? path.Workout2.split(",").map((category) => category.trim()) : []
      const categoriesWeek3 = path.Workout3 ? path.Workout3.split(",").map((category) => category.trim()) : []

      const filterExercises = (categories: string[], exerciseNumbers: { [key: string]: number | null }): Exercise[] => {
        const filteredExercises: Exercise[] = []
        categories.forEach((category) => {
          if (category in masterExerciseList) {
            const exercises = masterExerciseList[category as keyof typeof masterExerciseList]
            if (category === "Foot Strength") {
              const footStrengthExercise = exercises.find((ex) => ex.ExerciseNo === 1)
              if (footStrengthExercise) {
                filteredExercises.push(footStrengthExercise)
              }
            } else if (category === "Knee Strength Isometrics") {
              const calfStrengthExercise = exercises.find((ex) => ex.ExerciseNo === 1)
              if (calfStrengthExercise) {
                filteredExercises.push(calfStrengthExercise)
              }
            } else if (category === "Calf Strength") {
              const calfStrengthExercise = exercises.find((ex) => ex.ExerciseNo === 1)
              if (calfStrengthExercise) {
                filteredExercises.push(calfStrengthExercise)
              }
            } else if (category === "Ankle Mobility") {
              const ankleMobilityExercise = exercises.find((ex) => ex.ExerciseNo === 1)
              if (ankleMobilityExercise) {
                filteredExercises.push(ankleMobilityExercise)
              }
            } else {
              const exerciseNo = exerciseNumbers[category]
              if (exerciseNo !== null) {
                const exercise = exercises.find((ex) => ex.ExerciseNo === exerciseNo)
                if (exercise) {
                  filteredExercises.push(exercise)
                }
              } else {
                exercises.forEach((ex) => filteredExercises.push(ex))
              }
            }
          }
        })
        return filteredExercises
      }

      const exerciseNumbers = {
        "Calf Strength": calfTestFail === true ? 1 : null,
        "Ankle Mobility": ankleTestFail === true ? 1 : null,
        "Knee Strength": kneeExerciseNo,
        "Gluteus Medius Strength": gluteMedExerciseNo,
        "Hamstring Strength": hamstringExerciseNo,
        "Gluteus Maximus Strength": gluteMaxExerciseNo,
        Balance: balanceExerciseNo
      }

      const week1ExercisesFiltered = filterExercises(categoriesWeek1, exerciseNumbers)
      const week2ExercisesFiltered = filterExercises(categoriesWeek2, exerciseNumbers)
      const week3ExercisesFiltered = filterExercises(categoriesWeek3, exerciseNumbers)

      setWeek1Exercises(week1ExercisesFiltered)
      setWeek2Exercises(week2ExercisesFiltered)
      setWeek3Exercises(week3ExercisesFiltered)
    }
  }, [
    path,
    kneeExerciseNo,
    gluteMedExerciseNo,
    hamstringExerciseNo,
    gluteMaxExerciseNo,
    balanceExerciseNo,
    calfTestFail,
    ankleTestFail
  ])

  if (!path) {
    console.error("No workout path found for the given test results and workout frequency.")
    return null
  }

  return (
    <div>
      <p>Based on the results of your tests...</p>
      <p>Here are some exercises for you:</p>
      <p>Did you fail the ankle test? {ankleTestFail}</p>
      <p>Did you fail the calf test? {calfTestFail}</p>
      <p>The selected path is: {path.Path}</p>
      <h1>First Month</h1>
      <h2>Week 1</h2>
      <p>{path.Workout1}</p>
      <ul>
        {week1Exercises.map((exercise, index) => (
          <li key={index}>
            <strong>
              <p>
                Category: {exercise.Category} - Score Value: {exercise.ExerciseNo}
              </p>
            </strong>
            {exercise.Exercise} - Sets: {exercise.Sets}, Reps: {exercise.Reps}, Hold: {exercise.Hold}, Rest:{" "}
            {exercise.Rest}, Notes: {exercise.Notes}
          </li>
        ))}
      </ul>

      <h2>Week 2</h2>
      <p>{path.Workout2}</p>
      <ul>
        {week2Exercises.map((exercise, index) => (
          <li key={index}>
            <strong>
              <p>
                Category: {exercise.Category} - Score Value: {exercise.ExerciseNo}
              </p>
            </strong>
            {exercise.Exercise} - Sets: {exercise.Sets}, Reps: {exercise.Reps}, Hold: {exercise.Hold}, Rest:{" "}
            {exercise.Rest}, Notes: {exercise.Notes}
            <a href={exercise.Link}>Link</a>
          </li>
        ))}
      </ul>

      {week3Exercises.length > 0 && (
        <>
          <h2>Week 3</h2>
          <p>{path.Workout3}</p>
          <ul>
            {week3Exercises.map((exercise, index) => (
              <li key={index}>
                <strong>
                  <p>
                    Category: {exercise.Category} - Score Value: {exercise.ExerciseNo}
                  </p>
                </strong>
                {exercise.Exercise} - Sets: {exercise.Sets}, Reps: {exercise.Reps}, Hold: {exercise.Hold}, Rest:{" "}
                {exercise.Rest}, Notes: {exercise.Notes}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default Results
