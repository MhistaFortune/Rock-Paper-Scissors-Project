import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import GameSelection from './components/GameSelection';
import GameSelectionOriginal from './components/GameSelectionOriginal';
import GameResult from './components/GameResult';
import RulesModal from './components/RulesModal';
import InstallPWA from './components/InstallPWA';
import type { Choice, GameMode } from './logic/game-logic';

function App() {
  const [score, setScore] = useState(() => {
    const saved = localStorage.getItem('rps-score');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [gameMode, setGameMode] = useState<GameMode>(() => {
    const saved = localStorage.getItem('rps-mode');
    return (saved as GameMode) || 'bonus';
  });

  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [isRulesOpen, setIsRulesOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('rps-score', score.toString());
  }, [score]);

  useEffect(() => {
    localStorage.setItem('rps-mode', gameMode);
  }, [gameMode]);

  const handleSelect = (choice: Choice) => {
    setPlayerChoice(choice);
  };

  const handlePlayAgain = (scoreChange: number) => {
    setScore(prev => Math.max(0, prev + scoreChange));
    setPlayerChoice(null);
  };

  const toggleMode = () => {
    setGameMode(prev => prev === 'original' ? 'bonus' : 'original');
    setPlayerChoice(null); // Reset current game if switching mode
  };

  return (
    <main className="app-container">
      <InstallPWA />
      <Header score={score} mode={gameMode} />

      {!playerChoice ? (
        gameMode === 'original' ? (
          <GameSelectionOriginal onSelect={handleSelect} />
        ) : (
          <GameSelection onSelect={handleSelect} />
        )
      ) : (
        <GameResult playerChoice={playerChoice} onPlayAgain={handlePlayAgain} mode={gameMode} />
      )}

      <div className="bottom-buttons">
        <button className="mode-btn" onClick={toggleMode}>
          {gameMode === 'original' ? 'Bonus Mode' : 'Original Mode'}
        </button>
        <button className="rules-btn" onClick={() => setIsRulesOpen(true)}>
          Rules
        </button>
      </div>

      <RulesModal isOpen={isRulesOpen} onClose={() => setIsRulesOpen(false)} mode={gameMode} />

      {/* <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
        Coded by <a href="#">Mhista Fortune</a>.
      </div> */}
    </main>
  );
}

export default App;

