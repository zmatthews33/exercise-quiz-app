import React, { useState, useEffect } from "react"

interface ClientFormProps {
  onSubmit: (name: string, email: string, workoutPerWeekNumber: number) => void
  initialData?: { name: string; email: string; workoutPerWeekNumber: number }
}

const ClientForm: React.FC<ClientFormProps> = ({ onSubmit, initialData }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [workoutPerWeekNumber, setWorkoutPerWeekNumber] = useState(2) // Default to 2 workouts per week

  useEffect(() => {
    if (initialData) {
      setName(initialData.name)
      setEmail(initialData.email)
      setWorkoutPerWeekNumber(initialData.workoutPerWeekNumber)
    }
  }, [initialData])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && email) {
      onSubmit(name, email, workoutPerWeekNumber)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
      </div>
      <div>
        <label>
          Number of Workouts per Week:
          <input
            type='number'
            value={workoutPerWeekNumber}
            onChange={(e) => setWorkoutPerWeekNumber(parseInt(e.target.value, 10))}
            min='1'
            required
          />
        </label>
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default ClientForm
