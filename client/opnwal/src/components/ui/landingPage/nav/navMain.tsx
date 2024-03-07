'use client';

import { Button } from '@/components/global/button';
import Image from 'next/image';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';

const NavMain = () => {
	const { data: session, status } = useSession();
	// const router = useRouter();
	// const loading = status == 'loading';
	console.log(session);
	return (
		<div
			className='
				flex justify-between items-end w-full sm:h-28 md:mt-3 lg:h-36 md:flex-grow sm:pb-3  align-baseline'
		>
			{/* DESKTOP LOGO */}
			<div className='hidden md:flex relative h-full max-w-1/2 justify-start'>
				<Image
					style={{
						justifySelf: 'start',
						alignSelf: 'end',
						position: 'relative',
						paddingRight: '50px',
					}}
					src='/logo/logoSVG.svg'
					alt='Logo'
					objectFit='cover'
					width={732}
					height={153}
				/>
			</div>

			{/* MOBILE LOGO */}
			<div className='md:hidden flex relative h-full max-w-1/2 justify-start self-center py-2'>
				<Image
					style={{
						justifySelf: 'start',
						alignSelf: 'end',
						position: 'relative',
						paddingRight: '50px',
					}}
					src='/logo/logoMobile.svg'
					alt='Logo'
					objectFit='cover'
					width={732}
					height={153}
				/>
			</div>

			{/* DESKTOP NAV */}
			<nav className='relative hidden md:flex h-12 items-center '>
				<Link href='#faqsSection'>
					<Button
						variant='link'
						className='hover:text-primary/70 text-base'
					>
						FAQs
					</Button>
				</Link>
				{session?.user ? (
					<Button
						variant='outline'
						className='hidden md:flex ml-2'
						onClick={() => signOut()}
					>
						Log Out
					</Button>
				) : (
					<Link href={'/sign-in'}>
						<Button variant='outline' className='hidden md:flex ml-2'>
							Sign In
						</Button>
					</Link>
				)}
				{session?.user ? (
					<Link href={'/admin/dashboard'}>
						<Button variant='default' className='hidden md:flex ml-2'>
							Dashboard
						</Button>
					</Link>
				) : (
					<Link href='/sign-up'>
						<Button className='hidden md:flex text-primaryBlue ml-3 '>
							Sign Up
						</Button>
					</Link>
				)}
			</nav>

			{/* MOBILE NAV */}
			<nav className='relative md:hidden flex h-12 items-center self-center sm:self-end'>
				<Link href={'/'}>FAQs</Link>
				<Button
					variant='outline'
					className='md:hidden flex rounded-full ml-4'
					// onClick={() => (isLoggedIn = 'true')}
				>
					Log in
				</Button>
			</nav>
		</div>
	);
};

export default NavMain;
