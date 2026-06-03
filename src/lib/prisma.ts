import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';

// Puxa a URL do .env com suporte ao nome customizado process.env.PORT
console.log("TESTE ENV:", process.env["process.env.PORT"]);
const connectionString = process.env["process.env.PORT"] || process.env.DATABASE_URL || "postgresql://usuario:senha@localhost:5432/mentora_tech";

// Cria a conexão nativa com o banco
const pool = new Pool({ connectionString });

// Prepara o adaptador do Prisma
const adapter = new PrismaPg(pool);

// Instancia o Prisma com o adaptador obrigatório
export const prisma = new PrismaClient({ adapter });