import React, {useState, useEffect} from 'react'
import './index.css'
import icon from './white_king.svg'

function WhiteKing (props) {
    const [position, setPosition] = useState();

    return <>
        {/* <img className='pawn' src={icon} alt='icon'/> */}
        {props.squareColor == 'white' ? <img className='kingWS' src={icon} alt='icon'/> : <img className='kingBS' src={icon} alt='icon'/>    }
        
    </> 

}

export default WhiteKing;