import Header from '@/components/ui/dashboard/header';
import HeaderMobile from '@/components/ui/dashboard/headerMobile';
import MarginWidthWrapper from '@/components/ui/dashboard/marginWidthWrapper';
import PageWrapper from '@/components/ui/dashboard/pageWrapper';
import SideNav from '@/components/ui/dashboard/sideNav';
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<UserProvider>
			<html lang='en'>
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
			</html>
		</UserProvider>
	);
}
