
import { useState } from "react";

const cardsList = ["🍎", "🍌", "🍇", "🍓"];

function MemoryGame({ onBack }) {
  const [cards, setCards] = useState(shuffle([...cardsList, ...cardsList]));
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);

  function shuffle(arr) {
    return arr.sort(() => 0.5 - Math.random());
  }

  const handleFlip = (idx) => {
    if (flipped.includes(idx) || matched.includes(cards[idx])) return;
    const newFlipped = [...flipped, idx];
    setFlipped(newFlipped);
    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      if (cards[first] === cards[second]) {
        setMatched([...matched, cards[first]]);
      }
      setTimeout(() => setFlipped([]), 1000);
    }
  };

  return (
    <div className="text-center space-y-4">
      <h2 className="text-2xl font-bold">Memory Match</h2>
      <p>Flip two cards to find a match.</p>

      <div className="grid grid-cols-4 gap-2 max-w-sm mx-auto">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="w-16 h-16 bg-white border flex items-center justify-center cursor-pointer text-2xl"
            onClick={() => handleFlip(idx)}
          >
            {flipped.includes(idx) || matched.includes(card) ? card : "❓"}
          </div>
        ))}
      </div>

      <div className="space-x-4">
        <button onClick={onBack} className="bg-gray-500 text-white px-4 py-2 rounded">Back</button>
      </div>

      <p className="mt-4">Matches Found: {matched.length}</p>
    </div>
  );
}

export default MemoryGame;
