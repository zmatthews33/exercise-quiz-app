import React, { useState, useEffect } from "react"

// types
import { ClientInfo } from "./Quiz"

interface ClientFormProps {
  onSubmit: (info: { name: string; email: string; workoutsPerWeek: number }) => void
  initialInfo?: ClientInfo | null
}

const ClientForm: React.FC<ClientFormProps> = ({ onSubmit, initialInfo }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [workoutsPerWeek, setWorkoutsPerWeek] = useState(2) // Default to 2, can be changed

  useEffect(() => {
    if (initialInfo) {
      setName(initialInfo.name)
      setEmail(initialInfo.email)
      setWorkoutsPerWeek(initialInfo.workoutsPerWeek)
    }
  }, [initialInfo])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ name, email, workoutsPerWeek })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)} required />
      <label>Email:</label>
      <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
      <label>Workouts per Week:</label>
      <select value={workoutsPerWeek} onChange={(e) => setWorkoutsPerWeek(parseInt(e.target.value, 10))} required>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
      <button type='submit'>Save</button>
    </form>
  )
}

export default ClientForm
