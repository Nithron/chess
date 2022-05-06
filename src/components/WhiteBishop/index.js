import React, {useState, useEffect} from 'react'
import './index.css'
import icon from './white_bishop.svg'

function WhiteBishop (props) {
    const [position, setPosition] = useState();

    return <>
        {/* <img className='pawn' src={icon} alt='icon'/> */}
        {props.squareColor == 'white' ? <img className='bishopWS' src={icon} alt='icon'/> : <img className='bishopBS' src={icon} alt='icon'/>    }
        
    </> 

}

export default WhiteBishop;