import {useEffect, useState} from 'react'
import './index.css'
import WhitePawn from '../WhitePawn'
import BlackPawn from '../BlackPawn'
import WhiteRookie from '../WhiteRookie'
import BlackRookie from '../BlackRookie'
import WhiteKing from '../WhiteKing'
import BlackQueen from '../BlackQueen'
import WhiteBishop from '../WhiteBishop'
import BlackBishop from '../BlackBishop'
import WhiteKnight from '../WhiteKnight'
import BlackKnight from '../BlackKnight'

function BlackSquare (props) {
    const [wPawn, setWPawn] = useState(false)
    const [bPawn, setBPawn] = useState(false)
    const [wRookie, setWRookie] = useState(false)
    const [bRookie, setBRookie] = useState(false)
    const [wKing, setWKing] = useState(false)
    const [bQueen, setBQueen] = useState(false)
    const [wBishop, setWBishop] = useState(false)
    const [bBishop, setBBishop] = useState(false)
    const [wKnight, setWKnight] = useState(false)
    const [bKnight, setBKnight] = useState(false)
    const [toMove, setToMove] = useState('white')
    const [possibleMoves, setPossibleMoves] = useState(false)
    const [checkMoves, setCheckMoves] = useState('')
    const [movePawn, setMovePawn] = useState(false)

    useEffect(() => {
        const setBoard = () => {
            if ((props.id == 1 || props.id == 3 || props.id == 5 || props.id == 7) && (props.propsLine == 2)){
                setBPawn(true)
            } 
            if ((props.id == 2 || props.id == 4 || props.id == 6 || props.id == 8) && (props.propsLine == 7)){
                // console.log('white pawn '+props.id + ' ' + props.propsLine)
                setWPawn(true)
            } 
            if (props.id == 1 && props.propsLine == 8){
                setWRookie(true)
            }
            if (props.id == 8 && props.propsLine == 1){
                setBRookie(true)
            }
            if (props.id == 5 && props.propsLine == 8){
                setWKing(true)
            }
            if (props.id == 4 && props.propsLine == 1){
                setBQueen(true)
            }
            if (props.id == 3 && props.propsLine == 8){
                setWBishop(true)
            }
            if (props.id == 6 && props.propsLine == 1){
                setBBishop(true)
            }
            if (props.id == 7 && props.propsLine == 8){
                setWKnight(true)
            }
            if (props.id == 2 && props.propsLine == 1){
                setBKnight(true)
            }
        }
        
        setBoard()
    }, [])

    function hasPiece () {
        let piece
        if (wPawn){
            piece = 'whitePawn'
        }
        else if (wKing)(
            piece = 'whiteKing'
        )  
        
        else if (wBishop){
            piece = 'whiteBishop'
        }
        else if (wRookie) {
            piece = 'whiteRookie'
        }
        else if (wKnight) {
            piece = 'whiteKnight'
        }
        else if (bQueen){
            piece = 'blackQueen'
        }
        else if (bBishop){
            piece = 'blackBishop'
        }
        else if (bRookie) {
            piece = 'blackRookie'
        }
        else if (bKnight) {
            piece = 'blackKnight'
        }
        else if (bPawn){
            piece = 'blackPawn'
        }
        else if (possibleMoves)
            piece = 'move'
        return piece 
    }

    useEffect (() => {
        const setBoardMoves = async () => {
            const auxValues = {...checkMoves}
            const column = Number(auxValues.column)
            const line = Number(auxValues.line)
            
            console.log(props.id)
            // console.log(props.propsLine)
            console.log(column)
            if(checkMoves.piece == 'whitePawn' && !possibleMoves){
                // console.log('aqui1')
                props.propsLine = props.propsLine-2 
                console.log(props.propsLine)              
                if (props.id == column && props.propsLine == line-2){
                    console.log('aqui2')
                    setPossibleMoves(true)
                    console.log(possibleMoves)
                } else setPossibleMoves(false)
            } else setPossibleMoves(false)
        }
        setBoardMoves()
    },
    [checkMoves])
    
    function handleMove (piece, column, line){
        let auxValues = []
        auxValues.piece = piece
        auxValues.column = column
        auxValues.line = line
        console.log(auxValues)
        setCheckMoves(auxValues)
        // props.childToParent(possibleMoves)
    }
    
    return (<>

        <div className='blackSquare' onClick={() => handleMove(hasPiece(), props.id, props.propsLine)}>
            {wPawn ? <WhitePawn squareColor='black' line={props.propsLine} column={props.id}/> : <></>}
            {bPawn ? <BlackPawn squareColor='black'/> : <></>}
            {wRookie ? <WhiteRookie squareColor='black'/> : <></>}
            {bRookie ? <BlackRookie squareColor='black'/> : <></>}
            {wKing ? <WhiteKing squareColor='black'/> : <></>}
            {bQueen ? <BlackQueen squareColor='black'/> : <></>}
            {wBishop ? <WhiteBishop squareColor='black'/> : <></>}
            {bBishop ? <BlackBishop squareColor='black'/> : <></>} 
            {wKnight ? <WhiteKnight squareColor='black'/> : <></>} 
            {bKnight ? <BlackKnight squareColor='black'/> : <></>} 
            {props.possibleMoves ? <div className='possibleMove'/> : <></>}
        </div>
        
    </>)
}

export default BlackSquare;