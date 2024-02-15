'use client';

import { motion, useScroll } from 'framer-motion';
import NavMain from '@/components/navMain';
import Image from 'next/image';
import { Button } from './ui/button';
import HeroHeading from '@/components/ui/landingPage/heroHeading';
import HeroDescription from './ui/landingPage/heroDescription';
import HeroButton from './ui/landingPage/heroButton';
import Asterisk1 from './ui/landingPage/asterisk1';
import Asterisk2 from './ui/landingPage/asterisk2';
import HeroImage from './ui/landingPage/heroImage';
import S2MainContent from './ui/landingPage/s2MainContent';
import InfoCircle from './ui/landingPage/infoCircle';
import Squiggle1 from './ui/landingPage/squiggle1';
import Asterisk3 from './ui/landingPage/asterisk3';

const LandingPage = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
	return (
		<div className='mobileLG:p-5 sm:p-5'>
			{/* HEADER */}
			<motion.div
				initial={{ opacity: 0, y: -70 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.75,
					ease: 'easeOut',
				}}
			>
				<header className='items-end'>
					<NavMain isLoggedIn={isLoggedIn.toString()} />
					<hr className='border-b border-black max-w-[1560px]' />
				</header>
			</motion.div>
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
					<HeroHeading />
					<HeroDescription />
					<HeroButton />
					<Asterisk1 />
					<HeroImage />
				</section>

				{/* SECTION 2 */}

				<section
					id='what-is-opnwal'
					className='
						grid
						grid-cols-8
						grid-rows-5
						place-items-center
						max-h-[560px]'
				>
					<S2MainContent />
					<InfoCircle />
					<Squiggle1 />
					<Asterisk2 />
					<Asterisk3 />
				</section>

				{/* SECTION 3 */}

				<section
					className='
						grid
						grid-cols-8
						grid-rows-5
						max-h-[860px]
					'
				>
					<motion.div
						className='							
							h-[852px]
							w-[1246px]
							border-2
							border-black
							rounded-l-full
							bg-primaryBlue
							col-start-1
							col-end-9
							justify-self-end
							row-start-1
							row-end-6
							self-center
							grid
							grid-cols-12
							grid-rows-12
						'
					>
						<div
							id='s3Image'
							className='
								flex
								col-start-2
								row-start-3
								object-cover
								mt-15
								p-0
								relative
								border-2
								border-black
								rounded-l-full
								h-[630px]
								w-[617px]
								overflow-hidden

							'
						>
							<Image
								style={{ alignSelf: 'end' }}
								src='/s3Image/pexels-rfstudio-3817580.jpg'
								width='667'
								height='932'
								alt='Woman with sculpture'
							/>
						</div>
						<div
							id='s3h2'
							className='
								col-start-1
								col-end-13
								row-start-1
								row-end-3
								self-center
								mt-7								
								mr-6
								justify-self-end
							'
						>
							<h2 className='text-7xl font-semibold'>
								How does it work?
							</h2>
						</div>
						<div id='s3Copy'></div>
					</motion.div>
				</section>
			</main>
			<footer>
				<h1>Footer</h1>
			</footer>
		</div>
	);
};

export default LandingPage;
