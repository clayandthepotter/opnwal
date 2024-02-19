'use client';

import React, { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SIDENAV_ITEMS } from '@/constants';
import { SideNavItem } from '@/types';
import { Icon } from '@iconify/react';
import Image from 'next/image';

const SideNav = () => {
	return (
		<div className='md:w-60 bg-white h-screen flex-1 fixed overflow-y-scroll border-r border-zinc-200 hidden md:flex'>
			<div className='flex flex-col space-y-6 w-full'>
				<Link
					href='/'
					className='flex flex-row space-x-3 items-center justify-center md:justify-start px-2 py-[2.5%] border-b border-zinc-200 md:px-6  h-12 w-full'
				>
					<Image
						src='/logo/logoMobile.svg'
						width='157'
						height='34'
						alt='Instagram Icon'
					/>
				</Link>

				<div className='flex flex-col space-y-2 md:px-6'>
					{SIDENAV_ITEMS.map((item, idx) => {
						return <MenuItem key={idx} item={item} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default SideNav;

const MenuItem = ({ item }: { item: SideNavItem }) => {
	const pathname = usePathname();
	const [subMenuOpen, setSubMenuOpen] = useState(false);
	const toggleSubMenu = () => {
		setSubMenuOpen(!subMenuOpen);
	};

	return (
		<div className=''>
			{item.submenu ? (
				<>
					<button
						onClick={toggleSubMenu}
						className={`flex flex-row items-center p-2 rounded-lg w-full justify-between hover:bg-primaryBlue/30 ${
							pathname.includes(item.path)
								? 'bg-primaryBlue/30 font-bold'
								: ''
						}`}
					>
						<div className='flex flex-row space-x-4 items-center'>
							{item.icon}
							<span className='font-semibold text-xl flex'>
								{item.title}
							</span>
						</div>

						<div
							className={`${subMenuOpen ? 'rotate-180' : ''} flex`}
						>
							<Icon
								icon='lucide:chevron-down'
								width='24'
								height='24'
							/>
						</div>
					</button>

					{subMenuOpen && (
						<div className='my-2 ml-6 flex flex-col space-y-4'>
							{item.subMenuItems?.map((subItem, idx) => {
								return (
									<Link
										key={idx}
										href={subItem.path}
										className={`${
											subItem.path.includes(pathname)
												? 'font-bold'
												: 'font-semibold'
										}`}
									>
										<span
											className={`hover:bg-primaryBlue/30 rounded-lg p-2 
												${subItem.path === pathname ? ' bg-primaryBlue/30' : ''}`}
										>
											{subItem.title}
										</span>
									</Link>
								);
							})}
						</div>
					)}
				</>
			) : (
				<Link
					href={item.path}
					className={`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-primaryBlue/30 ${
						item.path === pathname
							? 'bg-primaryBlue/30 font-bold'
							: ''
					}`}
				>
					{item.icon}
					<span className='font-semibold text-xl flex'>
						{item.title}
					</span>
				</Link>
			)}
		</div>
	);
};
