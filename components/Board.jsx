import React from 'react'
import classes from './../../src/index.css'
import Square from './Square'

const Board = ({ squares, click, winningLine }) => {
  return (
    <div className={classes}>
      <div className="board">
        {squares.map((square, i) => (
          <Square
            key={i}
            value={square}
            onClick={() => click(i)}
            winningLine={winningLine}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;