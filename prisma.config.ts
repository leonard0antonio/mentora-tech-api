import 'dotenv/config'; // <-- Adicione esta linha no topo!
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"), // <-- Agora ele vai encontrar a URL do Supabase!
  },
});