import Header from '@/components/ui/dashboard/header/header';
import HeaderMobile from '@/components/ui/dashboard/header/headerMobile';
import PageWrapper from '@/components/ui/dashboard/global/pageWrapper';
import { AuthProvider } from '@/app/context/AuthProvider';
import { getServerSession } from 'next-auth';
import { Toaster } from '@/components/global/toaster';

export default async function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await getServerSession();
	return (
		<html lang='en'>
			<body className='flex'>
				<main className='flex-1'>
					<AuthProvider session={session}>
						<Header />
						<HeaderMobile />
						<PageWrapper>{children}</PageWrapper>
						<Toaster />
					</AuthProvider>
				</main>
			</body>
		</html>
	);
}
