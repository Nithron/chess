import React, { useState, useEffect } from 'react'
import './index.css'
import icon from './black_bishop.svg'

function BlackBishop(props) {
  const [position, setPosition] = useState()

  return (
    <>
      {/* <img className='pawn' src={icon} alt='icon'/> */}
      {props.squareColor == 'white' ? (
        <img className="bishopWS" src={icon} alt="icon" />
      ) : (
        <img className="bishopBS" src={icon} alt="icon" />
      )}
    </>
  )
}

export default BlackBishop
