import Header from '@/components/ui/dashboard/header/header';
import HeaderMobile from '@/components/ui/dashboard/header/headerMobile';
import PageWrapper from '@/components/ui/dashboard/global/pageWrapper';
import { AuthProvider } from '@/app/context/AuthProvider';

export default function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<AuthProvider>
				<body className='flex'>
					<main className='flex-1'>
						<Header />
						<HeaderMobile />
						<PageWrapper>{children}</PageWrapper>
					</main>
				</body>
			</AuthProvider>
		</html>
	);
}
