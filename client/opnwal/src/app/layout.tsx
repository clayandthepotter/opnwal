import '../styles/globals.css';

import type { Metadata } from 'next';
import { Albert_Sans } from 'next/font/google';

import Header from '@/components/header';
import HeaderMobile from '@/components/headerMobile';
import SideNav from '@/components/sideNav';
import PageWrapper from '@/components/pageWrapper';
import MarginWidthWrapper from '@/components/marginWidthWrapper';

const albertSans = Albert_Sans({
	subsets: ['latin'],
	// weight: ['400'],
});

export const metadata: Metadata = {
	title: 'Opnwal | Dashboard',
	description: 'Empowering culture and creativity',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			{<body className={albertSans.className}>
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
			</body>}
		</html>
	);
}
