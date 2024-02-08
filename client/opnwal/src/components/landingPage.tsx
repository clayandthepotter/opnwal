'use client';

import '../styles/landingPage.css';
import NavMain from '@/components/navMain';
import { Albert_Sans } from 'next/font/google';
import Image from 'next/image';

const albertSans = Albert_Sans({
	subsets: ['latin'],
	// weight: ['400'],
});

const LandingPage = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
	return (
		<div className='p-5'>
			<div className={albertSans.className}>
				<header className='items-end'>
					<NavMain isLoggedIn={isLoggedIn} />
				</header>
				<main className='w-full'>
					<section
						id='hero-section'
						className='
							w-full
							h-[800px]
							grid
							grid-cols-8
							grid-rows-5
							place-items-center'
					>
						<div
							id='hero-section-heading'
							className='
							md:w-[500px]
							lg:w-[700px]
							min-w-max
							col-start-1
							col-end-7
							row-start-1
							row-end-2
							relative
							bg-primaryBlue 
							border border-black rounded-full
							sm:mt-28
							sm:ml-7
							sm:py-9
							sm:px-16
							md:mt-28
							md:ml-7
							md:py-9
							md:px-16'
						>
							<h1 className='w-full md:text-5xl'>
								<span>Connecting Creativity</span>
								<br />
								<span>and Commerce</span>
							</h1>
						</div>
						<div
							id='hero-image'
							className='
								col-start-6
								col-end-9
								row-start-1
								row-end-6'
						>
							<Image
								src='/hero/hero-photo.png'
								width='498'
								height='747'
								alt='Hero Photo'
							/>
						</div>
					</section>
					<h1>Main</h1>
				</main>
				<footer>
					<h1>Footer</h1>
				</footer>
			</div>
		</div>
	);
};

export default LandingPage;
