import { useEffect, useReducer } from 'react'
import Error from './components/Error'
import Header from './components/Header'
import Loader from './components/Loader'
import Main from './components/Main'
import questionsReducer, { initialState } from './reducers/questionsReducer'
const BASE_URL = 'http://localhost:8000'
function App() {
  const [state, dispatch] = useReducer(questionsReducer, initialState)
  const { questions, status } = state
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
      </Main>
    </div>
  )
}

export default App
