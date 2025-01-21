import React, { useEffect } from 'react'

export default function Timer({ dispatch, time }) {
  const mins = Math.floor(time / 60)
  const secs = time % 60
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Timer is up!')
      dispatch({ type: 'DECREMENT_TIME' })
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [dispatch])
  return (
    <div className="timer">{`${mins}:${secs < 10 ? `0${secs}` : secs}`}</div>
  )
}
