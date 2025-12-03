import express from 'express';
import { getStudentByUserId } from '../controllers/studentController.js';

const router = express.Router();

router.get('/by-user/:userId', getStudentByUserId);

export default router;