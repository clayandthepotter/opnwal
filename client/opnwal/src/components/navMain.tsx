'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const NavMain = ({ isLoggedIn }: { isLoggedIn: string }) => {
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
				<Link
					className='hover:-translate-y-0.5 hover:ease-out hover:duration-200 hover:text-primary/70'
					href={'/'}
				>
					FAQs
				</Link>
				<Button
					variant='outline'
					className='hidden md:flex ml-4 hover:-translate-y-0.5 hover:ease-out hover:duration-200'
					onClick={() => (isLoggedIn = 'true')}
				>
					Log in
				</Button>
				<Button
					className='hidden md:flex text-primaryBlue ml-3 hover:-translate-y-0.5 hover:ease-out hover:duration-200'
					onClick={() => (isLoggedIn = 'true')}
				>
					Sign Up
				</Button>
			</nav>

			{/* MOBILE NAV */}
			<nav className='relative md:hidden flex h-12 items-center self-center sm:self-end'>
				<Link href={'/'}>FAQs</Link>
				<Button
					variant='outline'
					className='md:hidden flex rounded-full ml-4'
					onClick={() => (isLoggedIn = 'true')}
				>
					Log in
				</Button>
			</nav>
		</div>
	);
};

export default NavMain;
