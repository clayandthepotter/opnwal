'use client';

import { motion } from 'framer-motion';
import NavMain from '@/components/navMain';
import { DM_Sans } from 'next/font/google';
import Image from 'next/image';
import { Button } from './ui/button';
import HeroHeading from '@/components/ui/landingPage/heroHeading';
import HeroDescription from './ui/landingPage/heroDescription';
import HeroButton from './ui/landingPage/heroButton';
import Asterisk1 from './ui/landingPage/asterisk1';
import HeroImage from './ui/landingPage/heroImage';

const dmSans = DM_Sans({
	subsets: ['latin'],
});

const LandingPage = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
	return (
		<div className={dmSans.className}>
			<div className='mobileLG:p-5 sm:p-5'>
				{/* HEADER */}

				<header className='items-end'>
					<NavMain isLoggedIn={isLoggedIn.toString()} />
					<hr className='border-b border-black max-w-[1560px]' />
				</header>

				{/* MAIN CONTENT */}

				<main
					className='
					max-w-[1280px]
					m-auto
					grid-col-1
					grid-row-1'
				>
					{/* HERO SECTION */}

					<section
						id='hero-section'
						className='
							m-auto
							max-w-[1440px]
							mobileLG:h-[300px]
							xxs:h-[360px]
							xs:h-[425px]
							sm:h-[500px]
							md:h-[500px]
							lg:h-[600px]
							xl:h-[750px]
							
							grid
							grid-cols-8
							grid-rows-5
							place-items-center'
					>
						{/* HERO SECTION HEADING */}

						<HeroHeading />

						{/* HERO SECTION DESCRIPTION */}

						<HeroDescription />

						{/* HERO SECTION BUTTON */}

						<HeroButton />

						{/* ASTERISK */}

						<Asterisk1 />

						{/* HERO IMAGE */}

						<HeroImage />
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
