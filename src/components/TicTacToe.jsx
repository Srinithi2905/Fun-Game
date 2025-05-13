
import { useState } from "react";

function TicTacToe({ onBack }) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [score, setScore] = useState({ player: 0, computer: 0, draw: 0 });
  const [gameOver, setGameOver] = useState(false);

  const checkWinner = (newBoard) => {
    const winPatterns = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6]
    ];
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[b] === newBoard[c]) {
        return newBoard[a];
      }
    }
    if (newBoard.every(Boolean)) return "draw";
    return null;
  };

  const makeMove = (idx) => {
    if (!isPlayerTurn || board[idx] || gameOver) return;
    const newBoard = [...board];
    newBoard[idx] = "X";
    const result = checkWinner(newBoard);
    if (result) return endGame(result);
    setBoard(newBoard);
    setIsPlayerTurn(false);
    setTimeout(() => makeAIMove(newBoard), 500);
  };

  const makeAIMove = (newBoard) => {
    const empty = newBoard.map((val, i) => val === null ? i : null).filter(i => i !== null);
    const move = empty[Math.floor(Math.random() * empty.length)];
    newBoard[move] = "O";
    const result = checkWinner(newBoard);
    if (result) return endGame(result);
    setBoard(newBoard);
    setIsPlayerTurn(true);
  };

  const endGame = (result) => {
    setGameOver(true);
    if (result === "X") setScore(s => ({ ...s, player: s.player + 1 }));
    else if (result === "O") setScore(s => ({ ...s, computer: s.computer + 1 }));
    else setScore(s => ({ ...s, draw: s.draw + 1 }));
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
    setGameOver(false);
  };

  return (
    <div className="text-center space-y-4">
      <h2 className="text-2xl font-bold">Tic Tac Toe</h2>
      <p>Play against the computer. You are "X", computer is "O".</p>

      <div className="grid grid-cols-3 gap-2 w-60 mx-auto">
        {board.map((cell, idx) => (
          <div key={idx} onClick={() => makeMove(idx)}
               className="w-16 h-16 flex items-center justify-center bg-white text-2xl border border-gray-400 cursor-pointer">
            {cell}
          </div>
        ))}
      </div>

      <div className="space-x-4">
        <button onClick={onBack} className="bg-gray-500 text-white px-4 py-2 rounded">Back</button>
        <button onClick={resetGame} className="bg-green-600 text-white px-4 py-2 rounded">Submit / Restart</button>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold">Scoreboard</h3>
        <p>Player: {score.player} | Computer: {score.computer} | Draws: {score.draw}</p>
      </div>
    </div>
  );
}

export default TicTacToe;