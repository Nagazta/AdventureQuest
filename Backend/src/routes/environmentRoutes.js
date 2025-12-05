import express from "express";
import {
  initializeEnvironment,
  logInstructionEntry,
  logNPCInteraction,  
} from "../controllers/environmentController.js";

const router = express.Router();

router.post("/initialize", initializeEnvironment);
router.post("/instruction", logInstructionEntry);
router.post("/log-npc-interaction", logNPCInteraction);

export default router;
