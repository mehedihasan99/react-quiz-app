import React from 'react'

export default function QuestionOption({ question, dispatch, answer }) {
  const hasAnswered = answer !== null
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          onClick={() => {
            dispatch({ type: 'ANSWER_QUESTION', payload: index })
          }}
          key={option}
          className={`btn btn-option ${index === answer ? 'answer' : ''} ${
            hasAnswered
              ? index === question.correctOption
                ? 'correct'
                : 'wrong'
              : ''
          }`}
          disabled={hasAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
