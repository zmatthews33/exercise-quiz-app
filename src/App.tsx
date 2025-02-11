import React, { useState } from "react"

// components
import Quiz from "./components/Quiz"
import Results from "./components/Results"

// types
import { ClientInfo } from "./components/ClientForm"
import { Container, Row } from "react-bootstrap"

type Props = {
  calfTestFail: boolean
  clientInfo: ClientInfo
  ankleExerciseNo: number
  calfExerciseNo: number
  kneeExerciseNo: number
  gluteMedExerciseNo: number
  hamstringExerciseNo: number
  gluteMaxExerciseNo: number
  balanceExerciseNo: number
}

const App: React.FC<Props> = ({
  calfTestFail,
  clientInfo,
  ankleExerciseNo,
  calfExerciseNo,
  kneeExerciseNo,
  gluteMedExerciseNo,
  hamstringExerciseNo,
  gluteMaxExerciseNo,
  balanceExerciseNo
}) => {
  const [quizComplete, setQuizComplete] = useState(false)
  const [password, setPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  const handlePasswordSubmit = () => {
    const correctPassword = "0kM4LWLeiozqGd" // Replace with your actual password
    if (password === correctPassword) {
      setIsAuthenticated(true)
    } else {
      alert("Incorrect password")
    }
  }
  if (!isAuthenticated) {
    return (
      <Container className='password-container'>
        <Row>
          <input className='password-input' type='password' value={password} onChange={handlePasswordChange} />
          <button className='submit-btn mx-auto' onClick={handlePasswordSubmit}>
            Submit
          </button>
        </Row>
      </Container>
    )
  }

  return (
    <Container className='App mt-5'>
      {quizComplete ? (
        <Results
          ankleExerciseNo={ankleExerciseNo}
          calfTestFail={calfTestFail}
          calfExerciseNo={calfExerciseNo}
          clientInfo={clientInfo}
          kneeExerciseNo={kneeExerciseNo}
          gluteMedExerciseNo={gluteMedExerciseNo}
          hamstringExerciseNo={hamstringExerciseNo}
          gluteMaxExerciseNo={gluteMaxExerciseNo}
          balanceExerciseNo={balanceExerciseNo}
        />
      ) : (
        <Quiz setQuizComplete={setQuizComplete} />
      )}
      <div className='text-center mt-4'>
        <p>Copyright ©2024 Chelsea Matthews Coaching®</p>
        <h5>*** NOTICE: UNAUTHORIZED ACCESS OR USE WILL BE PROSECUTED ***</h5>
      </div>
    </Container>
  )
}

export default App
