'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import Dashboard from './../app/page';

const NavMain = ({ isLoggedIn }: { isLoggedIn: string }) => {
	return (
		<div className='md:flex md:justify-between items-end w-full md:h-40 md:flex-grow pb-5 border-b border-black align-baseline'>
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
			<div className='md:hidden flex relative h-full max-w-1/2 justify-start'>
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
					width={206}
					height={43}
				/>
			</div>

			{/* DESKTOP NAV */}
			<nav className='hidden md:flex h-12 items-center'>
				<Link href={'/'}>FAQs</Link>
				<Button
					variant='outline'
					className='hidden md:flex ml-4'
					onClick={() => (isLoggedIn = 'true')}
				>
					Log in
				</Button>
				<Button
					className='hidden md:flex text-primaryBlue ml-3'
					onClick={() => (isLoggedIn = 'true')}
				>
					Sign Up
				</Button>
			</nav>

			{/* MOBILE NAV */}
			{/* <nav className='hidden md:flex h-12 items-center'>
				<Link href={'/'}>FAQs</Link>
				<Button
					variant='outline'
					className='hidden md:flex rounded-full ml-4'
					onClick={() => (isLoggedIn = 'true')}
				>
					Log in
				</Button>
				<Button
					className='hidden md:flex rounded-full text-primaryBlue ml-3'
					onClick={() => (isLoggedIn = 'true')}
				>
					Sign Up
				</Button>
			</nav> */}
		</div>
	);
};

export default NavMain;
