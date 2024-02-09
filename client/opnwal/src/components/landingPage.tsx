'use client';

import { motion } from 'framer-motion';
import NavMain from '@/components/navMain';
import { DM_Sans } from 'next/font/google';
import Image from 'next/image';
import { Button } from './ui/button';
import HeroHeading from '@/components/ui/landingPage/heroHeading';

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

						{/* <motion.div
							initial={{ opacity: 0, scale: 0.9, x: -10 }}
							animate={{ opacity: 1, scale: 1, x: 0 }}
							transition={{
								duration: 0.5,
								ease: [0, 0.71, 0.2, 1.01],
							}}
							id='hero-section-heading'
							className='
							border border-black rounded-full
							bg-primaryBlue 
							relative
							self-start
							justify-self-start
							
							col-start-1
							col-end-7
							row-start-1
							row-end-3
							min-w-max
							w-[200px]
							mt-5
							py-2

							xxs:w-[250px]

							xs:w-[300px]

							sm:justify-self-start
							sm:self-start
							sm:w-[450px]
							sm:py-4
							sm:px-8
							sm:mt-6

							md:justify-self-start
							md:w-[500px]
							md:col-start-1
							md:col-end-6
							md:row-start-1
							md:row-end-2
							md:mt-8
							md:ml-0
							md:py-5
							md:px-12
							
							lg:w-[700px]
							lg:mt-8
							lg:ml-7
							lg:py-9
							lg:px-16

							xl:w-[800]
							xl:mt-8
							xl:ml-7
							xl:py-9
							xl:px-16
							xl:col-start-1
							xl:col-end-7
							xl:row-start-1
							xl:row-end-2

							2xl:w-[803px]
							2xl:mt-32
							2xl:ml-7
							2xl:py-9
							2xl:px-16
							2xl:col-start-1
							2xl:col-end-7
							2xl:row-start-1
							2xl:row-end-2					
							'
						>
							<h1
								className='
								font-semibold
								w-[200px]
								text-xl
								xxs:w-[215px]
								xs:text-2xl
								xs:w-[275px]
								sm:text-3xl								
								sm:w-[350px]
								md:text-4xl								
								md:w-[425px]
								lg:text-6xl
								lg:w-[600px]
								2xl:text-6xl								
								2xl:w-[703px]'
							>
								Connecting Creativity and Commerce
							</h1>
						</motion.div> */}

						{/* HERO SECTION DESCRIPTION */}

						<div
							className='
							relative
							font-semibold
							text-xs

							mobileSM:mr-1

							xxs:row-start-2
							xxs:row-end-4
							xxs:self-start
							xxs:pt-7

							xs:text-sm
							xs:relative

							sm:text-xl
							sm:font-normal
							sm:self-start
							sm:justify-self-start
							sm:col-start-1
							sm:col-end-5
							sm:row-start-2
							sm:row-end-4
							sm:mt-12
							sm:mr-0
							sm:pr-2
							sm:pt-0

							md:text-2xl
							md:font-medium
							md:self-start
							md:justify-self-start
							md:col-start-1
							md:col-end-6
							md:row-start-2
							md:row-end-4
							md:mt-20
							md:mr-10
							md:pt-0

							xl:mt-5
							xl:text-2xl
							xl:w-[600px]
							xl:h-[91px]
							xl:row-start-4
							xl:row-end-8
							xl:col-start-1
							xl:col-end-6

							2xl:self-start
							2xl:mt-20
							2xl:ml-24
							2xl:text-3xl
							2xl:w-[500px]
							2xl:h-auto
							2xl:row-start-3
							2xl:row-end-5
							2xl:col-start-1
							2xl:col-end-6
							
							row-start-2
							row-end-4
							col-start-1
							col-end-5
							justify-self-center
							self-start
						'
						>
							<p>
								Empowering artists, businesses, and collectors through
								innovative, marketplace technology.
							</p>
						</div>

						{/* HERO SECTION BUTTON */}

						<div
							className='
							
							ml-5
							self-center
							justify-self-start

							xxs:mt-8
							xxs:self-center
							xxs:row-start-3
							xxs:col-start-1
							xxs:col-end-2

							sm:self-center
							sm:justify-self-start
							sm:col-start-1
							sm:col-end-2
							sm:row-start-3
							sm:row-end-3
							sm:mt-20
							sm:ml-6

							md:self-center
							md:justify-self-start
							md:col-start-1
							md:col-end-2
							md:row-start-4
							md:row-end-4
							md:mt-5
							md:ml-24
							
							lg:self-center
							lg:justify-self-start
							lg:col-start-1
							lg:col-end-2
							lg:row-start-4
							lg:row-end-4
							lg:mt-5
							lg:ml-24	

							xl:self-center
							xl:justify-self-start
							xl:col-start-1
							xl:col-end-2
							xl:row-start-4
							xl:row-end-4
							xl:mt-5
							xl:ml-24	

							2xl:self-center
							2xl:justify-self-start
							2xl:col-start-1
							2xl:col-end-2
							2xl:row-start-4
							2xl:row-end-4
							2xl:mt-10
							2xl:ml-24	
						'
						>
							<Button size='xl'>Sign Up</Button>
						</div>

						{/* ASTERISK */}

						<motion.div
							whileHover={{ scale: 1.2, rotate: 180 }}
							transition={{ type: 'spring' }}
							className='
							relative
							transform 
							hover:rotate-360 
							transition-transform 
							duration-1000 
							ease-in-out
							justify-self-center
							self-center
							col-start-3
							col-end-5
							row-start-5
							row-end-7
							max-w-[191px]
							h-auto
						'
						>
							<Image
								className='relative'
								src='/asterisks/asterisk191px-noShadow_1.svg'
								width='191'
								height='191'
								alt='Asterisk'
							/>
						</motion.div>

						{/* HERO IMAGE */}

						<div
							id='hero-image'
							className='
								self-start
								justify-self-end
								mt-2
								col-start-5
								col-end-9
								row-start-1
								row-end-6
								
								sm:row-start-1
								sm:row-end-6
								sm:col-start-5
								sm:col-end-9
								sm:ml-7
								
								md:row-start-1
								md:row-end-8
								md:w-[325px]
								
								lg:row-start-1
								lg:row-end-10
								lg:w-[400px]

								xl:row-start-1
								xl:row-end-10
								xl:w-[500px]
								'
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
