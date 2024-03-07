import '../styles/globals.css';

import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { AuthProvider } from '@/app/context/AuthProvider';
import { getServerSession } from 'next-auth';

const dmSans = DM_Sans({
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: {
		template: 'Opnwal | %s',
		default: 'Opnwal',
	},
	description: 'Opnwal | Where creativity meets commerce.',
	metadataBase: new URL('https://opnwal.vercel.app'),
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await getServerSession();
	return (
		<html lang='en'>
			<AuthProvider session={session}>
				<body className={`${dmSans.className}`}>{children}</body>
			</AuthProvider>
		</html>
	);
}
