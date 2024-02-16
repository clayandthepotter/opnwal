import '../styles/globals.css';

import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

import Header from '@/components/header';
import HeaderMobile from '@/components/headerMobile';
import SideNav from '@/components/sideNav';
import PageWrapper from '@/components/pageWrapper';
import MarginWidthWrapper from '@/components/marginWidthWrapper';
import LandingPage from '@/components/landingPage';
import { signal } from '@preact/signals-react';

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

const isLoggedIn = signal('false');
console.log(isLoggedIn.value);

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			{isLoggedIn.value === 'true' ? (
				<body className={dmSans.className}>
					<div className='flex'>
						<SideNav />
						<main className='flex-1'>
							<MarginWidthWrapper>
								<Header />
								<HeaderMobile />
								<PageWrapper>{children}</PageWrapper>
							</MarginWidthWrapper>
						</main>
					</div>
				</body>
			) : (
				<body
					className={`${dmSans.className}p-3 max-w-[1400px] m-auto bg-gradient-to-br from-sky-100 via-pink-100 to-amber-100`}
				>
					<LandingPage isLoggedIn={isLoggedIn.value === 'true'} />
				</body>
			)}
		</html>
	);
}
