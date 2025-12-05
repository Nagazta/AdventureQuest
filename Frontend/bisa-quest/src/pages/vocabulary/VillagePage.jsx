import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EnvironmentPage from '../../components/EnvironmentPage';
import Button from '../../components/Button';
import { environmentApi } from '../../services/environmentServices.js';

// Images
import VillageBackground from '../../assets/images/environments/village.png';
import NandoCharacter from '../../assets/images/characters/vocabulary/Village_Quest_NPC_1.png';
import LigayaCharacter from '../../assets/images/characters/vocabulary/Village_Quest_NPC_2.png';
import VicenteCharacter from '../../assets/images/characters/vocabulary/Village_Quest_NPC_3.png';
import PlayerCharacter from '../../assets/images/characters/Boy.png';

import './styles/VillagePage.css';

const VillagePage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [villageNPCs, setVillageNPCs] = useState([]);

  useEffect(() => {
    initializeVillage();
  }, []);

  const initializeVillage = async () => {
    setLoading(true);
    const studentId = localStorage.getItem('studentId');
    if (!studentId) {
      console.error("No student ID found in localStorage");
      setLoading(false);
      return;
    }
    console.log("Found studentId in localStorage:", studentId);

    // Frontend-defined NPCs
    const npcs = [
      { npcId: 'nando', name: 'Nando', x: 50, y: 35, character: NandoCharacter },
      { npcId: 'ligaya', name: 'Ligaya', x: 70, y: 45, character: LigayaCharacter },
      { npcId: 'vicente', name: 'Vicente', x: 20, y: 60, character: VicenteCharacter },
    ];
    setVillageNPCs(npcs);

    // Initialize environment in backend
    try {
      const response = await environmentApi.initializeEnvironment('village', studentId);
      if (!response.success) {
        console.error('Backend environment init failed:', response.error);
      }
    } catch (err) {
      console.error('Error initializing environment:', err);
    } finally {
      setLoading(false);
    }
  };

const handleNPCClick = async (npc) => {
  const studentId = localStorage.getItem("studentId");
  if (!studentId) return console.error("No student ID found");

  try {
    await environmentApi.logNPCInteraction({ studentId, npcName: npc.name });
    console.log("NPC interaction logged for:", npc.name);
  } catch (err) {
    console.error("Error logging NPC interaction:", err);
  }

  navigate("/student/instructions", {
    state: { npcId: npc.name.toLowerCase(), returnTo: "/student/village" },
  });
};


  const handleBackClick = () => navigate('/dashboard');

  if (loading) return <p>Loading village...</p>;

  return (
    <div className="village-page-wrapper">
      <Button variant="back" className="back-button-village-overlay" onClick={handleBackClick}>
        ← Back
      </Button>

      <EnvironmentPage
        environmentType="village"
        backgroundImage={VillageBackground}
        npcs={villageNPCs}
        onNPCClick={handleNPCClick}
        playerCharacter={PlayerCharacter}
      />
    </div>
  );
};

export default VillagePage;
