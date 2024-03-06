'use client';

import { Button } from '@/components/global/button';

export default function NotFound() {
	return (
		<div
			className='
				h-screen
				w-screen
				flex
				bg-gradient-to-br 
				from-sky-100 
				via-pink-100 
				to-amber-100 
				justify-center
				items-center
				z-50'
		>
			<div
				className='
					relative
					p-5
					flex
					flex-col
					justify-center
					items-center
					bg-primaryBlue/10
					rounded-[30px]
					border
					border-black
					overflow-auto
					pb-10
				'
			>
				<h1 className='text-5xl mb-3 mt-5 flex min-w-min font-medium text-center'>
					404
				</h1>
				<h2 className='text-4xl mb-10 mt-5 flex min-w-min font-medium text-center'>
					Page Not Found
				</h2>
				<p className='text-xl mb-7 flex m-auto min-w-min font-medium text-center'>
					Could not find requested resource
				</p>
				<Button onClick={() => window.history.back()}>Go Back</Button>
			</div>
		</div>
	);
}
