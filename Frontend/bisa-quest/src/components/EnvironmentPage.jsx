import { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import './styles/EnvironmentPage.css';

const EnvironmentPage = ({ 
  environmentType = 'village',
  backgroundImage,
  npcs = [], // Array of NPC objects with position, character image, name
  onNPCClick,
  playerCharacter // Path to player character image
}) => {
  const [playerPosition, setPlayerPosition] = useState({ x: 50, y: 50 });
  const [keysPressed, setKeysPressed] = useState({});

  // Keyboard movement
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      if (['w','a','s','d'].includes(key)) {
        e.preventDefault();
        setKeysPressed(prev => ({ ...prev, [key]: true }));
      }
    };
    const handleKeyUp = (e) => {
      const key = e.key.toLowerCase();
      if (['w','a','s','d'].includes(key)) {
        setKeysPressed(prev => ({ ...prev, [key]: false }));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useEffect(() => {
    const moveSpeed = 0.5;
    let animationFrameId;

    const updatePosition = () => {
      setPlayerPosition(prev => {
        let newX = prev.x;
        let newY = prev.y;
        if (keysPressed['w']) newY = Math.max(0, prev.y - moveSpeed);
        if (keysPressed['s']) newY = Math.min(90, prev.y + moveSpeed);
        if (keysPressed['a']) newX = Math.max(0, prev.x - moveSpeed);
        if (keysPressed['d']) newX = Math.min(90, prev.x + moveSpeed);
        return { x: newX, y: newY };
      });
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    if (Object.values(keysPressed).some(Boolean)) {
      animationFrameId = requestAnimationFrame(updatePosition);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [keysPressed]);

  return (
    <div className={`environment-page ${environmentType}`}>
      {/* Background */}
      <div className="environment-background" style={{ backgroundImage: `url(${backgroundImage})` }} />

      {/* NPCs */}
      {npcs && npcs.map((npc, index) => (
        <div 
          key={npc.npcId || index} 
          className="npc-on-map" 
          style={{ left: `${npc.x}%`, top: `${npc.y}%` }}
          onClick={() => onNPCClick?.(npc)}
        >
          <img src={npc.character} alt={npc.name} className="npc-image" />
          {npc.showName && <div className="npc-name-tag">{npc.name}</div>}
        </div>
      ))}

      {/* Player */}
      <div className="player-character" style={{ left: `${playerPosition.x}%`, top: `${playerPosition.y}%` }}>
        {playerCharacter ? <img src={playerCharacter} alt="Player" className="player-image" /> : <div className="player-placeholder">👤</div>}
      </div>

      {/* Progress Bar */}
      <ProgressBar progress={0} variant="environment" showLabel={true} />

      {/* Controls Hint */}
      <div className="controls-hint">Use W, A, S, D to move</div>
    </div>
  );
};

export default EnvironmentPage;
