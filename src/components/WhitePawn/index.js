import React, {useState, useEffect} from 'react'
import './index.css'
import icon from './white_pawn.svg'
import BlackSquare from '../BlackSquare'

function WhitePawn (props) {
    const [position, setPosition] = useState([{column: props.column, line: props.line}]);



    
    return <>
        {/* <img className='pawn' src={icon} alt='icon'/> */}
        <img className={props.squareColor == 'white' ? 'pawnWS' : 'pawnBS'} src={icon} alt='icon'/>
        
        
    </> 

}

export default WhitePawn;