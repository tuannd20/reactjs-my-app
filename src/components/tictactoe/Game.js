import React, { useState } from "react";
import Board from "./Board";
import "./GameStyles.css";
import { calculateWinner } from "../../helpers";

function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);
  const handleClick = (index) => {
    const boardCopy = [...board];

    if (winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? "X" : "O";

    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
      {/* {winner ? `Winner is ${xIsNext ? "O" : "X"}` : ""} */}
      {winner && <div className="game-winner">Winner is {winner}</div>}
      <button onClick={handleResetGame} className="game-reset">
        Reset game
      </button>
    </div>
  );
}

export default Game;
