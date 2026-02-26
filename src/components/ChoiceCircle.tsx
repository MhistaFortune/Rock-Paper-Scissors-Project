import React from 'react';
import './ChoiceCircle.css';
import rockIcon from '../../images/icon-rock.svg';
import paperIcon from '../../images/icon-paper.svg';
import scissorsIcon from '../../images/icon-scissors.svg';
import lizardIcon from '../../images/icon-lizard.svg';
import spockIcon from '../../images/icon-spock.svg';
import type { Choice } from '../logic/game-logic';

const icons: Record<Choice, string> = {
    rock: rockIcon,
    paper: paperIcon,
    scissors: scissorsIcon,
    lizard: lizardIcon,
    spock: spockIcon,
};

interface ChoiceCircleProps {
    choice: Choice;
    onClick?: (choice: Choice) => void;
    size?: 'small' | 'large';
    disabled?: boolean;
}

const ChoiceCircle: React.FC<ChoiceCircleProps> = ({ choice, onClick, size = 'small', disabled = false }) => {
    return (
        <button
            className={`choice-circle ${choice} ${size}`}
            onClick={() => onClick?.(choice)}
            disabled={disabled}
            aria-label={choice}
        >
            <div className="inner-white">
                <img src={icons[choice]} alt="" />
            </div>
        </button>
    );
};

export default ChoiceCircle;
