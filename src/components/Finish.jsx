import React from 'react'

export default function Finish({
  points,
  totalPoints,
  highestScore,
  dispatch,
}) {
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of{' '}
        <strong>{totalPoints}</strong> points!
      </p>
      <p className="highscore">
        Your highest score is <strong>{highestScore}</strong> points!
      </p>
      <button
        onClick={() => {
          dispatch({ type: 'RESTART_QUIZ' })
        }}
        className="btn btn-ui"
      >
        Restart{' '}
      </button>
    </>
  )
}
