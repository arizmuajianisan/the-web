import { neon } from '@neondatabase/serverless';

// Get database URL from environment variables
// process.env is used in Cloudflare Workers
// import.meta.env is used in Vite development
const databaseUrl = process.env.NEON_DATABASE_URL || import.meta.env.NEON_DATABASE_URL;

if (!databaseUrl) {
  throw new Error('NEON_DATABASE_URL environment variable is not set');
}

export const sql = neon(databaseUrl);