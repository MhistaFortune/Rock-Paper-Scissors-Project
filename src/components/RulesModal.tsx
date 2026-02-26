import React from 'react';
import './RulesModal.css';
import rulesOriginal from '../../images/image-rules.svg';
import rulesBonus from '../../images/image-rules-bonus.svg';
import closeIcon from '../../images/icon-close.svg';
import type { GameMode } from '../logic/game-logic';

interface RulesModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: GameMode;
}

const RulesModal: React.FC<RulesModalProps> = ({ isOpen, onClose, mode }) => {
  if (!isOpen) return null;

  const rulesImage = mode === 'original' ? rulesOriginal : rulesBonus;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Rules</h2>
          <button className="close-btn desktop" onClick={onClose} aria-label="Close rules">
            <img src={closeIcon} alt="" />
          </button>
        </div>
        <div className="rules-image">
          <img src={rulesImage} alt="Game rules" />
        </div>
        <button className="close-btn mobile" onClick={onClose} aria-label="Close rules">
          <img src={closeIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default RulesModal;

