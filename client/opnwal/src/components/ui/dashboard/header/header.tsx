'use client';

import React from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import useScroll from '@/hooks/useScroll';
import { cn } from '@/lib/utils';

const Header = () => {
	const scrolled = useScroll(5);
	const selectedLayout = useSelectedLayoutSegment();

	return (
		<div
			className={cn(
				`flex md:justify-end sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200`,
				{
					'border-b border-gray-200 bg-white/75 backdrop-blur-lg':
						scrolled,
					'border-b border-gray-200 bg-white': selectedLayout,
				}
			)}
		>
			{/* LOGO */}

			<div className='flex h-[47px] items-center md:flex-row-reverse px-4 '>
				<div className='flex items-center space-x-4'>
					<Link
						href='/'
						className='flex flex-row space-x-3 items-center justify-center md:hidden'
					>
						<span className='font-bold flex text-2xl tracking-tighter'>
							Opnwal
						</span>
					</Link>
				</div>

				{/* SEARCH BAR */}

				<div className='hidden md:flex h-[47px] items-center md:flex-row-reverse px-4'>
					<div className='hidden md:block p-2 mr-5 hover:bg-zinc-100 rounded-lg md:cursor-pointer'>
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

					{/* SEARCH BAR */}

					<div className='flex h-[47px] items-center md:flex-row-reverse px-4'>
						<input
							id='search'
							autoComplete='false'
							type='text'
							placeholder='Search'
							className='px-1 mx-1'
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

				<div className='hidden md:block md:order-first'>
					<div className='h-8 w-8 rounded-full bg-zinc-300 flex items-center justify-center text-center hover:bg-zinc-100 md:cursor-pointer'>
						<span className='font-semibold text-sm'>CP</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
