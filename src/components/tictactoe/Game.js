import React, { useReducer, useState } from "react";
import Board from "./Board";
import "./GameStyles.css";
import { calculateWinner } from "../../helpers";

const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      const { board, xIsNext } = state;
      const { index, winner } = action.payload;

      if (winner || board[index]) return state;

      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board[index] = xIsNext ? "X" : "O";
      nextState.xIsNext = !xIsNext;

      return nextState;
    }

    case "RESET": {
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board = Array(9).fill(null);
      nextState.xIsNext = true;
      return nextState;
    }

    default:
      console.log("Error");
      break;
  }
  return state;
};

function Game() {
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true);

  const [state, dispatch] = useReducer(gameReducer, initialState);
  // const action = { type: "CLICK", payload: {} };

  const winner = calculateWinner(state.board);
  const handleClick = (index) => {
    // const boardCopy = [...board];

    // if (winner || boardCopy[index]) return;
    dispatch({
      type: "CLICK",
      payload: {
        index,
        winner,
      },
    });
    // boardCopy[index] = xIsNext ? "X" : "O";

    // setBoard(boardCopy);
    // setXIsNext(!xIsNext);
  };

  const handleResetGame = () => {
    // setBoard(Array(9).fill(null));
    // setXIsNext(true);
    dispatch({
      type: "RESET",
    });
  };

  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      {/* {winner ? `Winner is ${xIsNext ? "O" : "X"}` : ""} */}
      {winner && <div className="game-winner">Winner is {winner}</div>}
      <button onClick={handleResetGame} className="game-reset">
        Reset game
      </button>
    </div>
  );
}

export default Game;
