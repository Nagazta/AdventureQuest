import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import SidebarNavigation from "../../components/SidebarNavigation";
import QuestCard from "../../components/QuestCard";
import Village from "../../assets/images/cardsImage/village.png";
import Forest from "../../assets/images/cardsImage/forest.png";
import Kingdom from "../../assets/images/cardsImage/kingdom.png";
import Throne from "../../assets/images/cardsImage/throne.png";
import "./styles/StudentDashboard.css";
import QuestStartModal from "../../components/QuestStartModal";

const StudentDashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleTabClose = () => {
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("session");
    };

    window.addEventListener("beforeunload", handleTabClose);

    return () => {
      window.removeEventListener("beforeunload", handleTabClose);
    };
  }, []);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const quests = [
    {
      id: 1,
      title: "Vocabulary Quest",
      subtitle: "Village Theme",
      description: "Explore the village and learn new words",
      progress: 45,
      image: Village,
    },
    {
      id: 2,
      title: "Synonyms & Antonyms Quest",
      subtitle: "Forest Theme",
      description: "Journey through the magical forest",
      progress: 30,
      image: Forest,
    },
    {
      id: 3,
      title: "Compound Quest",
      subtitle: "Castle Theme",
      description: "Master word Building in the Castle",
      progress: 60,
      image: Kingdom,
    },
    {
      id: 4,
      title: "Narrative Problem Solving Quest",
      subtitle: "Kingdom Theme",
      description: "Apply your skills in the Kingdom",
      progress: 15,
      image: Throne,
    },
  ];

  const [showQuestModal, setShowQuestModal] = React.useState(false);
  const [selectedQuest, setSelectedQuest] = React.useState(null);

  const handleStartQuest = (questId) => {
    // Only allow Quest 1 (Vocabulary Quest) for now
    if (questId !== 1) {
      alert("🔒 This quest is locked! Complete the previous quest first.");
      return;
    }

    const quest = quests.find((q) => q.id === questId);
    setSelectedQuest(quest);
    setShowQuestModal(true);
  };

  const handleConfirmQuest = () => {
    setShowQuestModal(false);
    navigate("/student/characterSelection");
  };

  return (
    <div className="dashboard-container">
      <SidebarNavigation onLogout={handleLogout} />

      <div className="main-content">
        <div className="quests-grid">
          {quests.map((quest) => (
            <QuestCard
              key={quest.id}
              quest={quest}
              onStartQuest={handleStartQuest}
            />
          ))}
        </div>

        <div className="decorative-clouds">
          <div className="cloud cloud-1"></div>
          <div className="cloud cloud-2"></div>
          <div className="cloud cloud-3"></div>
        </div>
      </div>

      <QuestStartModal
        isOpen={showQuestModal}
        questTitle={selectedQuest?.title}
        onConfirm={handleConfirmQuest}
      />
    </div>
  );
};

export default StudentDashboard;
