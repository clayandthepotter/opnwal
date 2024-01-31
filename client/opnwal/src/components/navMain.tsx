'use client';

import { Button } from '@/components/ui/button';

const NavMain = ({ isLoggedIn }: { isLoggedIn: string }) => {
	return (
		<div className='md:inline-flex md:justify-between w-full md:flex-grow md:bg-gray-200 p-3'>
			<span className='font-bold text-xl hidden md:flex md:text-3xl md:tracking-tighter'>
				Opnwal
			</span>
			<div className=''>
				<Button onClick={() => (isLoggedIn = 'true')}>Log in</Button>
			</div>
		</div>
	);
};

export default NavMain;
