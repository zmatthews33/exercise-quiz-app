/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react"
import axios from "axios"

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
  const [exerciseScores, setExerciseScores] = useState<
    {
      category: string
      score: number
    }[]
  >([])

  const postResults = async () => {
    const formatExercisesByWeek = (monthExercises: Exercise[][]): { Workout: number; Exercises: any[] }[] =>
      monthExercises.map((week: Exercise[], index: number) => ({
        Workout: index + 1,
        Exercises: week.map((ex: Exercise) => ({
          Category: ex.Category,
          Exercise: ex.Exercise,
          Sets: ex.Sets,
          Reps: ex.Reps,
          Hold: ex.Hold,
          Rest: ex.Rest,
          Notes: ex.Notes,
          Link: ex.Link
        }))
      }))

    const formattedMonth1 = formatExercisesByWeek(month1Exercises)
    const formattedMonth2 = formatExercisesByWeek(month2Exercises)
    const formattedMonth3 = formatExercisesByWeek(month3Exercises)
    console.log("Storing payload:", {
      name: clientInfo.name,
      email: clientInfo.email,
      workouts_per_week: clientInfo.workoutsPerWeek,
      month1_exercises: formattedMonth1,
      month2_exercises: formattedMonth2,
      month3_exercises: formattedMonth3
    })
    try {
      const payload = {
        name: clientInfo.name,
        email: clientInfo.email,
        workouts_per_week: clientInfo.workoutsPerWeek,
        month1_exercises: formattedMonth1,
        month2_exercises: formattedMonth2,
        month3_exercises: formattedMonth3
      }

      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/store-exercise-plan`, payload)
      console.log("Data posted successfully:", response.data)
    } catch (error) {
      console.error("Error posting data:", error)
    }
  }

  useEffect(() => {
    if (month1Exercises.length > 0 && month2Exercises.length > 0 && month3Exercises.length > 0) {
      postResults()
    }
  }, [month1Exercises, month2Exercises, month3Exercises])

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
        })
        return filteredExercises
      }

      const exerciseNumbers = {
        "Calf Strength": calfTestFail ? 1 : null,
        "Ankle Mobility": ankleTestFail ? 1 : null,
        "Knee Strength": kneeExerciseNo,
        "Gluteus Medius Strength": gluteMedExerciseNo,
        "Hamstring Strength": hamstringExerciseNo,
        "Gluteus Maximus Strength": gluteMaxExerciseNo,
        Balance: balanceExerciseNo
      }

      const week1Exercises = filterExercises(categoriesWeek1, exerciseNumbers)
      const week2Exercises = filterExercises(categoriesWeek2, exerciseNumbers)
      const week3Exercises = clientInfo.workoutsPerWeek === 3 ? filterExercises(categoriesWeek3, exerciseNumbers) : []

      const allWeeks =
        clientInfo.workoutsPerWeek === 3
          ? [week1Exercises, week2Exercises, week3Exercises]
          : [week1Exercises, week2Exercises]

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

      const allExercises = [...week1Exercises, ...week2Exercises, ...week3Exercises]
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

  const renderExercisesScores = (scores: { category: string; score: number }[]) => (
    <div className='mb-4'>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant='h5'>Expand Results</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Category</TableCell>
                  <TableCell>Score</TableCell>
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
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant='h5'>Workout {week}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Category</TableCell>
                  <TableCell>Exercise</TableCell>
                  <TableCell>Sets</TableCell>
                  <TableCell>Reps</TableCell>
                  <TableCell>Hold (secs)</TableCell>
                  <TableCell>Rest (mins)</TableCell>
                  <TableCell>Notes</TableCell>
                  <TableCell>Link</TableCell>
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
                    <TableCell>{exercise.Notes}</TableCell>
                    <TableCell>
                      <a href={exercise.Link} target='_blank' rel='noopener noreferrer'>
                        Link
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
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
    </Container>
  )
}

export default Results
