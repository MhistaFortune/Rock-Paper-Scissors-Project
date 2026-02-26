import React from 'react';
import './GameSelectionOriginal.css';
import triangle from '../../images/bg-triangle.svg';
import ChoiceCircle from './ChoiceCircle';
import type { Choice } from '../logic/game-logic';

interface GameSelectionOriginalProps {
    onSelect: (choice: Choice) => void;
}

const GameSelectionOriginal: React.FC<GameSelectionOriginalProps> = ({ onSelect }) => {
    return (
        <div className="game-selection-original">
            <img src={triangle} alt="" className="triangle-bg" />
            
            <div className="choice-row top-row">
                <div className="button-wrapper paper" onClick={() => onSelect('paper')}>
                    <ChoiceCircle choice="paper" />
                </div>
                <div className="button-wrapper scissors" onClick={() => onSelect('scissors')}>
                    <ChoiceCircle choice="scissors" />
                </div>
            </div>
            
            <div className="choice-row bottom-row">
                <div className="button-wrapper rock" onClick={() => onSelect('rock')}>
                    <ChoiceCircle choice="rock" />
                </div>
            </div>
        </div>
    );
};

export default GameSelectionOriginal;
