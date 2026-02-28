// src/lib/db.ts

import 'dotenv/config'; // Make sure to load environment variables
import { PrismaClient } from   "@prisma/client";
// Import the appropriate adapter for your database (e.g., PostgreSQL, SQLite, MySQL)
import { PrismaPg } from '@prisma/adapter-pg'; 
import pg from 'pg';

const connectionString = process.env.DATABASE_URL;

// Use the global object to store the client instance
declare global {
  var prisma: PrismaClient | undefined;
}

// Create the adapter instance
const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);

// Create the single client instance, using the global one if it already exists
export const prisma =
  globalThis.prisma ??
  new PrismaClient({
    adapter, // Pass the adapter to the constructor
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  });

// In development, store the instance globally to reuse across hot reloads
if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma;
}

export default prisma;
