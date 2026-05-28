import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import { mentorRoutes } from './routes/mentor.routes';
import { usuarioRoutes } from './routes/usuario.routes'; // <-- Importação nova

const app = express();

app.use(cors());
app.use(express.json());

// Injetando as rotas
app.use('/api/mentores', mentorRoutes);
app.use('/api/usuarios', usuarioRoutes); // <-- Rota nova

app.get('/api/health', (req, res) => {
  return res.json({ status: 'ok', message: 'API da Mentora Tech a rodar com Prisma! 🚀' });
});

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Servidor a rodar na porta ${PORT}`);
});