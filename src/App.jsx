import { useState } from "react";
import GameMenu from "./components/GameMenu";
import RockPaperScissors from "./components/RockPaperScissors";
import TicTacToe from "./components/TicTacToe";
import MemoryGame from "./components/MemoryGame";

function App() {
  const [currentGame, setCurrentGame] = useState("");

  const handleBack = () => setCurrentGame("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 p-6 flex items-center justify-center">
      {!currentGame && <GameMenu setCurrentGame={setCurrentGame} />}
      {currentGame === "rps" && <RockPaperScissors onBack={handleBack} />}
      {currentGame === "tic" && <TicTacToe onBack={handleBack} />}
      {currentGame === "memory" && <MemoryGame onBack={handleBack} />}
    </div>
  );
}

export default App;
