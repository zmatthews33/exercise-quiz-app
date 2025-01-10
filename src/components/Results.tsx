import React, { useEffect, useState } from "react"

// components
import { Exercise } from "../components/Quiz"
import { ClientInfo } from "./ClientForm"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@mui/material"
import { Container } from "react-bootstrap"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

// data
import { masterExerciseList } from "../data/exerciseList"
import exercisePaths from "../data/exercisePaths"

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

  const [month1Exercises, setMonth1Exercises] = useState<Exercise[][]>([])
  const [month2Exercises, setMonth2Exercises] = useState<Exercise[][]>([])
  const [month3Exercises, setMonth3Exercises] = useState<Exercise[][]>([])
  const [month4Exercises, setMonth4Exercises] = useState<Exercise[][]>([])
  const [month5Exercises, setMonth5Exercises] = useState<Exercise[][]>([])
  const [month6Exercises, setMonth6Exercises] = useState<Exercise[][]>([])
  const [exerciseScores, setExerciseScores] = useState<
    {
      category: string
      score: number
    }[]
  >([])

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
            } else if (category === "Front Planks") {
              const frontPlankExercise = exercises.find((ex) => ex.ExerciseNo === 1)
              if (frontPlankExercise) {
                filteredExercises.push(frontPlankExercise)
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
      const week3ExercisesFiltered =
        clientInfo.workoutsPerWeek === 3 ? filterExercises(categoriesWeek3, exerciseNumbers) : []

      const allWeeks =
        clientInfo.workoutsPerWeek === 3
          ? [week1ExercisesFiltered, week2ExercisesFiltered, week3ExercisesFiltered]
          : [week1ExercisesFiltered, week2ExercisesFiltered]

      setMonth1Exercises(allWeeks)
      setMonth2Exercises(
        allWeeks.map((week) =>
          week.map((exercise) => {
            return (
              masterExerciseList[exercise.Category]?.find((ex) => ex.ExerciseNo === exercise.ExerciseNo + 1) || exercise
            )
          })
        )
      )
      setMonth3Exercises(
        allWeeks.map((week) =>
          week.map((exercise) => {
            return (
              masterExerciseList[exercise.Category]?.find((ex) => ex.ExerciseNo === exercise.ExerciseNo + 2) || exercise
            )
          })
        )
      )
      setMonth4Exercises(
        allWeeks.map((week) =>
          week.map((exercise) => {
            return (
              masterExerciseList[exercise.Category]?.find((ex) => ex.ExerciseNo === exercise.ExerciseNo + 3) || exercise
            )
          })
        )
      )
      setMonth5Exercises(
        allWeeks.map((week) =>
          week.map((exercise) => {
            return (
              masterExerciseList[exercise.Category]?.find((ex) => ex.ExerciseNo === exercise.ExerciseNo + 4) || exercise
            )
          })
        )
      )
      setMonth6Exercises(
        allWeeks.map((week) =>
          week.map((exercise) => {
            return (
              masterExerciseList[exercise.Category]?.find((ex) => ex.ExerciseNo === exercise.ExerciseNo + 5) || exercise
            )
          })
        )
      )

      // Collect all exercises to determine the scores
      const allExercises = [...week1ExercisesFiltered, ...week2ExercisesFiltered, ...week3ExercisesFiltered]
      const scores: { category: string; score: number }[] = []
      allExercises.forEach((exercise) => {
        if (!scores.find((score) => score.category === exercise.Category)) {
          scores.push({ category: exercise.Category, score: exercise.ExerciseNo })
        }
      })
      setExerciseScores(scores)
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

  const renderExercisesScores = (scores: { category: string; score: number }[]) => (
    <div className='mb-4'>
      <Accordion className='accordion'>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant='h5'>Expand Results</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <strong>
            <p>Path: {path.Path}</p>
          </strong>
          <strong>
            <p>
              Ankle Test:
              <span className={ankleTestFail ? "fail-color" : "pass-color"}> {ankleTestFail ? "FAIL" : "PASS"}</span>
            </p>
          </strong>
          <strong>
            <p>
              Calf Test:{" "}
              <span className={calfTestFail ? "fail-color" : "pass-color"}> {calfTestFail ? "FAIL" : "PASS"}</span>
            </p>
          </strong>
          <TableContainer component={Paper}>
            <Table style={{ tableLayout: "fixed" }}>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <strong>Category</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Score</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {scores.map((score, index) => (
                  <TableRow key={index}>
                    <TableCell>{score.category}</TableCell>
                    <TableCell>{score.score}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
    </div>
  )

  const renderExercisesTable = (exercises: Exercise[], week: number) => (
    <div className='mb-4'>
      <Accordion className='accordion'>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant='h5'>Workout {week}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='h5'>For TrueCoach</Typography>
          <TableContainer component={Paper}>
            <Table style={{ tableLayout: "fixed" }}>
              <TableHead>
                <TableRow>
                  {" "}
                  <TableCell>
                    <strong>For TrueCoach</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Link</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {exercises.map((exercise, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <h6>{exercise.Exercise}</h6>
                      <p>
                        {exercise.Reps && `${exercise.Sets} sets of ${exercise.Reps}`}
                        {exercise.Hold && `${exercise.Sets} sets ${exercise.Hold}`}
                        <br />
                        <br />
                        Rest {exercise.Rest}
                        <br />
                        <br />
                        {exercise.Notes}
                      </p>
                    </TableCell>
                    <TableCell>
                      <a href={exercise.Link}>{exercise.Link}</a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <TableContainer />
            <br />
            <Accordion className='accordion'>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant='h5'>Saved Workout Data</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer component={Paper}>
                  <Table style={{ tableLayout: "fixed" }}>
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <strong>Category</strong>
                        </TableCell>
                        <TableCell>
                          <strong>Exercise</strong>
                        </TableCell>
                        <TableCell>
                          <strong>Sets</strong>
                        </TableCell>
                        <TableCell>
                          <strong>Reps</strong>
                        </TableCell>
                        <TableCell>
                          <strong>Hold</strong>
                        </TableCell>
                        <TableCell>
                          <strong>Rest (mins)</strong>
                        </TableCell>
                        <TableCell>
                          <strong>Notes</strong>
                        </TableCell>
                        <TableCell>
                          <strong>Link</strong>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {exercises.map((exercise, index) => (
                        <TableRow key={index}>
                          <TableCell>{exercise.Category}</TableCell>
                          <TableCell>{exercise.Exercise}</TableCell>
                          <TableCell>{exercise.Sets}</TableCell>
                          <TableCell>{exercise.Reps}</TableCell>
                          <TableCell>{exercise.Hold}</TableCell>
                          <TableCell>{exercise.Rest}</TableCell>
                          {/* <TableCell>{exercise.Notes}</TableCell> */}
                          <TableCell>
                            <p>
                              {exercise.Reps && `${exercise.Sets} sets of ${exercise.Reps}`}
                              {exercise.Hold && `${exercise.Sets} sets ${exercise.Hold}`}
                              <br />
                              <br />
                              Rest {exercise.Rest}
                              <br />
                              <br />
                              {exercise.Notes}
                            </p>
                          </TableCell>
                          <TableCell>
                            <a href={exercise.Link}>{exercise.Link}</a>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
    </div>
  )

  return (
    <Container>
      <h2>Workout Program</h2>

      {renderExercisesScores(exerciseScores)}

      <h3>Month 1</h3>
      {month1Exercises.map((exercises, week) => renderExercisesTable(exercises, week + 1))}
      <h3>Month 2</h3>
      {month2Exercises.map((exercises, week) => renderExercisesTable(exercises, week + 1))}
      <h3>Month 3</h3>
      {month3Exercises.map((exercises, week) => renderExercisesTable(exercises, week + 1))}
      <h3>Month 4</h3>
      {month4Exercises.map((exercises, week) => renderExercisesTable(exercises, week + 1))}
      <h3>Month 5</h3>
      {month5Exercises.map((exercises, week) => renderExercisesTable(exercises, week + 1))}
      <h3>Month 6</h3>
      {month6Exercises.map((exercises, week) => renderExercisesTable(exercises, week + 1))}
    </Container>
  )
}

export default Results
