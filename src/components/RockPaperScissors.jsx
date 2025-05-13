// import { useState } from "react";

// const choices = ["rock", "paper", "scissors"];

// export default function RockPaperScissors() {
//   const [userChoice, setUserChoice] = useState("");
//   const [computerChoice, setComputerChoice] = useState("");
//   const [result, setResult] = useState("");

//   const play = (choice) => {
//     const comp = choices[Math.floor(Math.random() * 3)];
//     setUserChoice(choice);
//     setComputerChoice(comp);

//     if (choice === comp) setResult("Draw!");
//     else if (
//       (choice === "rock" && comp === "scissors") ||
//       (choice === "paper" && comp === "rock") ||
//       (choice === "scissors" && comp === "paper")
//     ) setResult("You win!");
//     else setResult("You lose!");
//   };

//   return (
//     <div className="text-center p-4 space-y-4">
//       <h2 className="text-2xl font-bold">Rock Paper Scissors</h2>
//       <div className="flex justify-center gap-4">
//         {choices.map((choice) => (
//           <button
//             key={choice}
//             onClick={() => play(choice)}
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           >
//             {choice}
//           </button>
//         ))}
//       </div>
//       <p>Your choice: {userChoice}</p>
//       <p>Computer choice: {computerChoice}</p>
//       <p className="font-semibold">{result}</p>
//     </div>
//   );
// }
// src/components/RockPaperScissors.jsx
import { useState } from "react";

const options = ["Rock", "Paper", "Scissors"];
const getResult = (player, comp) => {
  if (player === comp) return "draw";
  if ((player === "Rock" && comp === "Scissors") ||
      (player === "Paper" && comp === "Rock") ||
      (player === "Scissors" && comp === "Paper")) return "win";
  return "lose";
};

function RockPaperScissors({ onBack }) {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState({ win: 0, lose: 0, draw: 0 });

  const play = (choice) => {
    const comp = options[Math.floor(Math.random() * 3)];
    const res = getResult(choice, comp);
    setPlayerChoice(choice);
    setComputerChoice(comp);
    setResult(res);
    setScore(prev => ({
      ...prev,
      [res]: prev[res] + 1
    }));
  };

  return (
    <div className="text-center space-y-4">
      <h2 className="text-2xl font-bold">Rock Paper Scissors</h2>
      <p>Choose one to play against the computer.</p>
      <div className="flex justify-center gap-4">
        {options.map(opt => (
          <button key={opt} onClick={() => play(opt)} className="bg-indigo-500 text-white px-4 py-2 rounded">
            {opt}
          </button>
        ))}
      </div>

      {result && (
        <div>
          <p>You: {playerChoice}</p>
          <p>Computer: {computerChoice}</p>
          <p>Result: {result.toUpperCase()}</p>
        </div>
      )}

      <div className="space-x-4">
        <button onClick={onBack} className="bg-gray-500 text-white px-4 py-2 rounded">Back</button>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold">Scoreboard</h3>
        <p>Win: {score.win} | Lose: {score.lose} | Draw: {score.draw}</p>
      </div>
    </div>
  );
}

export default RockPaperScissors;