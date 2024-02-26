'use client';

import Link from 'next/link';

export default function NotFound() {
	return (
		<div
			className='
				h-[100vh] 
				w-[100vw] 
				bg-gradient-to-br 
				from-sky-100 
				via-pink-100 
				to-amber-100 
				justify-center
				items-center'
		>
			<div
				classname='
				h-[50%]
				w-[50%]
				relative
				p-5
				flex
				flex-col
				justify-center
				items-center
				bg-primaryBlue/10
				rounded-[7%]
				border
				border-black
				overflow-auto
				pb-10
				m-auto
				'
			>
				<h2 className='text-5xl font-medium text-center'>
					Page Not Found
				</h2>
				<p className='text-xl font-medium text-center'>
					Could not find requested resource
				</p>
				<Link href='/' className='text-xl font-medium text-center justify-self-center'>
					Return Home
				</Link>
			</div>
		</div>
	);
}
