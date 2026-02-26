import React from 'react';
import './Header.css';
import logoOriginal from '../../images/logo.svg';
import logoBonus from '../../images/logo-bonus.svg';
import type { GameMode } from '../logic/game-logic';

interface HeaderProps {
    score: number;
    mode: GameMode;
}

const Header: React.FC<HeaderProps> = ({ score, mode }) => {
    const logo = mode === 'original' ? logoOriginal : logoBonus;
    return (
        <header className="game-header">
            <div className="logo-container">
                <img src={logo} alt={mode === 'original' ? "Rock Paper Scissors" : "Rock Paper Scissors Lizard Spock"} />
            </div>
            <div className="score-board">
                <p className="score-label">Score</p>
                <p className="score-value">{score}</p>
            </div>
        </header>
    );
};

export default Header;

