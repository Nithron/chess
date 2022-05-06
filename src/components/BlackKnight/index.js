import React, {useState, useEffect} from 'react'
import './index.css'
import icon from './black_knight.svg'

function BlackKnight (props) {
    const [position, setPosition] = useState();

    return <>
        {/* <img className='pawn' src={icon} alt='icon'/> */}
        {props.squareColor == 'white' ? <img className='knightWS' src={icon} alt='icon'/> : <img className='knightBS' src={icon} alt='icon'/>    }
        
    </> 

}

export default BlackKnight;