import React from 'react';
import './GameSelection.css';
import pentagon from '../../images/bg-pentagon.svg';
import ChoiceCircle from './ChoiceCircle';
import type { Choice } from '../logic/game-logic';

interface GameSelectionProps {
    onSelect: (choice: Choice) => void;
}

const GameSelection: React.FC<GameSelectionProps> = ({ onSelect }) => {
    return (
        <div className="game-selection">
            <div className="pentagon-bg">
                <img src={pentagon} alt="" />
            </div>
            <div className="choices-grid">
                <div className="choice-wrapper scissors-pos">
                    <ChoiceCircle choice="scissors" onClick={onSelect} />
                </div>
                <div className="choice-wrapper spock-pos">
                    <ChoiceCircle choice="spock" onClick={onSelect} />
                </div>
                <div className="choice-wrapper paper-pos">
                    <ChoiceCircle choice="paper" onClick={onSelect} />
                </div>
                <div className="choice-wrapper lizard-pos">
                    <ChoiceCircle choice="lizard" onClick={onSelect} />
                </div>
                <div className="choice-wrapper rock-pos">
                    <ChoiceCircle choice="rock" onClick={onSelect} />
                </div>
            </div>
        </div>
    );
};

export default GameSelection;
