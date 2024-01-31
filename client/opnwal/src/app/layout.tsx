import '../styles/globals.css';

import type { Metadata } from 'next';
import { Albert_Sans } from 'next/font/google';

import Header from '@/components/header';
import HeaderMobile from '@/components/headerMobile';
import SideNav from '@/components/sideNav';
import PageWrapper from '@/components/pageWrapper';
import MarginWidthWrapper from '@/components/marginWidthWrapper';
import LandingPage from '@/components/landingPage';
import { signal } from '@preact/signals-react';

const albertSans = Albert_Sans({
	subsets: ['latin'],
	// weight: ['400'],
});

export const metadata: Metadata = {
	title: 'Opnwal | Dashboard',
	description: 'Empowering culture and creativity',
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
				<body className={albertSans.className}>
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
				<body>
					<LandingPage isLoggedIn={isLoggedIn.value} />
				</body>
			)}
		</html>
	);
}
