import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const db = globalForPrisma.prisma || prisma;

if (process.env.NODE_ENV !== 'production') {
	globalForPrisma.prisma = prisma;
}

export default db;
