import React, { useState } from "react"

// components
import Quiz from "./components/Quiz"
import Results from "./components/Results"

// types
import { ClientInfo } from "./components/ClientForm"
import { Container, Row } from "react-bootstrap"

type Props = {
  ankleTestFail: boolean
  calfTestFail: boolean
  clientInfo: ClientInfo
  kneeExerciseNo: number
  gluteMedExerciseNo: number
  hamstringExerciseNo: number
  gluteMaxExerciseNo: number
  balanceExerciseNo: number
}

const App: React.FC<Props> = ({
  ankleTestFail,
  calfTestFail,
  clientInfo,
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
    <Container className='App'>
      <header className='App-header text-center pb-4'>
        <h1>Screening Form</h1>
      </header>
      {quizComplete ? (
        <Results
          ankleTestFail={ankleTestFail}
          calfTestFail={calfTestFail}
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
