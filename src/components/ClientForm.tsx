import React, { useState, useEffect } from "react"

// components
import { Container, FormLabel } from "react-bootstrap"
import { TextField, Select, MenuItem } from "@mui/material"

export interface ClientInfo {
  name: string
  email: string
  workoutsPerWeek: number
}

interface WorkoutData {
  Workout: number
  Exercises: {
    Category: string
    Exercise: string
    Sets: string
    Reps: string
    Hold: string
    Rest: string
    Notes: string
    Link: string
  }[]
}

interface MonthlyExercises {
  month1_exercises: WorkoutData[]
  month2_exercises: WorkoutData[]
  month3_exercises: WorkoutData[]
}

interface ClientWithMonthlyExercises extends ClientInfo, MonthlyExercises {
  created_at: string
}

interface ClientFormProps {
  initialInfo?: ClientInfo | null
  onSubmit: (info: { name: string; email: string; workoutsPerWeek: number }) => void
}

const ClientForm: React.FC<ClientFormProps> = ({ initialInfo, onSubmit }) => {
  const [mode, setMode] = useState<"new" | "lookup" | null>(null)
  const [name, setName] = useState(initialInfo?.name || "")
  const [email, setEmail] = useState(initialInfo?.email || "")
  const [workoutsPerWeek, setWorkoutsPerWeek] = useState(initialInfo?.workoutsPerWeek || 2)
  const [lookupEmail, setLookupEmail] = useState("")
  const [lookupResult, setLookupResult] = useState<ClientWithMonthlyExercises[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (initialInfo) {
      setName(initialInfo.name)
      setEmail(initialInfo.email)
      setWorkoutsPerWeek(parseInt(String(initialInfo.workoutsPerWeek)))
    }
  }, [initialInfo])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ name, email, workoutsPerWeek })
  }

  const handleLookup = async () => {
    setError(null)
    setLookupResult([])
    if (!lookupEmail.trim()) {
      setError("Please enter a valid email address.")
      return
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/store-exercise-plan?email=${lookupEmail}`)
      if (!response.ok) {
        throw new Error(`Client with email ${lookupEmail} not found.`)
      }
      const data = await response.json()
      console.log("Fetched Data:", data)

      // Parse exercises from JSON strings
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const parsedResult = data.map((client: any) => ({
        ...client,
        workoutsPerWeek: client.workouts_per_week,
        month1_exercises: client.month1_exercises ? JSON.parse(client.month1_exercises) : [],
        month2_exercises: client.month2_exercises ? JSON.parse(client.month2_exercises) : [],
        month3_exercises: client.month3_exercises ? JSON.parse(client.month3_exercises) : []
      }))
      console.log("Parsed Result:", parsedResult) // Debugging log
      setLookupResult(parsedResult)
    } catch (err) {
      setError((err as Error).message || "An unexpected error occurred.")
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString()
  }

  const renderExerciseData = (workouts: WorkoutData[]) => {
    console.log("Rendering workouts:", workouts)
    if (!Array.isArray(workouts)) {
      console.error("Invalid data structure for workouts:", workouts)
      return <p>Invalid data structure.</p>
    }

    if (workouts.length === 0) {
      return <p>No exercises available for this month.</p>
    }

    return (
      <>
        {workouts.map((workout) => (
          <div key={workout.Workout} className='mb-4'>
            <h5>Workout {workout.Workout}</h5>
            <ul>
              {workout.Exercises.map((exercise, idx) => (
                <li key={idx}>
                  <strong>{exercise.Exercise} - </strong>Sets: {exercise.Sets}, Reps:{" "}
                  {exercise.Reps ? exercise.Reps : "-"}, Hold: {exercise.Hold ? `${exercise.Hold}` : "-"}, Rest:{" "}
                  {exercise.Rest}, Notes: {exercise.Notes}{" "}
                  <a href={exercise.Link} target='_blank' rel='noopener noreferrer'>
                    (Link)
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </>
    )
  }

  return (
    <Container>
      {!mode && (
        <div className='button-group mx-auto'>
          <button onClick={() => setMode("new")} className='mx-2'>
            New Client
          </button>
          <button onClick={() => setMode("lookup")} className='lookup-btn mx-2'>
            Lookup Existing
          </button>
        </div>
      )}

      {mode === "new" && (
        <form className='client-form' onSubmit={handleSubmit}>
          <label className='form-label' htmlFor='name'>
            *Name:
          </label>
          <TextField
            id='name'
            className='form-control mb-2'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            type='text'
          />
          <FormLabel className='form-label' htmlFor='email'>
            *Email:
          </FormLabel>
          <TextField
            id='email'
            className='form-control mb-2'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type='email'
          />
          <FormLabel className='form-label' htmlFor='workoutsPerWeek'>
            *Workouts per Week:
          </FormLabel>
          <Select
            labelId='workoutsPerWeek'
            className='form-control mb-2'
            id='workoutsPerWeek'
            value={workoutsPerWeek}
            onChange={(e) => setWorkoutsPerWeek(parseInt(e.target.value as string))}
            required
          >
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
          <br />
          <button className='submit-btn mx-auto mt-4 mb-4' type='submit'>
            Save
          </button>
          <button onClick={() => setMode(null)} className='back-btn mx-auto mt-2 mb-4'>
            Back
          </button>
        </form>
      )}

      {mode === "lookup" && (
        <Container className='lookup-container'>
          <div className='lookup-form client-form'>
            <FormLabel className='form-label' htmlFor='lookupEmail'>
              Enter Email to Lookup:
            </FormLabel>
            <TextField
              id='lookupEmail'
              className='form-control mb-2'
              value={lookupEmail}
              onChange={(e) => setLookupEmail(e.target.value)}
              required
              type='email'
            />
            <button onClick={handleLookup} className='submit-btn mx-auto mt-4 mb-4'>
              Lookup
            </button>
            <button onClick={() => setMode(null)} className='back-btn mx-auto mt-2 mb-4'>
              Back
            </button>
            {error && <p className='text-danger mt-3'>{error}</p>}
          </div>

          {lookupResult.length > 0 && (
            <Container>
              {lookupResult.map((client, index) => (
                <div key={index} className='client-data'>
                  <h4>
                    Client: {client.name} ({client.email})
                  </h4>
                  <p>Created At: {formatDate(client.created_at)}</p>
                  <p>Workouts Per Week: {client.workoutsPerWeek}</p>
                  <h5>Month 1 Exercises</h5>
                  {renderExerciseData(client.month1_exercises)}
                  <h5>Month 2 Exercises</h5>
                  {renderExerciseData(client.month2_exercises)}
                  <h5>Month 3 Exercises</h5>
                  {renderExerciseData(client.month3_exercises)}
                </div>
              ))}
            </Container>
          )}
        </Container>
      )}
    </Container>
  )
}

export default ClientForm
