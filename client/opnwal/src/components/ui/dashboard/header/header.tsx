'use client';

import React from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { Input } from '@/components/global/input';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/global/sheet';
import { Button } from '@/components/global/button';
import useScroll from '@/hooks/useScroll';
import { cn } from '../../../../lib/utils';
import Image from 'next/image';
import { MenuItem } from '@/components/ui/dashboard/nav/sideNav';
import { SIDENAV_ITEMS } from '@/constants';
import { signOut, useSession } from 'next-auth/react';

// const user = 'User';
const notifications = [
	'Notification 1',
	'Notification 2',
	'Notification 3',
];

const Header = () => {
	const scrolled = useScroll(5);
	const selectedLayout = useSelectedLayoutSegment();
	const { data: session } = useSession();
	const user = session?.user;

	if (session) {
		console.log(session);
	}
	return (
		<div
			className={cn(
				`flex md:justify-between sticky inset-x-0 top-0 z-30 w-full transition-all px-3 py-1 `,
				{
					'border-b border-black bg-white backdrop-blur-lg': scrolled,
					'border-b border-black bg-white': selectedLayout,
				}
			)}
		>
			<div className='flex items-center justify-between space-x-4 max-w-[250px]'>
				{/* DESKTOP SIDENAV */}

				<div className='hidden md:flex'>
					<Sheet>
						<SheetTrigger>
							<div className='h-8 w-8 rounded-full bg-zinc-300 flex items-center justify-center text-center hover:bg-zinc-100 md:cursor-pointer'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									stroke-width='1.75'
									stroke-linecap='round'
									stroke-linejoin='round'
									className='lucide lucide-menu'
								>
									<line x1='4' x2='20' y1='12' y2='12' />
									<line x1='4' x2='20' y1='6' y2='6' />
									<line x1='4' x2='20' y1='18' y2='18' />
								</svg>
							</div>
						</SheetTrigger>
						<SheetContent
							side='left'
							className='overflow-y-scroll w-[350px]'
						>
							<SheetHeader>
								<SheetTitle>
									<div className='flex items-center space-x-4'>
										<Link
											href='/'
											className='flex flex-row space-x-3 items-center justify-center'
										>
											<Image
												src='/logo/logoMobile.svg'
												width='200'
												height='44'
												alt='Logo'
											/>
										</Link>
									</div>
								</SheetTitle>
								<SheetDescription>
									<div className='flex flex-col space-y-4 mt-10'>
										{SIDENAV_ITEMS.map((item, idx) => {
											return <MenuItem key={idx} item={item} />;
										})}
									</div>
								</SheetDescription>
							</SheetHeader>
						</SheetContent>
					</Sheet>
				</div>

				{/* LOGO */}

				<Link
					href='/'
					className='flex flex-row space-x-3 items-center justify-center'
				>
					<Image
						src='/logo/logoMobile.svg'
						width='200'
						height='44'
						alt='Logo'
					/>
				</Link>
			</div>

			<div className='flex h-[47px] items-center md:flex-row px-4 '>
				{/* NOTIFICATION BELL */}

				<div className='hidden md:flex h-[47px] items-center md:flex-row-reverse px-4'>
					<Sheet>
						<SheetTrigger>
							<div className='hidden md:block p-2 mx-3 hover:bg-zinc-100 rounded-full justify-center md:cursor-pointer'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
									className='lucide lucide-bell'
								>
									<path d='M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9' />
									<path d='M10.3 21a1.94 1.94 0 0 0 3.4 0' />
								</svg>
							</div>
						</SheetTrigger>
						<SheetContent>
							<SheetHeader>
								<SheetTitle>Notifications</SheetTitle>
								<SheetDescription>
									{notifications.map((notification) => (
										<div>{notification}</div>
									))}
								</SheetDescription>
							</SheetHeader>
						</SheetContent>
					</Sheet>

					{/* SEARCH BAR */}

					<div className='flex h-[47px] items-center md:flex-row-reverse px-4'>
						<Input
							id='search'
							autoComplete='false'
							type='text'
							placeholder='Search...'
							className='pl-3 py-1 mt-2 mx-1 rounded-full'
						/>
						<label htmlFor='search'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								stroke-width='2'
								stroke-linecap='round'
								stroke-linejoin='round'
								className='lucide lucide-search'
							>
								<circle cx='11' cy='11' r='8' />
								<path d='m21 21-4.3-4.3' />
							</svg>
						</label>
					</div>
				</div>

				<div className='hidden items-center md:flex'>
					<Sheet>
						<SheetTrigger>
							<div className='h-10 w-10 hover:shadow-inner self-center rounded-full overflow-hidden border border-black bg-zinc-300 flex items-center justify-center text-center hover:bg-zinc-100 md:cursor-pointer'>
								<img
									src={user?.image as string}
									alt='User Profile Image'
								/>
							</div>
						</SheetTrigger>
						<SheetContent>
							<SheetHeader>
								<SheetTitle>
									Hello {user?.name ? user.name.split(' ')[0] : ''}!
								</SheetTitle>
								<SheetDescription>
									<div className='w-full pt-4'>
										<h2 className='text-3xl'>User Settings</h2>
										<div className='flex flex-col space-y-4 mt-10'>
											<Link href={`/`}>
												<p className='hover:text-blue-500'>Profile</p>
											</Link>
											<Link href='/admin/settings'>
												<p className='hover:text-blue-500'>
													Settings
												</p>
											</Link>
											<Button
												onClick={() => signOut()}
												className='hover:text-blue-500'
											>
												Logout
											</Button>
										</div>
									</div>
								</SheetDescription>
							</SheetHeader>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</div>
	);
};

export default Header;
