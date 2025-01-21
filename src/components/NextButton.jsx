import React from 'react'

export default function NextButton({ dispatch, answer }) {
  if (answer === null) {
    return null
  }
  return (
    <button
      onClick={() => {
        dispatch({ type: 'NEXT_QUESTION' })
      }}
      className="btn btn-ui"
    >
      Next
    </button>
  )
}
