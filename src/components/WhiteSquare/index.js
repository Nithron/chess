import { useEffect, useState } from 'react'
import './index.css'
import WhitePawn from '../WhitePawn'
import BlackPawn from '../BlackPawn'
import WhiteRookie from '../WhiteRookie'
import BlackRookie from '../BlackRookie'
import WhiteQueen from '../WhiteQueen'
import BlackQueen from '../BlackQueen'
import WhiteKing from '../WhiteKing'
import BlackKing from '../BlackKing'
import WhiteBishop from '../WhiteBishop'
import BlackBishop from '../BlackBishop'
import WhiteKnight from '../WhiteKnight'
import BlackKnight from '../BlackKnight'

function WhiteSquare(props) {
  const [wPawn, setWPawn] = useState(false)
  const [bPawn, setBPawn] = useState(false)
  const [wRookie, setWRookie] = useState(false)
  const [bRookie, setBRookie] = useState(false)
  const [wQueen, setWQueen] = useState(false)
  const [bKing, setBKing] = useState(false)
  const [wBishop, setWBishop] = useState(false)
  const [bBishop, setBBishop] = useState(false)
  const [wKnight, setWKnight] = useState(false)
  const [bKnight, setBKnight] = useState(false)
  const [wKing, setWKing] = useState(false)
  const [bQueen, setBQueen] = useState(false)
  const [pieceToMove, setPieceToMove] = useState({})
  const [toMove, setToMove] = useState('white')
  const [takeMove, setTakeMove] = useState(false)
  const [takePiece, setTakePiece] = useState(props.pieceToMove)
  const [possibleMoves, setPossibleMoves] = useState(false)
  const [checkMoves, setCheckMoves] = useState('')
  const [movePawn, setMovePawn] = useState(false)
  const [renderLine, setRenderLine] = useState(true)
  const [sameColor, setSameColor] = useState(true)

  useEffect(() => {
    const setBoard = async () => {
      if ((props.id == 5 || props.id == 2) && props.line == 7) {
        setWBishop(true)
      }
      if ((props.id == 2 || props.id == 5) && props.line == 0) {
        setBBishop(true)
      }
    }
    setBoard()
  }, [])

  function hasPiece() {
    let piece
    if (props.wPawn) {
      piece = 'whitePawn'
    } else if (props.wKing) {
      piece = 'whiteKing'
    } else if (props.wQueen) {
      piece = 'whiteQueen'
    } else if (props.bQueen) {
      piece = 'blackQueen'
    } else if (props.wBishop) {
      piece = 'whiteBishop'
    } else if (props.wRookie) {
      piece = 'whiteRookie'
    } else if (props.wKnight) {
      piece = 'whiteKnight'
    } else if (props.bKing) {
      piece = 'blackKing'
    } else if (props.bBishop) {
      piece = 'blackBishop'
    } else if (props.bRookie) {
      piece = 'blackRookie'
    } else if (props.bKnight) {
      piece = 'blackKnight'
    } else if (props.bPawn) {
      piece = 'blackPawn'
    } else if (props.possibleMoves) {
      piece = 'move'
    } else piece = 'none'
    return piece
  }

  useEffect(() => {
    const setBoardMoves = async () => {
      const auxValues = { ...checkMoves }
      const column = Number(auxValues.column)
      const line = Number(auxValues.line)
      let auxPiece = { ...checkMoves }

      if (checkMoves.piece == 'move') {
        props.childToParent(checkMoves)
        console.log('whiteToMove: ' + props.whiteToMove)
      } else if (
        checkMoves.piece == 'whitePawn' ||
        checkMoves.piece == 'blackPawn' ||
        checkMoves.piece == 'whiteKing' ||
        checkMoves.piece == 'blackKing' ||
        checkMoves.piece == 'whiteQueen' ||
        checkMoves.piece == 'blackQueen' ||
        checkMoves.piece == 'whiteKnight' ||
        checkMoves.piece == 'blackKnight' ||
        checkMoves.piece == 'whiteRookie' ||
        checkMoves.piece == 'blackRookie' ||
        checkMoves.piece == 'whiteBishop' ||
        checkMoves.piece == 'blackBishop'
      ) {
        // console.log(whiteToMove)
        setRenderLine(!renderLine)
        props.childToParent(checkMoves)
      } else {
        setPossibleMoves(false)
      }
    }
    setBoardMoves()
  }, [checkMoves])

  useEffect(() => {
    console.log(props.pieceToMove)
  }, [pieceToMove])

  function handleMove(column, line) {
    // console.log(props.possibleMoves)
    // setTakeMove(false)
    let auxValues = []
    auxValues.piece = hasPiece()
    auxValues.column = column
    auxValues.line = line
    auxValues.take = false

    // if (!pieceToMove.piece && String(auxValues.piece).slice(0, 5) == 'black') {
    //   console.log('pode capturar?')
    //   setTakePiece(auxValues)
    //   console.log(auxValues)
    //   setTakeMove(true)
    //   console.log(takeMove)
    // } else
    if (
      (props.possibleMoves == true &&
        String(props.pieceToMove.piece).slice(0, 5) == 'white' &&
        String(hasPiece()).slice(0, 5) == 'black') ||
      (props.possibleMoves == true &&
        String(props.pieceToMove.piece).slice(0, 5) == 'black' &&
        String(hasPiece()).slice(0, 5) == 'white')
    ) {
      console.log('entrou no if')
      // auxValues = { ...props.pieceToMove }
      auxValues.piece = 'move'
      auxValues.take = true
      console.log(auxValues)
      props.childToParent(auxValues)
    } else if (auxValues.piece != 'none') {
      if (props.whiteToMove) {
        if (
          auxValues.piece == 'whitePawn' ||
          auxValues.piece == 'whiteKnight' ||
          auxValues.piece == 'whiteRookie' ||
          auxValues.piece == 'whiteKing' ||
          auxValues.piece == 'whiteQueen' ||
          auxValues.piece == 'whiteBishop' ||
          auxValues.piece == 'move'
        ) {
          setPieceToMove(auxValues)
          // console.log(auxValues)
          setCheckMoves(auxValues)
        }
      } else if (!props.whiteToMove) {
        if (
          auxValues.piece == 'blackPawn' ||
          auxValues.piece == 'blackKnight' ||
          auxValues.piece == 'blackRookie' ||
          auxValues.piece == 'blackKing' ||
          auxValues.piece == 'blackQueen' ||
          auxValues.piece == 'blackBishop' ||
          auxValues.piece == 'move'
        ) {
          // console.log(auxValues)
          setPieceToMove(auxValues)
          setCheckMoves(auxValues)
        }
      }
    }
  }

  function squarePiece() {
    return (
      props.wPawn ||
      props.bPawn ||
      props.wKing ||
      props.bKing ||
      props.wRookie ||
      props.bRookie ||
      props.wBishop ||
      props.bBishop ||
      props.wKnight ||
      props.bKnight ||
      props.wQueen ||
      props.bQueen
    )
  }

  return (
    <div
      className={props.color == 'white' ? 'whiteSquare' : 'blackSquare'}
      onClick={() => handleMove(props.id, props.line)}
    >
      {props.wPawn ? <WhitePawn squareColor={props.color} /> : <></>}
      {props.bPawn ? <BlackPawn squareColor={props.color} /> : <></>}
      {props.wRookie ? <WhiteRookie squareColor={props.color} /> : <></>}
      {props.bRookie ? <BlackRookie squareColor={props.color} /> : <></>}
      {props.wQueen ? <WhiteQueen squareColor={props.color} /> : <></>}
      {props.bQueen ? <BlackQueen squareColor={props.color} /> : <></>}
      {props.wKing ? <WhiteKing squareColor={props.color} /> : <></>}
      {props.bKing ? <BlackKing squareColor={props.color} /> : <></>}
      {props.wBishop ? <WhiteBishop squareColor={props.color} /> : <></>}
      {props.bBishop ? <BlackBishop squareColor={props.color} /> : <></>}
      {props.wKnight ? <WhiteKnight squareColor={props.color} /> : <></>}
      {props.bKnight ? <BlackKnight squareColor={props.color} /> : <></>}
      {props.possibleMoves == true && squarePiece() == false ? (
        <div className="possibleMove" />
      ) : (
        <></>
      )}
    </div>
  )
}

export default WhiteSquare
