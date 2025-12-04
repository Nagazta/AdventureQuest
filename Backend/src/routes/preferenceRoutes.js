import express from 'express';
import {
    saveCharacterPreference,
    saveLanguagePreference,
    getPreferences
} from '../controllers/preferenceController.js';

const router = express.Router();

// POST /api/preferences/character - Save character selection
router.post('/character', saveCharacterPreference);

// POST /api/preferences/language - Save language selection
router.post('/language', saveLanguagePreference);

// GET /api/preferences?student_id=xxx&quest_id=1 - Get preferences
router.get('/', getPreferences);

export default router;