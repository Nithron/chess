import React, { useEffect, useState } from 'react'
import './index.css'
import LineWhite from '../LineWhite'
import WhiteSquare from '../WhiteSquare'
import LineBlack from '../LineBlack'
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
import {
  knightMoves,
  rookieMoves,
  bPawnMoves,
  kingMoves,
  queenMoves,
  bishopMoves
} from './pieces'

function Board() {
  const [boardMoves, setBoardMoves] = useState(false)
  const [renderBoard, setRenderBoard] = useState(false)
  const [pieceToMove, setPieceToMove] = useState('')
  const [movePiece, setMovePiece] = useState(false)
  const [newPiece, setNewPiece] = useState('')
  const [newColumn, setNewColumn] = useState('')
  const [newLine, setNewLine] = useState('')
  const [newBoard, setNewBoard] = useState(true)
  const [posWPawn, setPosWPawn] = useState([{}])
  const [posBPawn, setPosBPawn] = useState([{}])
  const [posWKnight, setPosWKnight] = useState([{}])
  const [posBKnight, setPosBKnight] = useState([{}])
  const [posWRookie, setPosWRookie] = useState([{}])
  const [posBRookie, setPosBRookie] = useState([{}])
  const [posWKing, setPosWKing] = useState([{}])
  const [posBKing, setPosBKing] = useState([{}])
  const [posWQueen, setPosWQueen] = useState([{}])
  const [posBQueen, setPosBQueen] = useState([{}])
  const [posWBishop, setPosWBishop] = useState([{}])
  const [posBBishop, setPosBBishop] = useState([{}])
  const [takePiece, setTakesPiece] = useState(false)

  const [color, setColor] = useState('white')
  const [column, setColumn] = useState(0)
  const [line, setLine] = useState(0)
  const altura = 8
  const largura = 8
  // cria Array de 0 até n - 1:
  const linhas = Array.from(Array(altura).keys())
  const colunas = Array.from(Array(largura).keys())

  const board = [
    11, 12, 13, 14, 15, 16, 17, 18, 21, 22, 23, 24, 25, 26, 27, 28, 31, 32, 33,
    34, 35, 36, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 51, 52, 53, 54, 55, 56,
    57, 58, 61, 62, 63, 64, 65, 66, 67, 68, 71, 72, 73, 74, 75, 76, 77, 78, 81,
    82, 83, 84, 85, 86, 87, 88
  ]
  // function handleBoardClick() {
  //   return 'boardClick'
  // }
  useEffect(() => {
    const setBoard = async () => {
      setPosWPawn([
        { line: 6, column: 0 },
        { line: 6, column: 1 },
        { line: 6, column: 2 },
        { line: 6, column: 3 },
        { line: 6, column: 4 },
        { line: 6, column: 5 },
        { line: 6, column: 6 },
        { line: 6, column: 7 }
      ])
      setPosBPawn([
        { line: 1, column: 0 },
        { line: 1, column: 1 },
        { line: 1, column: 2 },
        { line: 1, column: 3 },
        { line: 1, column: 4 },
        { line: 1, column: 5 },
        { line: 1, column: 6 },
        { line: 1, column: 7 }
      ])
      setPosWKnight([
        { line: 7, column: 1 },
        { line: 7, column: 6 }
      ])
      setPosBKnight([
        { line: 0, column: 1 },
        { line: 0, column: 6 }
      ])
      setPosWRookie([
        { line: 7, column: 0 },
        { line: 7, column: 7 }
      ])
      setPosBRookie([
        { line: 0, column: 0 },
        { line: 0, column: 7 }
      ])
      setPosWBishop([
        { line: 7, column: 2 },
        { line: 7, column: 5 }
      ])
      setPosBBishop([
        { line: 0, column: 2 },
        { line: 0, column: 5 }
      ])
      setPosWKing([{ line: 7, column: 4 }])
      setPosBKing([{ line: 0, column: 4 }])
      setPosWQueen([{ line: 7, column: 3 }])
      setPosBQueen([{ line: 0, column: 3 }])
      // if (possibleMove) {
      //   setPossibleMoves(true)
      // }
    }
    setBoard()
  }, [])

  const execMove = () => {
    if (!takePiece) {
      if (pieceToMove.piece == 'whitePawn') {
        posWPawn.forEach(function (item, index) {
          if (
            item.line == pieceToMove.line &&
            item.column == pieceToMove.column
          ) {
            posWPawn.splice(index, 1)
          }
        })
        posWPawn.push({ line: boardMoves.line, column: boardMoves.column })
      }

      if (pieceToMove.piece == 'blackPawn') {
        posBPawn.forEach(function (item, index) {
          if (
            item.line == pieceToMove.line &&
            item.column == pieceToMove.column
          ) {
            posBPawn.splice(index, 1)
          }
        })
        posBPawn.push({ line: boardMoves.line, column: boardMoves.column })
      }

      if (pieceToMove.piece == 'whiteKnight') {
        posWKnight.forEach(function (item, index) {
          if (
            item.line == pieceToMove.line &&
            item.column == pieceToMove.column
          ) {
            posWKnight.splice(index, 1)
          }
        })
        posWKnight.push({ line: boardMoves.line, column: boardMoves.column })
      }

      if (pieceToMove.piece == 'blackKnight') {
        posBKnight.forEach(function (item, index) {
          if (
            item.line == pieceToMove.line &&
            item.column == pieceToMove.column
          ) {
            posBKnight.splice(index, 1)
          }
        })
        posBKnight.push({ line: boardMoves.line, column: boardMoves.column })
      }

      if (pieceToMove.piece == 'whiteRookie') {
        posWRookie.forEach(function (item, index) {
          if (
            item.line == pieceToMove.line &&
            item.column == pieceToMove.column
          ) {
            posWRookie.splice(index, 1)
          }
        })
        posWRookie.push({ line: boardMoves.line, column: boardMoves.column })
      }

      if (pieceToMove.piece == 'blackRookie') {
        posBRookie.forEach(function (item, index) {
          if (
            item.line == pieceToMove.line &&
            item.column == pieceToMove.column
          ) {
            posBRookie.splice(index, 1)
          }
        })
        posBRookie.push({ line: boardMoves.line, column: boardMoves.column })
      }

      if (pieceToMove.piece == 'whiteBishop') {
        posWBishop.forEach(function (item, index) {
          if (
            item.line == pieceToMove.line &&
            item.column == pieceToMove.column
          ) {
            posWBishop.splice(index, 1)
          }
        })
        posWBishop.push({ line: boardMoves.line, column: boardMoves.column })
      }

      if (pieceToMove.piece == 'blackBishop') {
        posBBishop.forEach(function (item, index) {
          if (
            item.line == pieceToMove.line &&
            item.column == pieceToMove.column
          ) {
            posBBishop.splice(index, 1)
          }
        })
        posBBishop.push({ line: boardMoves.line, column: boardMoves.column })
      }

      if (pieceToMove.piece == 'whiteKing') {
        posWKing.forEach(function (item, index) {
          if (
            item.line == pieceToMove.line &&
            item.column == pieceToMove.column
          ) {
            posWKing.splice(index, 1)
          }
        })
        posWKing.push({ line: boardMoves.line, column: boardMoves.column })
      }

      if (pieceToMove.piece == 'blackKing') {
        posBKing.forEach(function (item, index) {
          if (
            item.line == pieceToMove.line &&
            item.column == pieceToMove.column
          ) {
            posBKing.splice(index, 1)
          }
        })
        posBKing.push({ line: boardMoves.line, column: boardMoves.column })
      }

      if (pieceToMove.piece == 'whiteQueen') {
        posWQueen.forEach(function (item, index) {
          if (
            item.line == pieceToMove.line &&
            item.column == pieceToMove.column
          ) {
            posWQueen.splice(index, 1)
          }
        })
        posWQueen.push({ line: boardMoves.line, column: boardMoves.column })
      }

      if (pieceToMove.piece == 'blackQueen') {
        posBQueen.forEach(function (item, index) {
          if (
            item.line == pieceToMove.line &&
            item.column == pieceToMove.column
          ) {
            posBQueen.splice(index, 1)
          }
        })
        posBQueen.push({ line: boardMoves.line, column: boardMoves.column })
      }
    } else {
      takesPiece()
    }
  }

  function takesPiece() {}

  useEffect(() => {
    console.log(pieceToMove)
    setRenderBoard(!renderBoard)

    if (boardMoves.piece == 'move') {
      execMove()
    } // else setWPawn(false)
  }, [boardMoves])

  const childToParent = childData => {
    setBoardMoves(childData)
    if (childData.piece != 'none' && childData.piece != 'move') {
      setPieceToMove(childData)
    }
  }
  useEffect(() => {}, [movePiece])

  const possibleMoves = (coluna, linha) => {
    let set = false
    if (boardMoves.piece == 'whitePawn') {
      if (boardMoves.line == 6) {
        if (linha == boardMoves.line - 2 && coluna == boardMoves.column) {
          set = true
        }
      }
      if (linha == boardMoves.line - 1 && coluna == boardMoves.column) {
        set = true
      }
    }
    if (boardMoves.piece == 'blackPawn') {
      if (bPawnMoves(linha, coluna, boardMoves.line, boardMoves.column)) {
        set = true
      }
    }
    if (boardMoves.piece == 'whiteKnight') {
      if (knightMoves(linha, coluna, boardMoves.line, boardMoves.column)) {
        set = true
      }
    }
    if (boardMoves.piece == 'blackKnight') {
      if (knightMoves(linha, coluna, boardMoves.line, boardMoves.column)) {
        set = true
      }
    }
    if (boardMoves.piece == 'whiteRookie') {
      if (rookieMoves(linha, coluna, boardMoves.line, boardMoves.column)) {
        set = true
      }
    }
    if (boardMoves.piece == 'blackRookie') {
      if (rookieMoves(linha, coluna, boardMoves.line, boardMoves.column)) {
        set = true
      }
    }
    if (boardMoves.piece == 'whiteBishop') {
      if (bishopMoves(linha, coluna, boardMoves.line, boardMoves.column)) {
        set = true
      }
    }
    if (boardMoves.piece == 'blackBishop') {
      if (bishopMoves(linha, coluna, boardMoves.line, boardMoves.column)) {
        set = true
      }
    }
    if (boardMoves.piece == 'whiteKing') {
      if (kingMoves(linha, coluna, boardMoves.line, boardMoves.column)) {
        set = true
      }
    }
    if (boardMoves.piece == 'blackKing') {
      if (kingMoves(linha, coluna, boardMoves.line, boardMoves.column)) {
        set = true
      }
    }
    if (boardMoves.piece == 'whiteQueen') {
      if (queenMoves(linha, coluna, boardMoves.line, boardMoves.column)) {
        set = true
      }
    }
    if (boardMoves.piece == 'blackQueen') {
      if (queenMoves(linha, coluna, boardMoves.line, boardMoves.column)) {
        set = true
      }
    }
    // if (boardMoves.piece == 'move') {
    // }
    return set
  }

  const setBoard = (linha, coluna, piece) => {
    let hasPiece = false

    // let moves = {
    //   wPawn() {
    //     posWPawn.forEach(function (item, index) {
    //       if (item.line == linha && item.column == coluna) {
    //         // console.log('tem peao')
    //         return true
    //       }
    //     })
    //   }
    // }

    if (piece == 'wPawn') {
      posWPawn.forEach(function (item, index) {
        if (item.line == linha && item.column == coluna) {
          hasPiece = true
        }
      })
    }

    if (piece == 'bPawn') {
      // console.log('coloca peao preto')
      posBPawn.forEach(function (item, index) {
        if (item.line == linha && item.column == coluna) {
          hasPiece = true
        }
      })
    }

    if (piece == 'wKnight') {
      posWKnight.forEach(function (item, index) {
        if (item.line == linha && item.column == coluna) {
          // console.log('tem cavalo')
          hasPiece = true
        }
      })
    }

    if (piece == 'bKnight') {
      posBKnight.forEach(function (item, index) {
        if (item.line == linha && item.column == coluna) {
          // console.log('tem cavalo')
          hasPiece = true
        }
      })
    }

    if (piece == 'wRookie') {
      posWRookie.forEach(function (item, index) {
        if (item.line == linha && item.column == coluna) {
          // console.log('tem cavalo')
          hasPiece = true
        }
      })
    }

    if (piece == 'bRookie') {
      posBRookie.forEach(function (item, index) {
        if (item.line == linha && item.column == coluna) {
          // console.log('tem cavalo')
          hasPiece = true
        }
      })
    }

    if (piece == 'wBishop') {
      posWBishop.forEach(function (item, index) {
        if (item.line == linha && item.column == coluna) {
          // console.log('tem cavalo')
          hasPiece = true
        }
      })
    }

    if (piece == 'bBishop') {
      posBBishop.forEach(function (item, index) {
        if (item.line == linha && item.column == coluna) {
          // console.log('tem cavalo')
          hasPiece = true
        }
      })
    }

    if (piece == 'wKing') {
      posWKing.forEach(function (item, index) {
        if (item.line == linha && item.column == coluna) {
          // console.log('tem cavalo')
          hasPiece = true
        }
      })
    }

    if (piece == 'bKing') {
      posBKing.forEach(function (item, index) {
        if (item.line == linha && item.column == coluna) {
          // console.log('tem cavalo')
          hasPiece = true
        }
      })
    }

    if (piece == 'wQueen') {
      posWQueen.forEach(function (item, index) {
        if (item.line == linha && item.column == coluna) {
          // console.log('tem cavalo')
          hasPiece = true
        }
      })
    }

    if (piece == 'bQueen') {
      posBQueen.forEach(function (item, index) {
        if (item.line == linha && item.column == coluna) {
          // console.log('tem cavalo')
          hasPiece = true
        }
      })
    }

    return hasPiece
  }

  // function setBoard() {
  //   let piece
  //   if (newBoard) {
  //   }
  //   return piece
  // }

  return (
    <>
      <div className="board">
        <table>
          <tbody>
            {linhas.map(linha => (
              <tr key={linha}>
                {colunas.map(function (coluna) {
                  let color = 'black'
                  let wPawn = setBoard(linha, coluna, 'wPawn')
                  let bPawn = setBoard(linha, coluna, 'bPawn')
                  let wKnight = setBoard(linha, coluna, 'wKnight')
                  let bKnight = setBoard(linha, coluna, 'bKnight')
                  let wRookie = setBoard(linha, coluna, 'wRookie')
                  let bRookie = setBoard(linha, coluna, 'bRookie')
                  let wBishop = setBoard(linha, coluna, 'wBishop')
                  let bBishop = setBoard(linha, coluna, 'bBishop')
                  let wKing = setBoard(linha, coluna, 'wKing')
                  let bKing = setBoard(linha, coluna, 'bKing')
                  let wQueen = setBoard(linha, coluna, 'wQueen')
                  let bQueen = setBoard(linha, coluna, 'bQueen')

                  console.log('renderizou')
                  if (linha % 2 == 0) {
                    if (coluna % 2 != 0) {
                      // setColor('white')
                      color = 'white'
                    }
                  } else {
                    if (coluna % 2 == 0) {
                      // setColor('white')
                      color = 'white'
                    }
                  }
                  return (
                    <td key={linha + coluna}>
                      <WhiteSquare
                        color={color}
                        id={coluna}
                        wPawn={wPawn}
                        wRookie={wRookie}
                        wKnight={wKnight}
                        wBishop={wBishop}
                        wQueen={wQueen}
                        wKing={wKing}
                        bPawn={bPawn}
                        bRookie={bRookie}
                        bKnight={bKnight}
                        bBishop={bBishop}
                        bQueen={bQueen}
                        bKing={bKing}
                        line={linha}
                        oldPiece={pieceToMove}
                        // newPiece={
                        //   !possibleMoves(coluna, linha) ? boardMoves : ''
                        // }
                        // newColumn={boardMoves.column}
                        // newLine={boardMoves.line}
                        possibleMoves={
                          possibleMoves(coluna, linha) == true &&
                          renderBoard == true
                            ? true
                            : false
                        }
                        renderBoard={renderBoard}
                        childToParent={childToParent}
                      />
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Board