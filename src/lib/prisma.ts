import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';

// Puxa a URL do .env. Se não achar, usa um fallback para o servidor não quebrar no mock.
const connectionString = process.env.DATABASE_URL || "postgresql://usuario:senha@localhost:5432/mentora_tech";

// Cria a conexão nativa com o banco
const pool = new Pool({ connectionString });

// Prepara o adaptador do Prisma
const adapter = new PrismaPg(pool);

// Instancia o Prisma com o adaptador obrigatório
export const prisma = new PrismaClient({ adapter });