import React, { useState, useEffect } from "react"

// components
import { Button, FormLabel } from "react-bootstrap"
import { TextField, Select, MenuItem } from "@mui/material"

export interface ClientInfo {
  name: string
  email: string
  workoutsPerWeek: number | string
}
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
      setWorkoutsPerWeek(parseInt(String(initialInfo.workoutsPerWeek)))
    }
  }, [initialInfo])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ name, email, workoutsPerWeek })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className='form-label' htmlFor='name'>
        *Name:
      </label>
      <TextField
        id='name'
        className='form-control mb-2'
        // label='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
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
      <Button className='button d-block btn-lg submit-btn mx-auto mt-4' type='submit'>
        Save
      </Button>
    </form>
  )
}

export default ClientForm
