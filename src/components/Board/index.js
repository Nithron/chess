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
import Timer from '../Timer'
import Clock from '../Clock'
import {
  knightMoves,
  rookieMoves,
  wPawnMoves,
  bPawnMoves,
  wPawnTake,
  bPawnTake,
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
  const [wRCastle, setWRCastle] = useState(true)
  const [wLCastle, setWLCastle] = useState(true)
  const [bRCastle, setBRCastle] = useState(true)
  const [bLCastle, setBLCastle] = useState(true)

  const [color, setColor] = useState('white')
  const [column, setColumn] = useState(0)
  const [whiteToMove, setWhiteToMove] = useState(true)
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
    console.log(pieceToMove)
    let rCastle = false
    let lCastle = false

    const exec = {
      whitePawn: function () {
        posWPawn.forEach(function (item, index) {
          if (
            item.line == pieceToMove.line &&
            item.column == pieceToMove.column
          ) {
            posWPawn.splice(index, 1)
          }
        })
        if (boardMoves.line == 0) {
          posWQueen.push({ line: boardMoves.line, column: boardMoves.column })
        } else {
          posWPawn.push({ line: boardMoves.line, column: boardMoves.column })
        }
      },

      blackPawn: function () {
        posBPawn.forEach(function (item, index) {
          if (
            item.line == pieceToMove.line &&
            item.column == pieceToMove.column
          ) {
            posBPawn.splice(index, 1)
          }
        })
        if (boardMoves.line == 0) {
          posBQueen.push({ line: boardMoves.line, column: boardMoves.column })
        } else {
          posBPawn.push({ line: boardMoves.line, column: boardMoves.column })
        }
      },

      whiteKnight: function () {
        posWKnight.forEach(function (item, index) {
          if (
            item.line == pieceToMove.line &&
            item.column == pieceToMove.column
          ) {
            posWKnight.splice(index, 1)
          }
        })
        posWKnight.push({ line: boardMoves.line, column: boardMoves.column })
      },

      blackKnight: function () {
        posBKnight.forEach(function (item, index) {
          if (
            item.line == pieceToMove.line &&
            item.column == pieceToMove.column
          ) {
            posBKnight.splice(index, 1)
          }
        })
        posBKnight.push({ line: boardMoves.line, column: boardMoves.column })
      },

      whiteRookie: function () {
        posWRookie.forEach(function (item, index) {
          if (
            item.line == pieceToMove.line &&
            item.column == pieceToMove.column
          ) {
            posWRookie.splice(index, 1)
            if (item.column == 7) {
              setWRCastle(false)
            } else if (item.column == 0) {
              setWLCastle(false)
            }
          }
        })
        posWRookie.push({ line: boardMoves.line, column: boardMoves.column })
      },

      blackRookie: function () {
        posBRookie.forEach(function (item, index) {
          if (
            item.line == pieceToMove.line &&
            item.column == pieceToMove.column
          ) {
            posBRookie.splice(index, 1)
            if (item.column == 7) {
              setBRCastle(false)
            } else if (item.column == 0) {
              setBLCastle(false)
            }
          }
        })
        posBRookie.push({ line: boardMoves.line, column: boardMoves.column })
      },

      whiteBishop: function () {
        posWBishop.forEach(function (item, index) {
          if (
            item.line == pieceToMove.line &&
            item.column == pieceToMove.column
          ) {
            posWBishop.splice(index, 1)
          }
        })
        posWBishop.push({ line: boardMoves.line, column: boardMoves.column })
      },

      blackBishop: function () {
        posBBishop.forEach(function (item, index) {
          if (
            item.line == pieceToMove.line &&
            item.column == pieceToMove.column
          ) {
            posBBishop.splice(index, 1)
          }
        })
        posBBishop.push({ line: boardMoves.line, column: boardMoves.column })
      },

      whiteKing: function () {
        posWKing.forEach(function (item, index) {
          if (
            item.line == pieceToMove.line &&
            item.column == pieceToMove.column
          ) {
            posWKing.splice(index, 1)
            if (item.column + 2 == boardMoves.column) {
              rCastle = true
            }
            if (item.column - 2 == boardMoves.column) {
              lCastle = true
            }
          }
        })
        posWKing.push({ line: boardMoves.line, column: boardMoves.column })
        setWRCastle(false)
        setWLCastle(false)
        if (rCastle) {
          posWRookie.splice(1, 1)
          posWRookie.push({ line: 7, column: 5 })
        }
        if (lCastle) {
          posWRookie.splice(0, 1)
          posWRookie.push({ line: 7, column: 3 })
        }
        rCastle = false
        lCastle = false
      },

      blackKing: function () {
        posBKing.forEach(function (item, index) {
          if (
            item.line == pieceToMove.line &&
            item.column == pieceToMove.column
          ) {
            posBKing.splice(index, 1)
            if (item.column + 2 == boardMoves.column) {
              rCastle = true
            }
            if (item.column - 2 == boardMoves.column) {
              lCastle = true
            }
          }
        })
        posBKing.push({ line: boardMoves.line, column: boardMoves.column })
        setBRCastle(false)
        setBLCastle(false)
        if (rCastle) {
          posBRookie.splice(1, 1)
          posBRookie.push({ line: 0, column: 5 })
        }
        if (lCastle) {
          posBRookie.splice(0, 1)
          posBRookie.push({ line: 0, column: 3 })
        }
        rCastle = false
        lCastle = false
      },

      whiteQueen: function () {
        posWQueen.forEach(function (item, index) {
          if (
            item.line == pieceToMove.line &&
            item.column == pieceToMove.column
          ) {
            posWQueen.splice(index, 1)
          }
        })
        posWQueen.push({ line: boardMoves.line, column: boardMoves.column })
      },

      blackQueen: function () {
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
    }

    if (boardMoves.take) {
      removePiece()
    }
    if (!takePiece) {
      const execFunction = exec[pieceToMove.piece]
      if (pieceToMove.piece && pieceToMove.piece != 'move') {
        execFunction()
      }
    }
    setWhiteToMove(!whiteToMove)
    console.log(whiteToMove)
  }

  useEffect(() => {
    // console.log(pieceToMove)
    setRenderBoard(!renderBoard)
    // if (boardMoves.take) {
    //   takesPiece()
    //   console.log('ta vindo pra ca certo')
    // } else
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
    const possible = {
      whitePawn: function () {
        set = wPawnMoves(linha, coluna, boardMoves.line, boardMoves.column)
      },

      blackPawn: function () {
        set = bPawnMoves(linha, coluna, boardMoves.line, boardMoves.column)
      },

      whiteKnight: function () {
        set = knightMoves(linha, coluna, boardMoves.line, boardMoves.column)
      },

      blackKnight: function () {
        possible.whiteKnight()
      },

      whiteRookie: function () {
        set = rookieMoves(linha, coluna, boardMoves.line, boardMoves.column)
      },

      blackRookie: function () {
        possible.whiteRookie()
      },

      whiteBishop: function () {
        set = bishopMoves(linha, coluna, boardMoves.line, boardMoves.column)
      },

      blackBishop: function () {
        possible.whiteBishop()
      },

      whiteKing: function () {
        set = kingMoves(
          linha,
          coluna,
          boardMoves.line,
          boardMoves.column,
          wLCastle,
          wRCastle
        )
      },

      blackKing: function () {
        set = kingMoves(
          linha,
          coluna,
          boardMoves.line,
          boardMoves.column,
          bLCastle,
          bRCastle
        )
      },

      whiteQueen: function () {
        set = queenMoves(linha, coluna, boardMoves.line, boardMoves.column)
      },

      blackQueen: function () {
        possible.whiteQueen()
      }
    }
    const possibleMovesFunction = possible[boardMoves.piece]
    if (boardMoves.piece && boardMoves.piece != 'move') {
      possibleMovesFunction()
    }

    // if (boardMoves.piece == 'move') {
    // }
    return set
  }

  const setBoard = (linha, coluna, piece) => {
    let hasPiece = false

    let moves = {
      wPawn: function () {
        posWPawn.forEach(function (item, index) {
          if (item.line == linha && item.column == coluna) {
            hasPiece = true
          }
        })
        return hasPiece
        // })
      },
      bPawn: function () {
        posBPawn.forEach(function (item, index) {
          if (item.line == linha && item.column == coluna) {
            hasPiece = true
          }
        })
        return hasPiece
      },
      wRookie: function () {
        posWRookie.forEach(function (item, index) {
          if (item.line == linha && item.column == coluna) {
            hasPiece = true
          }
        })
        return hasPiece
      },
      bRookie: function () {
        posBRookie.forEach(function (item, index) {
          if (item.line == linha && item.column == coluna) {
            hasPiece = true
          }
        })
        return hasPiece
      },
      wKnight: function () {
        posWKnight.forEach(function (item, index) {
          if (item.line == linha && item.column == coluna) {
            hasPiece = true
          }
        })
        return hasPiece
      },
      bKnight: function () {
        posBKnight.forEach(function (item, index) {
          if (item.line == linha && item.column == coluna) {
            hasPiece = true
          }
        })
        return hasPiece
      },
      wBishop: function () {
        posWBishop.forEach(function (item, index) {
          if (item.line == linha && item.column == coluna) {
            hasPiece = true
          }
        })
        return hasPiece
      },
      bBishop: function () {
        posBBishop.forEach(function (item, index) {
          if (item.line == linha && item.column == coluna) {
            hasPiece = true
          }
        })
        return hasPiece
      },
      wQueen: function () {
        posWQueen.forEach(function (item, index) {
          if (item.line == linha && item.column == coluna) {
            hasPiece = true
          }
        })
        return hasPiece
      },
      bQueen: function () {
        posBQueen.forEach(function (item, index) {
          if (item.line == linha && item.column == coluna) {
            hasPiece = true
          }
        })
        return hasPiece
      },
      wKing: function () {
        posWKing.forEach(function (item, index) {
          if (item.line == linha && item.column == coluna) {
            hasPiece = true
          }
        })
        return hasPiece
      },
      bKing: function () {
        posBKing.forEach(function (item, index) {
          if (item.line == linha && item.column == coluna) {
            hasPiece = true
          }
        })
      }
    }
    const setBoardFunction = moves[piece]
    setBoardFunction()

    return hasPiece
  }

  function removePiece() {
    console.log(boardMoves)
    posWQueen.forEach(function (item, index) {
      if (item.line == boardMoves.line && item.column == boardMoves.column) {
        posWQueen.splice(index, 1)
      }
    })
    posBQueen.forEach(function (item, index) {
      if (item.line == boardMoves.line && item.column == boardMoves.column) {
        posBQueen.splice(index, 1)
      }
    })

    posWPawn.forEach(function (item, index) {
      if (item.line == boardMoves.line && item.column == boardMoves.column) {
        posWPawn.splice(index, 1)
      }
    })
    posBPawn.forEach(function (item, index) {
      if (item.line == boardMoves.line && item.column == boardMoves.column) {
        posBPawn.splice(index, 1)
      }
    })

    posWKnight.forEach(function (item, index) {
      if (item.line == boardMoves.line && item.column == boardMoves.column) {
        posWKnight.splice(index, 1)
      }
    })
    posBKnight.forEach(function (item, index) {
      if (item.line == boardMoves.line && item.column == boardMoves.column) {
        posBKnight.splice(index, 1)
      }
    })

    posWRookie.forEach(function (item, index) {
      if (item.line == boardMoves.line && item.column == boardMoves.column) {
        posWRookie.splice(index, 1)
      }
    })
    posBRookie.forEach(function (item, index) {
      if (item.line == boardMoves.line && item.column == boardMoves.column) {
        posBRookie.splice(index, 1)
      }
    })

    posWBishop.forEach(function (item, index) {
      if (item.line == boardMoves.line && item.column == boardMoves.column) {
        posWBishop.splice(index, 1)
      }
    })
    posBBishop.forEach(function (item, index) {
      if (item.line == boardMoves.line && item.column == boardMoves.column) {
        posBBishop.splice(index, 1)
      }
    })
  }

  // function setBoard() {
  //   let piece
  //   if (newBoard) {
  //   }
  //   return piece
  // }

  return (
    <div className="content">
      <div className="board">
        <table>
          <tbody>
            {linhas.map(linha => (
              <tr key={linha}>
                {colunas.map(function (coluna) {
                  let color = 'white'
                  let wPawn = setBoard(linha, coluna, 'wPawn')
                  let bPawn = setBoard(linha, coluna, 'bPawn')
                  let wKing = setBoard(linha, coluna, 'wKing')
                  let bKing = setBoard(linha, coluna, 'bKing')
                  let wKnight = setBoard(linha, coluna, 'wKnight')
                  let bKnight = setBoard(linha, coluna, 'bKnight')
                  let wRookie = setBoard(linha, coluna, 'wRookie')
                  let bRookie = setBoard(linha, coluna, 'bRookie')
                  let wBishop = setBoard(linha, coluna, 'wBishop')
                  let bBishop = setBoard(linha, coluna, 'bBishop')
                  let wQueen = setBoard(linha, coluna, 'wQueen')
                  let bQueen = setBoard(linha, coluna, 'bQueen')
                  // console.log(
                  //   'linha : ' +
                  //     linha +
                  //     ' coluna: ' +
                  //     coluna +
                  //     ' pode mexer aqui: ' +
                  //     possibleMoves(linha, coluna)
                  // )

                  console.log('renderizou')
                  if (linha % 2 == 0) {
                    if (coluna % 2 != 0) {
                      // setColor('white')
                      color = 'black'
                    }
                  } else {
                    if (coluna % 2 == 0) {
                      // setColor('white')
                      color = 'black'
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
                        whiteToMove={whiteToMove}
                        line={linha}
                        oldPiece={pieceToMove}
                        // newPiece={
                        //   !possibleMoves(coluna, linha) ? boardMoves : ''
                        // }
                        // newColumn={boardMoves.column}
                        // newLine={boardMoves.line}
                        possibleMoves={possibleMoves(coluna, linha)}
                        // renderBoard={renderBoard}
                        childToParent={childToParent}
                        pieceToMove={pieceToMove}
                      />
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="clock">
        {/* <Timer whiteToMove={whiteToMove} time="00:10:00" /> */}
        {/* <Timer whiteToMove={!whiteToMove} time="00:10:00" /> */}
        {/* <Clock /> */}
      </div>
    </div>
  )
}

export default Board
