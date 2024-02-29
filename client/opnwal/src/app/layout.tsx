import '../styles/globals.css';

import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { AuthProvider } from '@/app/context/AuthProvider';

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

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<AuthProvider>
				<body className={`${dmSans.className}`}>{children}</body>
			</AuthProvider>
		</html>
	);
}
