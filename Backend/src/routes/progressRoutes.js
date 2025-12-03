import express from 'express';
import { checkProgress, saveProgress, resetProgress } from '../controllers/progressController.js';

const router = express.Router();

// GET /api/progress/:studentId/:questId - Check if progress exists
router.get('/:studentId/:questId', checkProgress);

// POST /api/progress/save - Save or update progress
router.post('/save', saveProgress);

// POST /api/progress/reset - Reset progress (new game)
router.post('/reset', resetProgress);

export default router;