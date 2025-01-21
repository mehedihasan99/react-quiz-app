import React from 'react'
import QuestionOption from './QuestionOption'

export default function Question({ question, dispatch, answer }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <QuestionOption question={question} dispatch={dispatch} answer={answer} />
    </div>
  )
}
