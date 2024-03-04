import type { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();
export const options: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: {
					label: 'Email',
					type: 'email',
					placeholder: 'pablo@picasso.com',
				},
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				if (!credentials) return null;

				// Retrieve user by email
				const user = await prisma.user.findUnique({
					where: { email: credentials.email },
				});

				// User not found
				if (!user) return null;

				// Verify password
				const isValid = await bcrypt.compare(
					credentials.password,
					user.password
				);

				// Incorrect password
				if (!isValid) return null;

				// Return user object on successful authentication
				// You may choose to exclude sensitive information here
				return {
					id: user.id.toString(),
					username: user.username,
					email: user.email,
					// other fields you may want to include
				};
			},
		}),
	],
	// Add session and callback configurations as needed
	session: {
		// Session configuration...
	},
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			// Here, you can implement additional checks before allowing the sign-in
			// For example, you might want to verify the user's role or status
			// If everything is okay, return true to proceed with the sign-in
			return true;
		},
		async redirect({ url, baseUrl }) {
			// This callback is called after the signIn callback has allowed the sign-in
			// You can use it to redirect the user to a specific URL after login

			// If the sign-in was successful and you want to redirect to /admin,
			// you can ignore the `url` argument and return the desired path
			return '/admin';
		},
	},
	// Specify any other NextAuth options needed
};

// retrieve and verify credentials from User database
// Docs: https://next-auth.js.org/configuration/providers/credentials
// Provide logic here that takes the credentials
// submitted and returns either a object representing a user or value
// that is false/null if the credentials are invalid.
// e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
// Can also use the `req` object to obtain additional parameters
// (i.e., the request IP address)
// i.e. ---
// const res = await fetch('/your/endpoint', {
// 	method: 'POST',
// 	body: JSON.stringify(credentials),
// 	headers: { 'Content-Type': 'application/json' },
// });
// const user = await res.json();
// // If no error and we have user data, return it
// if (res.ok && user) {
// 	return user;
// }
// // Return null if user data could not be retrieved
// return null;
// 				if (
// 					credentials?.email === user.email &&
// 					credentials?.password === user.password
// 				) {
// 					return user;
// 				} else {
// 					return null;
// 				}
// 			},
// 		}),
// 	],
// };
