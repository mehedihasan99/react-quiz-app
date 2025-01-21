export const initialState = {
  questions: [],
  // loading, error, ready, start, finish
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  highestScore: 0,
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
    case 'ANSWER_QUESTION': {
      const currentQuestion = state.questions[state.index]
      console.log(currentQuestion)
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === currentQuestion.correctOption
            ? state.points + currentQuestion.points
            : state.points,
      }
    }
    case 'NEXT_QUESTION': {
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      }
    }
    case 'FINISH_QUIZ': {
      return {
        ...state,
        status: 'finish',
        highestScore:
          state.points > state.highestScore ? state.points : state.highestScore,
      }
    }
    case 'RESTART_QUIZ': {
      return {
        ...initialState,
        status: 'ready',
        questions: state.questions,
      }
    }
    default:
      throw new Error(
        `Unsupported action type ${action.type} in questionsReducer`
      )
  }
}

export default questionsReducer
