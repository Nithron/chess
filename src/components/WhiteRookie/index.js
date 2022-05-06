import React, {useState, useEffect} from 'react'
import './index.css'
import icon from './white_rookie.svg'

function WhiteRookie (props) {
    const [position, setPosition] = useState();

    return <>
        {/* <img className='pawn' src={icon} alt='icon'/> */}
        {props.squareColor == 'white' ? <img className='rookieWS' src={icon} alt='icon'/> : <img className='rookieBS' src={icon} alt='icon'/>    }
        
    </> 

}

export default WhiteRookie;