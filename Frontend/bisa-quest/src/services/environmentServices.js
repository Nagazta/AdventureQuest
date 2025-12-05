const BASE_URL = import.meta.env.VITE_API_URL;

export const environmentApi = {
  initializeEnvironment: async (environmentType, studentId) => {
    try {
      const response = await fetch(`${BASE_URL}/initialize`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studentId, environmentType }),
      });
      return await response.json();
    } catch (err) {
      console.error("Fetch error in initializeEnvironment:", err);
      throw err;
    }
  },

   logNPCInteraction: async ({ studentId, npcName }) => {
    try {
        const response = await fetch("http://localhost:5000/log-npc-interaction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studentId, npcName })
        });

        const data = await response.json();
        console.log("Frontend: Response from logNPCInteraction:", data);

        if (!data.success) throw new Error(data.error);

        return data;
    } catch (err) {
        console.error("Frontend: Error logging NPC interaction:", err);
        throw err;
    }
    },
};

