import React, {useState, useEffect} from 'react'
import './index.css'
import icon from './white_knight.svg'

function WhiteKnight (props) {
    const [position, setPosition] = useState();

    return <>
        {/* <img className='pawn' src={icon} alt='icon'/> */}
        {props.squareColor == 'white' ? <img className='knightWS' src={icon} alt='icon'/> : <img className='knightBS' src={icon} alt='icon'/>    }
        
    </> 

}

export default WhiteKnight;