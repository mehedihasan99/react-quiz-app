export const initialState = {
  questions: [],
  // loading, error, ready, start, finish
  status: 'loading',
  index: 0,
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
    case 'START_QUIZ': {
      return {
        ...state,
        status: 'start',
      }
    }
    default:
      throw new Error(
        `Unsupported action type ${action.type} in questionsReducer`
      )
  }
}

export default questionsReducer
