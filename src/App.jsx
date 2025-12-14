import Card from "./Components/Card";
import GameHeader from "./Components/GameHeader";
import WinMessage from "./Components/WinMessage";
import useGameLogic from "./hooks/useGameLogic";

const cardValues = [
  "🇳🇵",
  "🇦🇺",
  "🇦🇷",
  "🇮🇳",
  "🇨🇦",
  "🇺🇸",
  "🇵🇰",
  "🇮🇱",
  "🇳🇵",
  "🇦🇺",
  "🇦🇷",
  "🇮🇳",
  "🇨🇦",
  "🇺🇸",
  "🇵🇰",
  "🇮🇱",
];

function App() {
  const {cards,score,moves,isGameComplete,initializeGame,handleCardClick} = useGameLogic(cardValues);

  return (
    <div className="app">
      <GameHeader score={score} moves={moves} onReset={initializeGame} />

      {isGameComplete && <WinMessage moves={moves} />}
      <div className="grid grid-cols-4 gap-4 max-w-150 w-full">
        {cards.map((card) => (
          <Card key={card.id} card={card} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
}

export default App;
