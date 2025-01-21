export const initialState = {
  questions: [],
  // loading, error, ready, start, finish
  status: 'loading',
}

function questionsReducer(state, action) {
  switch (action.type) {
    case 'FETCH_QUESTIONS': {
      return {
        ...state,
        questions: action.payload,
        status: 'ready',
      }
    }
    case 'FETCH_QUESTIONS_ERROR': {
      return {
        ...state,
        status: 'error',
      }
    }
    default:
      return state
  }
}

export default questionsReducer
