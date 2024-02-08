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
				<main
					className='
					w-full
					grid-col-1
					grid-row-1'
				>
					<section
						id='hero-section'
						className='
							m-auto
							max-w-[1440px]
							h-[800px]
							grid
							grid-cols-8
							grid-rows-5
							place-items-center'
					>
						<div
							id='hero-section-heading'
							className='
							w-[300px]
							sm:w-[500px]
							md:w-[500px]
							lg:w-[700px]
							xl:w-[800]
							2xl:w-[1000px]
							min-w-max
							col-start-1
							col-end-7
							row-start-1
							row-end-2
							relative
							bg-primaryBlue 
							border border-black rounded-full

							xl:mt-44
							xl:ml-7
							xl:py-9
							xl:px-16

							lg:mt-36
							lg:ml-7
							lg:py-9
							lg:px-16

							md:mt-28
							md:ml-7
							md:py-9
							md:px-16

							sm:mt-12
							sm:ml-12
							sm:py-5
							sm:px-8
							
							mt-6
							ml-6
							py-3
							px-8'
						>
							<h1 className='w-full'>
								<span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl'>
									Connecting Creativity
								</span>
								<br />
								<span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl'>
									and Commerce
								</span>
							</h1>
						</div>
						<div
							id='hero-image'
							className='
								self-start
								mt-5
								col-start-6
								col-end-9
								xl:row-start-1
								xl:row-end-6
								lg:row-start-1
								lg:row-end-6
								md:row-start-1
								md:row-end-5
								sm:row-start-1
								sm:row-end-3
								row-start-1
								row-end-3
								md:w-[300px]
								lg:w-[400px]
								xl:w-[500px]'
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
