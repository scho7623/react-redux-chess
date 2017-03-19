import React from 'react'
import Square from '../Square'
import Knight from '../Knight'
import Queen from '../Queen'
import './style.less'

const renderSquare = (i, position, movePiece) => {
  const x = i % 8
  const y = Math.floor(i / 8)
  const black = (x + y) % 2 === 1
  const piece = (x === position[0] && y === position[1]) ? <Knight /> : null

  return (
    <div key={i}>
      <Square black={black} position={[x, y]} movePiece={movePiece}>
        {piece}
      </Square>
    </div>
  )
}

const Board = ({ knightPosition, movePiece }) => {
  const squares = []
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition, movePiece))
  }

  return (
    <div className="board">
      {squares}
    </div>
  )
}

export default Board
