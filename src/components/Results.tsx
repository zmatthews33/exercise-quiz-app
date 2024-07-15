import React from "react"

// import exercisePaths from "./data/exercisePaths"

interface ClientInfo {
  name: string
  email: string
  workoutsPerWeek: number
}

interface Exercise {
  Month: number
  ExerciseNo: number
  Exercise: string
  Sets: string
  Reps: string
  Hold: string
  Rest: string
  Link: string
  Notes: string
  isAddOn: string
  Category: string
}

interface ExercisePath {
  Path: number
  AnkleTestFail: string
  CalfTestFail: string
  WorkoutPerWeekNumber: number
  Workout1: string
  Workout2: string
  Workout3?: string
}

interface ResultsProps {
  ankleTestFail: string
  calfTestFail: string
  clientInfo: ClientInfo
  exercisePlan: ExercisePath | null
}

const getWorkoutsFromPath = (path: ExercisePath | null) => {
  const workouts: { workout1: Exercise[]; workout2: Exercise[]; workout3: Exercise[] } = {
    workout1: [],
    workout2: [],
    workout3: []
  }

  if (path) {
    if (path.Workout1) {
      workouts.workout1 = JSON.parse(path.Workout1)
    }
    if (path.Workout2) {
      workouts.workout2 = JSON.parse(path.Workout2)
    }
    if (path.Workout3) {
      workouts.workout3 = JSON.parse(path.Workout3)
    }
  }

  return workouts
}

const Results: React.FC<ResultsProps> = ({ ankleTestFail, calfTestFail, clientInfo, exercisePlan }) => {
  if (!exercisePlan) {
    console.error("No exercise plan available.")
    return <div>No exercise plan available for the given test results and workout frequency.</div>
  }

  const workouts = getWorkoutsFromPath(exercisePlan)

  return (
    <div>
      <p>Based on the results of your tests...</p>
      <p>Here are some exercises for you:</p>
      <p>Did you fail the ankle test? {ankleTestFail}</p>
      <p>Did you fail the calf test? {calfTestFail}</p>
      <p>The selected path is: {exercisePlan.Path}</p>
      <h2>Exercises</h2>
      <div>
        <h2>Workout 1</h2>
        <ul>
          {workouts.workout1.map((exercise, index) => (
            <li key={index}>
              <strong>{exercise.Exercise}</strong> - <strong>{exercise.Category}</strong>
              <br />
              {exercise.Sets} sets of {exercise.Reps} reps
              <br />
              {exercise.Hold && `, hold for ${exercise.Hold}`}
              <br />
              {exercise.Rest && `, rest for ${exercise.Rest}`}
              <br />
              {exercise.Link && (
                <span>
                  {" "}
                  -{" "}
                  <a href={exercise.Link} target='_blank' rel='noopener noreferrer'>
                    Video
                  </a>
                </span>
              )}
              {exercise.Notes && (
                <div>
                  <em>Notes: {exercise.Notes}</em>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Workout 2</h2>
        <ul>
          {workouts.workout2.map((exercise, index) => (
            <li key={index}>
              <strong>{exercise.Exercise}</strong> - <strong>{exercise.Category}</strong>
              <br />
              {exercise.Sets} sets of {exercise.Reps} reps
              <br />
              {exercise.Hold && `, hold for ${exercise.Hold}`}
              <br />
              {exercise.Rest && `, rest for ${exercise.Rest}`}
              <br />
              {exercise.Link && (
                <span>
                  {" "}
                  -{" "}
                  <a href={exercise.Link} target='_blank' rel='noopener noreferrer'>
                    Video
                  </a>
                </span>
              )}
              {exercise.Notes && (
                <div>
                  <em>Notes: {exercise.Notes}</em>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {clientInfo.workoutsPerWeek === 3 && (
        <div>
          <h2>Workout 3</h2>
          <ul>
            {workouts.workout3.map((exercise, index) => (
              <li key={index}>
                <strong>{exercise.Exercise}</strong> - <strong>{exercise.Category}</strong>
                <br />
                {exercise.Sets} sets of {exercise.Reps} reps
                <br />
                {exercise.Hold && `, hold for ${exercise.Hold}`}
                <br />
                {exercise.Rest && `, rest for ${exercise.Rest}`}
                <br />
                {exercise.Link && (
                  <span>
                    {" "}
                    -{" "}
                    <a href={exercise.Link} target='_blank' rel='noopener noreferrer'>
                      Video
                    </a>
                  </span>
                )}
                {exercise.Notes && (
                  <div>
                    <em>Notes: {exercise.Notes}</em>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Results
