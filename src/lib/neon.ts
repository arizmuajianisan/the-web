import { neon } from '@neondatabase/serverless';

// Vite inlines import.meta.env.* at build time
const databaseUrl = import.meta.env.NEON_DATABASE_URL;

if (!databaseUrl) {
  throw new Error('NEON_DATABASE_URL environment variable is not set');
}

export const sql = neon(databaseUrl);