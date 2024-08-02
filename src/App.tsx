import React, { useState } from "react"

// components
import Quiz from "./components/Quiz"
import Results from "./components/Results"

// types
import { ClientInfo } from "./components/ClientForm"
import { Container } from "react-bootstrap"

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

  return (
    <Container className='App'>
      <header className='App-header text-center pb-4'>
        <h1>Fitness Quiz</h1>
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
    </Container>
  )
}

export default App
