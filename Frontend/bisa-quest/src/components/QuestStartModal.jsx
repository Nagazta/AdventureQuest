import React from "react";
import Button from "./Button";
import "./styles/QuestStartModal.css";

const QuestStartModal = ({ isOpen, questTitle, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="quest-modal-overlay">
      <div className="quest-modal-scroll">
        <div className="scroll-top"></div>
        <div className="scroll-content">
          <h2 className="quest-modal-title">Ready for Adventure?</h2>
          <div className="quest-modal-divider"></div>
          <p className="quest-modal-message">You're about to start the</p>
          <p className="quest-modal-quest-name">{questTitle}</p>
          <p className="quest-modal-encouragement">
            Let's go on an exciting journey!
          </p>
          <Button
            onClick={onConfirm}
            variant="primary"
            className="quest-modal-button"
          >
            Let's Go!
          </Button>
        </div>
        <div className="scroll-bottom"></div>
      </div>
    </div>
  );
};

export default QuestStartModal;
