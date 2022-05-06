import React, {useState, useEffect} from 'react'
import './index.css'
import icon from './white_queen.svg'

function WhiteQueen (props) {
    const [position, setPosition] = useState();

    return <>
        {/* <img className='pawn' src={icon} alt='icon'/> */}
        {props.squareColor == 'white' ? <img className='queenWS' src={icon} alt='icon'/> : <img className='queenBS' src={icon} alt='icon'/>    }
        
    </> 

}

export default WhiteQueen;