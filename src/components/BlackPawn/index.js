import React, {useState, useEffect} from 'react'
import './index.css'
import icon from './black_pawn.svg'

function BlackPawn (props) {
    const [position, setPosition] = useState();

    return <>
        {/* <img className='pawn' src={icon} alt='icon'/> */}
        {props.squareColor == 'white' ? <img className='pawnWS' src={icon} alt='icon'/> : <img className='pawnBS' src={icon} alt='icon'/>    }
        
    </> 

}

export default BlackPawn;