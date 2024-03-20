// import { PrismaAdapter } from '@auth/prisma-adapter';
import { AuthOptions } from 'next-auth';
// import EmailProvider from 'next-auth/providers/email';
// import db from './db';
import GoogleProvider from 'next-auth/providers/google';

export const options = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
		// EmailProvider({
		// 	server: process.env.EMAIL_SERVER,
		// 	from: process.env.EMAIL_FROM,
		// }),
	],
	secret: process.env.NEXTAUTH_SECRET,
	// adapter: PrismaAdapter(db),
	// session: {
	// 	strategy: 'database',
	// 	maxAge: 30 * 24 * 60 * 60,
	// },
	pages: {
		signIn: '/sign-in',
		signUp: '/sign-up',
		// verifyRequest: '/verify-request',
	},
	// callbacks: {
	// 	async session({ session, user }) {
	// 		session.user = user;
	// 		return session;
	// 	},
	// },
	// events: {
	// 	async signIn({ user }) {
	// 		console.log({ user }, 'Signed in!');
	// 		alert(`Welcome ${user.name}!`);
	// 	},
	// },
} as AuthOptions;
