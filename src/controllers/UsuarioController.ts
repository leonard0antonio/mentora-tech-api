import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { prisma } from '../lib/prisma';

export class UsuarioController {

  // Método para criar um novo usuário (registro)
  async criar(req: Request, res: Response) {
    try {
      const { nome, email, senha, tipoPerfil } = req.body;

      // 1. Validações básicas
      if (!nome || !email || !senha || !tipoPerfil) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
      }

      if (tipoPerfil !== 'mentor' && tipoPerfil !== 'aluno') {
        return res.status(400).json({ error: 'O tipo de perfil deve ser "mentor" ou "aluno".' });
      }

      // 2. Verificar se o e-mail já existe no Supabase real
      const usuarioExistente = await prisma.usuario.findUnique({
        where: { email },
      });

      if (usuarioExistente) {
        return res.status(409).json({ error: 'Este e-mail já está em uso.' });
      }

      // 3. Encriptar a palavra-passe
      const salt = await bcrypt.genSalt(10);
      const senhaHash = await bcrypt.hash(senha, salt);

      // 4. Inserir no Supabase real (com Nested Write para criar o perfil se for mentor)
      const novoUsuario = await prisma.usuario.create({
        data: {
          nome,
          email,
          senha: senhaHash,
          tipoPerfil,
          perfilMentor: tipoPerfil === 'mentor' ? {
            create: {
              especialidades: [],
            }
          } : undefined,
        },
        select: {
          id: true,
          nome: true,
          email: true,
          tipoPerfil: true,
          criadoEm: true,
        }
      });

      return res.status(201).json({
        message: 'Conta criada com sucesso no banco de dados!',
        usuario: novoUsuario
      });

    } catch (error: any) {
      console.error('Erro na criação de utilizador:', error);
      return res.status(500).json({ error: 'Erro interno do servidor.', details: error.message || error.toString() });
    }
  }

  // Método de login para autenticar o usuário e gerar um token JWT
  async login(req: Request, res: Response) {
    try {
      const { email, senha } = req.body;

      if (!email || !senha) {
        return res.status(400).json({ error: 'E-mail e senha são obrigatórios.' });
      }

      // 1. Buscar o utilizador no banco pelo e-mail
      const usuario = await prisma.usuario.findUnique({
        where: { email },
      });

      if (!usuario) {
        return res.status(401).json({ error: 'E-mail ou senha inválidos.' });
      }

      // 2. Comparar a senha enviada com o hash encriptado do banco
      const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

      if (!senhaCorreta) {
        return res.status(401).json({ error: 'E-mail ou senha inválidos.' });
      }

      // 3. Gerar o Token JWT incluindo o ID e o tipo de perfil no payload
      const jwt = require('jsonwebtoken'); // Import dinâmico ou no topo do arquivo
      const token = jwt.sign(
        { id: usuario.id, tipoPerfil: usuario.tipoPerfil },
        process.env.JWT_SECRET as string,
        { expiresIn: '1d' } // Token expira em 1 dia
      );

      return res.json({
        message: 'Login realizado com sucesso!',
        token,
        usuario: {
          id: usuario.id,
          nome: usuario.nome,
          email: usuario.email,
          tipoPerfil: usuario.tipoPerfil
        }
      });

    } catch (error) {
      console.error('Erro no login:', error);
      return res.status(500).json({ error: 'Erro interno do servidor.' });
    }
  }

}