import React, { useState, useRef, useEffect } from 'react'
import './index.css'

const Timer = props => {
  // We need ref in this, because we are dealing
  // with JS setInterval to keep track of it and
  // stop it when needed
  const Ref = useRef(null)

  // The state for our timer
  const [timer, setTimer] = useState('00:00:00')
  const [secondsTimer, setSecontsTimer] = useState(
    String(props.time).slice(6, 2)
  )

  const getTimeRemaining = e => {
    console.log(props.whiteToMove)

    const total = Date.parse(e) - Date.parse(new Date())
    const seconds = Math.floor((total / 1000) % 60)
    const minutes = Math.floor((total / 1000 / 60) % 60)
    const hours = Math.floor(((total / 1000) * 60 * 60) % 24)
    return {
      total,
      hours,
      minutes,
      seconds
    }
  }

  const startTimer = e => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e)
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the begining of the variable
      // console.log(props.whiteToMove)
      if (props.whiteToMove) {
        setTimer(
          (hours > 9 ? hours : '0' + hours) +
            ':' +
            (minutes > 9 ? minutes : '0' + minutes) +
            ':' +
            (seconds > 9 ? seconds : '0' + seconds)
        )
      }
    }
  }

  const clearTimer = e => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next

    setTimer(props.time)
    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    // if (props.whiteToMove) {
    if (Ref.current) clearInterval(Ref.current)
    const id = setInterval(() => {
      startTimer(e)
    }, 1000)
    Ref.current = id
    // }
  }

  const getDeadTime = () => {
    let deadline = new Date()
    let time = props.time
    let totalSeconds =
      Number(props.time.slice(6, 8)) +
      Number(props.time.slice(3, 5)) * 60 +
      Number(props.time.slice(0, 2)) * 3600

    // console.log(totalSeconds)

    // This is where you need to adjust if
    // you entend to add more time
    deadline.setSeconds(deadline.getSeconds() + totalSeconds)
    return deadline
  }

  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only
  useEffect(() => {
    clearTimer(getDeadTime())
  }, [])

  // Another way to call the clearTimer() to start
  // the countdown is via action event from the
  // button first we create function to be called
  // by the button
  const onClickReset = () => {
    clearTimer(getDeadTime())
  }

  return (
    <div className="Timer">
      <h2>{timer}</h2>
      <button onClick={onClickReset}>Reset</button>
    </div>
  )
}

export default Timer
