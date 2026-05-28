import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';

export class MentorController {
  async listar(req: Request, res: Response) {
    try {
      const mentores = await prisma.usuario.findMany({
        where: {
          tipoPerfil: 'mentor',
        },
        include: {
          perfilMentor: true, // Traz os dados da tabela relacionada
        },
      });

      return res.json(mentores);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno ao buscar mentores' });
    }
  }

  // Futuramente colocamos aqui o 'buscarPorId', 'criar', etc.
}