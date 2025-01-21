import { useEffect, useReducer } from 'react'
import Error from './components/Error'
import Finish from './components/Finish'
import Footer from './components/Footer'
import Header from './components/Header'
import Loader from './components/Loader'
import Main from './components/Main'
import NextButton from './components/NextButton'
import Progress from './components/Progress'
import Question from './components/Question'
import StartScreen from './components/StartScreen'
import Timer from './components/Timer'
import questionsReducer, { initialState } from './reducers/questionsReducer'
const BASE_URL = 'http://localhost:8000'
function App() {
  const [
    { questions, status, index, answer, points, highestScore, remainingTime },
    dispatch,
  ] = useReducer(questionsReducer, initialState)
  const numOfQuestions = questions.length
  const totalPoints = questions.reduce(
    (acc, question) => acc + question.points,
    0
  )
  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await fetch(`${BASE_URL}/questions`)
        const data = await response.json()
        dispatch({ type: 'FETCH_QUESTIONS', payload: data })
      } catch (error) {
        dispatch({ type: 'FETCH_QUESTIONS_ERROR' })
      }
    }
    fetchQuestions()
  }, [])
  return (
    <div className="app">
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && (
          <StartScreen dispatch={dispatch} numOfQuestions={numOfQuestions} />
        )}
        {status === 'start' && (
          <>
            <Progress
              index={index}
              numOfQuestions={numOfQuestions}
              points={points}
              totalPoints={totalPoints}
              answer={answer}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <Timer dispatch={dispatch} time={remainingTime} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numOfQuestions={numOfQuestions}
              />
            </Footer>
          </>
        )}
        {status === 'finish' && (
          <Finish
            points={points}
            totalPoints={totalPoints}
            highestScore={highestScore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  )
}

export default App
