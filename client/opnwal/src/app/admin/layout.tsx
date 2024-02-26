import Header from '@/components/ui/dashboard/header/header';
import HeaderMobile from '@/components/ui/dashboard/header/headerMobile';
import MarginWidthWrapper from '@/components/ui/dashboard/global/marginWidthWrapper';
import PageWrapper from '@/components/ui/dashboard/global/pageWrapper';
import SideNav from '@/components/ui/dashboard/nav/sideNav';
import { Providers } from '@/app/Providers';

export default function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<Providers>
				<body className='flex'>
					<SideNav />
					<main className='flex-1'>
						<MarginWidthWrapper>
							<Header />
							<HeaderMobile />
							<PageWrapper>{children}</PageWrapper>
						</MarginWidthWrapper>
					</main>
				</body>
			</Providers>
		</html>
	);
}
