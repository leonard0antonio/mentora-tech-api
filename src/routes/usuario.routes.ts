import { Router } from 'express';
import { UsuarioController } from '../controllers/UsuarioController';

const usuarioRoutes = Router();
const usuarioController = new UsuarioController();

usuarioRoutes.post('/cadastro', usuarioController.criar);
usuarioRoutes.post('/login', usuarioController.login); 

export { usuarioRoutes };