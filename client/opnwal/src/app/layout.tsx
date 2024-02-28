import '../styles/globals.css';

import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { Providers } from '@/app/Providers';

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
			<Providers>
				<body className={`${dmSans.className}`}>{children}</body>
			</Providers>
		</html>
	);
}
