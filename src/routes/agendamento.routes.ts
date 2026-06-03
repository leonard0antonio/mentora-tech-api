import { Router } from 'express';
import { AgendamentoController } from '../controllers/AgendamentoController';

export const agendamentoRoutes = Router();
const agendamentoController = new AgendamentoController();

agendamentoRoutes.get('/', agendamentoController.listar);
