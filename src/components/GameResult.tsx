import React, { useState, useEffect } from 'react';
import './GameResult.css';
import ChoiceCircle from './ChoiceCircle';
import { calculateWinner, getRandomChoice } from '../logic/game-logic';
import type { Choice, GameResult as Result, GameMode } from '../logic/game-logic';

interface GameResultProps {
    playerChoice: Choice;
    onPlayAgain: (scoreChange: number) => void;
    mode: GameMode;
}

const GameResult: React.FC<GameResultProps> = ({ playerChoice, onPlayAgain, mode }) => {
    const [houseChoice, setHouseChoice] = useState<Choice | null>(null);
    const [result, setResult] = useState<Result | null>(null);
    const [showHouse, setShowHouse] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            const choice = getRandomChoice(mode);
            setHouseChoice(choice);
            setShowHouse(true);
            setResult(calculateWinner(playerChoice, choice));
        }, 1000);

        return () => clearTimeout(timer);
    }, [playerChoice]);

    const handlePlayAgain = () => {
        let scoreChange = 0;
        if (result?.winner === 'player') scoreChange = 1;
        if (result?.winner === 'house') scoreChange = -1;
        onPlayAgain(scoreChange);
    };

    return (
        <div className={`game-result ${result ? 'has-result' : ''}`}>
            <div className="choice-block player-side">
                <p className="side-label">You Picked</p>
                <div className={`choice-container ${result?.winner === 'player' ? 'winner-bg' : ''}`}>
                    <ChoiceCircle choice={playerChoice} size="large" disabled />
                </div>
            </div>

            {result && (
                <div className="result-announcement">
                    <p className="result-text">{result.message}</p>
                    <button className="play-again-btn" onClick={handlePlayAgain}>
                        Play Again
                    </button>
                </div>
            )}

            <div className="choice-block house-side">
                <p className="side-label">The House Picked</p>
                <div className={`choice-container ${showHouse ? '' : 'placeholder'} ${result?.winner === 'house' ? 'winner-bg' : ''}`}>
                    {showHouse && houseChoice ? (
                        <ChoiceCircle choice={houseChoice} size="large" disabled />
                    ) : (
                        <div className="empty-house-slot" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default GameResult;
