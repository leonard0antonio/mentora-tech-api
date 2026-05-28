import { Router } from 'express';
import { MentorController } from '../controllers/MentorController';

const mentorRoutes = Router();
const mentorController = new MentorController();

mentorRoutes.get('/', mentorController.listar);

export { mentorRoutes };