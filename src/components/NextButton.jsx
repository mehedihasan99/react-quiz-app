import React from 'react'

export default function NextButton({
  dispatch,
  answer,
  index,
  numOfQuestions,
}) {
  if (answer === null) {
    return null
  }
  return (
    <>
      {index + 1 === numOfQuestions ? (
        <button
          onClick={() => {
            dispatch({ type: 'FINISH_QUIZ' })
          }}
          className="btn btn-ui"
        >
          Finish
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch({ type: 'NEXT_QUESTION' })
          }}
          className="btn btn-ui"
        >
          Next
        </button>
      )}
    </>
  )
}
