// src/components/GameMenu.jsx
function GameMenu({ setCurrentGame }) {
    return (
        <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold text-indigo-700">🎮 Mini Game Hub</h1>
            <p className="text-gray-700 max-w-md mx-auto">
                Welcome! Choose a game to begin. Each game has its own scoreboard and rules.
            </p>
            {/* <div className="flex flex-col gap-4">
          <button onClick={() => setCurrentGame("rps")} className="game-button">
            Rock Paper Scissors
          </button>
          <button onClick={() => setCurrentGame("tic")} className="game-button">
            Tic Tac Toe
          </button>
          <button onClick={() => setCurrentGame("memory")} className="game-button">
            Memory Match
          </button>
        </div> */}
            <div className="flex flex-col gap-4 items-center justify-center">
                <button
                    onClick={() => setCurrentGame("rps")}
                    className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-2xl shadow-lg hover:scale-105 transition transform duration-300"
                >
                    Rock Paper Scissors
                </button>
                <button
                    onClick={() => setCurrentGame("tic")}
                    className="px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold rounded-2xl shadow-lg hover:scale-105 transition transform duration-300"
                >
                    Tic Tac Toe
                </button>
                <button
                    onClick={() => setCurrentGame("memory")}
                    className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-2xl shadow-lg hover:scale-105 transition transform duration-300"
                >
                    Memory Match
                </button>
            </div>

        </div>
    );
}

export default GameMenu;
