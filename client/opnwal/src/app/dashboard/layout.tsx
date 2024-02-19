import Header from '@/components/header';
import HeaderMobile from '@/components/headerMobile';
import MarginWidthWrapper from '@/components/marginWidthWrapper';
import PageWrapper from '@/components/pageWrapper';
import SideNav from '@/components/sideNav';

export default function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
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
	);
}
