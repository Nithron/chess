import React, {useState, useEffect} from 'react';
import './index.css';
import WhiteSquare from '../WhiteSquare'
import BlackSquare from '../BlackSquare'




function LineWhite (props) {
    const [boardMoves, setBoardMoves] = useState(false); 
    const [possibleMoves, setPossibleMoves] = useState(false)
    
    useEffect(() => {
        if (props.id == 6 || props.id == 5){
            setPossibleMoves(true)
        }
    },[props.renderBoard])
    const childToParent = (childData) => {
        console.log(childData)
        setBoardMoves(childData)
        props.childToParent(boardMoves)
        
    }
    function handleLineClick(boardClick){
        
        return 'lineClick'
    }

    return <>
        {props.id%2 == 0 ? 
            <div className='lines'>
                <WhiteSquare id='1' possibleMoves={possibleMoves} color='white' propsLine={props.id} onClick={() =>handleLineClick(props.onClick())} childToParent={childToParent}/>
                <WhiteSquare id='2' possibleMoves={possibleMoves} color='black' propsLine={props.id} onClick={() =>handleLineClick()} childToParent={childToParent}/>
                <WhiteSquare id='3' possibleMoves={possibleMoves} color='white' propsLine={props.id} onClick={() =>handleLineClick()} childToParent={childToParent}/>
                <WhiteSquare id='4' possibleMoves={possibleMoves} color='black' propsLine={props.id} onClick={() =>handleLineClick()} childToParent={childToParent}/>
                <WhiteSquare id='5' possibleMoves={possibleMoves} color='white' propsLine={props.id} onClick={() =>handleLineClick()} childToParent={childToParent}/>
                <WhiteSquare id='6' possibleMoves={possibleMoves} color='black' propsLine={props.id} onClick={() =>handleLineClick()} childToParent={childToParent}/>
                <WhiteSquare id='7' possibleMoves={possibleMoves} color='white' propsLine={props.id} onClick={() =>handleLineClick()} childToParent={childToParent}/>
                <WhiteSquare id='8' possibleMoves={possibleMoves} color='black' propsLine={props.id} onClick={() =>handleLineClick()} childToParent={childToParent}/>
            </div> :
            <div className='lines'>
                <WhiteSquare id='1' possibleMoves={possibleMoves} color='black' propsLine={props.id} onClick={() =>handleLineClick(props.onClick())} childToParent={childToParent}/>
                <WhiteSquare id='2' possibleMoves={possibleMoves} color='white' propsLine={props.id} onClick={() =>handleLineClick()} childToParent={childToParent}/>
                <WhiteSquare id='3' possibleMoves={possibleMoves} color='black' propsLine={props.id} onClick={() =>handleLineClick()} childToParent={childToParent}/>
                <WhiteSquare id='4' possibleMoves={possibleMoves} color='white' propsLine={props.id} onClick={() =>handleLineClick()} childToParent={childToParent}/>
                <WhiteSquare id='5' possibleMoves={possibleMoves} color='black' propsLine={props.id} onClick={() =>handleLineClick()} childToParent={childToParent}/>
                <WhiteSquare id='6' possibleMoves={possibleMoves} color='white' propsLine={props.id} onClick={() =>handleLineClick()} childToParent={childToParent}/>
                <WhiteSquare id='7' possibleMoves={possibleMoves} color='black' propsLine={props.id} onClick={() =>handleLineClick()} childToParent={childToParent}/>
                <WhiteSquare id='8' possibleMoves={possibleMoves} color='white' propsLine={props.id} onClick={() =>handleLineClick()} childToParent={childToParent}/>
            </div>
        }

    </>
}

export default LineWhite;