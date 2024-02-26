import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import { db } from '@/lib/db';
import { compare } from 'bcrypt/bcrypt.js';
import { CredentialsProvider } from 'next-auth/providers/credentials';

export const authOption: NextAuthOptions = {
	adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/sign-in',
    signOut: '/',
    error: '/sign-in',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'email@example.com'},
        password: { label: 'Password', type: 'password' },
      }
      async authorize(credentials) {
        if(!credentials?.email || !credentials.password) {
          return null;
        }

        const existingUser = await db.user.findUnique({
          where: { email: credentials?.email },
        });
        if (!existingUser) {
          return null;
        }
      },
    }),
  ],
};
