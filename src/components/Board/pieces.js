export function knightMoves(linha, coluna, boardLine, boardColumn) {
  let set = false
  if (linha == boardLine - 2 && coluna == boardColumn - 1) {
    set = true
  } else if (linha == boardLine - 2 && coluna == boardColumn + 1) {
    set = true
  } else if (linha == boardLine + 2 && coluna == boardColumn - 1) {
    set = true
  } else if (linha == boardLine + 2 && coluna == boardColumn + 1) {
    set = true
  } else if (linha == boardLine + 1 && coluna == boardColumn + 2) {
    set = true
  } else if (linha == boardLine + 1 && coluna == boardColumn - 2) {
    set = true
  } else if (linha == boardLine - 1 && coluna == boardColumn + 2) {
    set = true
  } else if (linha == boardLine - 1 && coluna == boardColumn - 2) {
    set = true
  }
  return set
}

export function bPawnMoves(linha, coluna, boardLine, boardColumn) {
  let set = false
  if (boardLine == 1) {
    if (linha == boardLine + 2 && coluna == boardColumn) {
      set = true
    }
  }
  if (linha == boardLine + 1 && coluna == boardColumn) {
    set = true
  }
  return set
}

export function rookieMoves(linha, coluna, boardLine, boardColumn) {
  let set = false
  if (linha == boardLine) {
    set = true
  } else if (coluna == boardColumn) {
    set = true
  }

  return set
}

export function kingMoves(linha, coluna, boardLine, boardColumn) {
  let set = false
  if (linha == boardLine && coluna == boardColumn + 1) {
    set = true
  }
  if (linha == boardLine && coluna == boardColumn - 1) {
    set = true
  }
  if (linha == boardLine + 1 && coluna == boardColumn + 1) {
    set = true
  }
  if (linha == boardLine + 1 && coluna == boardColumn) {
    set = true
  }
  if (linha == boardLine + 1 && coluna == boardColumn - 1) {
    set = true
  }
  if (linha == boardLine - 1 && coluna == boardColumn + 1) {
    set = true
  }
  if (linha == boardLine - 1 && coluna == boardColumn) {
    set = true
  }
  if (linha == boardLine - 1 && coluna == boardColumn - 1) {
    set = true
  }
  return set
}

export function queenMoves(linha, coluna, boardLine, boardColumn) {
  let set = false
  if (linha == boardLine) {
    set = true
  } else if (coluna == boardColumn) {
    set = true
  } else if (coluna + boardLine == linha + boardColumn) {
    set = true
  } else if (coluna - boardColumn + 7 == 7 - linha + boardLine) {
    set = true
  } // else if (linha == coluna + 2) {
  //   set = true
  // }
  return set
}

export function bishopMoves(linha, coluna, boardLine, boardColumn) {
  let set = false
  if (coluna + boardLine == linha + boardColumn) {
    set = true
  } else if (coluna - boardColumn + 7 == 7 - linha + boardLine) {
    set = true
  }
  return set
}
export function checkPieces() {}
