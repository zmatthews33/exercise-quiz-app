import React, { useState, useEffect } from "react"
import { Container, FormLabel } from "react-bootstrap"
import { TextField, Select, MenuItem } from "@mui/material"

export interface ClientInfo {
  name: string
  email: string
  workoutsPerWeek: number
}

interface MonthlyExercises {
  month1_exercises: string[]
  month2_exercises: string[]
  month3_exercises: string[]
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

  // Handle the result from the backend
  const handleLookup = async () => {
    setError(null)
    setLookupResult([])
    // Check if the email field is empty
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
      if (data && data.length > 0) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data.forEach((client: any) => {
          console.log("Client workoutsPerWeek:", client.workoutsPerWeek) // Log each client's workoutsPerWeek
        })
      }
      // Parsing the month exercises and setting state
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const parsedResult = data.map((client: any) => ({
        ...client,
        workoutsPerWeek: client.workouts_per_week,
        month1_exercises: client.month1_exercises ? JSON.parse(client.month1_exercises) : [],
        month2_exercises: client.month2_exercises ? JSON.parse(client.month2_exercises) : [],
        month3_exercises: client.month3_exercises ? JSON.parse(client.month3_exercises) : []
      }))
      setLookupResult(parsedResult)
    } catch (err) {
      setError((err as Error).message || "An unexpected error occurred.")
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString()
  }

  return (
    <Container>
      {!mode && (
        <div className='button-group mx-auto'>
          <button onClick={() => setMode("new")} className='mx-2'>
            New Client
          </button>
          <button color='secondary' onClick={() => setMode("lookup")} className='lookup-btn mx-2'>
            Lookup Existing
          </button>
        </div>
      )}

      {/* New Client Form */}
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
          <button
            onClick={() => setMode(null)} // Reset mode to null
            className='back-btn mx-auto mt-2 mb-4'
          >
            Back
          </button>
        </form>
      )}
      {/* Lookup Existing Form */}
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
            <button
              onClick={() => setMode(null)} // Reset mode to null
              className='back-btn mx-auto mt-2 mb-4'
            >
              Back
            </button>
            {error && <p className='text-danger mt-3'>{error}</p>}
          </div>
          {/* Displaying results in a table */}
          {lookupResult.length > 0 && (
            <Container>
              <table className='table table-bordered mt-4'>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Workouts Per Week</th>
                    <th>Month 1 Exercises</th>
                    <th>Month 2 Exercises</th>
                    <th>Month 3 Exercises</th>
                  </tr>
                </thead>
                <tbody>
                  {lookupResult.map((client, index) => (
                    <tr key={index}>
                      <td>{formatDate(client.created_at)}</td>
                      <td>{client.workoutsPerWeek}</td>
                      <td>
                        <ul>
                          {client.month1_exercises.map((exercise, idx) => (
                            <li key={idx}>{exercise}</li>
                          ))}
                        </ul>
                      </td>
                      <td>
                        <ul>
                          {client.month2_exercises.map((exercise, idx) => (
                            <li key={idx}>{exercise}</li>
                          ))}
                        </ul>
                      </td>
                      <td>
                        <ul>
                          {client.month3_exercises.map((exercise, idx) => (
                            <li key={idx}>{exercise}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Container>
          )}
        </Container>
      )}
    </Container>
  )
}

export default ClientForm
