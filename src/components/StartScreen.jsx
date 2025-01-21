import React from 'react'

export default function StartScreen({ numOfQuestions, dispatch }) {
  return (
    <div className="start">
      <h2 className="title">🚀 Welcome to the Ultimate React Quiz! 🌟</h2>
      <p className="subtitle">
        Ready to put your React knowledge to the test? We've prepared{' '}
        <strong>{numOfQuestions}</strong> thought-provoking questions just for
        you.
      </p>
      <button
        onClick={() => {
          dispatch({ type: 'START_QUIZ' })
        }}
        className="btn btn-ui"
      >
        🎯 Start Your Journey!
      </button>
    </div>
  )
}
