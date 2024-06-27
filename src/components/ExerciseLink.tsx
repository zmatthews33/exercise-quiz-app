import React from 'react'

interface Props {
  name: string
  url: string
  sets?: number
  reps?: number
  hold?: number
}

const ExerciseLink: React.FC<Props> = ({ name, url, sets, reps, hold }) => {
  return (
    <>
      <a href={url} target='_blank' rel='noopener noreferrer'>
        {name}
      </a>
      <p>Sets:{sets}</p>
      {reps && <p>Reps:{reps}</p>}
      {hold && <p>Hold for {hold} seconds</p>}
    </>
  )
}

export default ExerciseLink
