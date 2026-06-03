import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';

export class AgendamentoController {
  async listar(req: Request, res: Response) {
    try {
      const { alunoId, mentorId } = req.query;
      
      const agendamentos = await prisma.agendamento.findMany({
        where: {
          ...(alunoId ? { alunoId: String(alunoId) } : {}),
          ...(mentorId ? { mentorId: String(mentorId) } : {}),
        },
        include: {
          mentor: {
            select: { nome: true, avatarUrl: true, email: true }
          },
          aluno: {
            select: { nome: true, avatarUrl: true, email: true }
          }
        },
        orderBy: { dataHoraInicio: 'asc' }
      });
      
      return res.json(agendamentos);
    } catch (error) {
      console.error('Erro ao buscar agendamentos:', error);
      return res.status(500).json({ error: 'Erro interno do servidor ao buscar agendamentos.' });
    }
  }
}
