import type { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				// firstName: {
				// 	label: 'First Name',
				// 	type: 'text',
				// 	placeholder: 'Pablo',
				// },
				// lastName: {
				// 	label: 'Last Name',
				// 	type: 'text',
				// 	placeholder: 'Picasso',
				// },
				// phoneNumber: {
				// 	label: 'Phone Number',
				// 	type: 'text',
				// 	placeholder: '881-084-1973',
				// },
				email: {
					label: 'Email',
					type: 'email',
					placeholder: 'pablo@picasso.com',
				},
				password: {
					label: 'Password',
					type: 'password',
					placeholder: 'Choose your password',
				},
				// confirmPassword: {
				// 	label: 'Confirm Password',
				// 	type: 'password',
				// 	placeholder: 'Confirm your password',
				// },
			},
			async authorize(credentials, req) {
				// retrieve and verify credentials from USERS database --- DUMMY DATA FOR DEMO FUNCTIONALITY
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
				// DUMMY DATA
				const user = {
					id: '0',
					firstName: 'Clayton',
					lastName: 'Prickett',
					phoneNumber: '817-933-5425',
					email: 'clayton.a.prickett@gmail.com',
					password: 'Opnwal',
				};

				if (
					credentials?.email === user.email &&
					credentials?.password === user.password
				) {
					return user;
				} else {
					return null;
				}
			},
		}),
	],
};
