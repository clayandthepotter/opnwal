'use client';

import { motion, useScroll } from 'framer-motion';
import NavMain from '@/components/navMain';
import Image from 'next/image';
import { Button } from './ui/button';
import HeroHeading from '@/components/ui/landingPage/heroHeading';
import HeroDescription from './ui/landingPage/heroDescription';
import HeroButton from './ui/landingPage/heroButton';
import Asterisk1 from './ui/landingPage/asterisk1';
import HeroImage from './ui/landingPage/heroImage';

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
					{/* SECTION 2 MOTION DIV */}

					<motion.div
						initial={{ opacity: 0, scale: 0.8, x: -300 }}
						whileInView={{
							opacity: 1,
							scale: 1,
							x: 0,
							y: 0,
						}}
						transition={{
							duration: 1.25,
							ease: 'easeOut',
						}}
						viewport={{ once: true }}
						className='
							w-[962px] 
							h-[500px]
							self-start
							justify-self-start
							rounded-tr-full
							rounded-br-full
							bg-primaryBlue
							border-2
							border-black
							p-12
							'
					>
						{/* SECTION CONTENT DIV */}

						<div>
							{/* SECTION HEADING */}

							<h1
								id='section2-heading'
								className='
									text-7xl
									max-w-[709px]
									font-semibold
									'
							>
								What is Opnwal?
							</h1>

							{/* SECTION DESCRIPTION DIV */}

							<div
								id='section2-description'
								className='
									max-w-[660px]
									text-lg
									mt-6
									ml-4
								'
							>
								<p className='mb-4'>
									Opnwal is revolutionizing the Art World.
								</p>
								<p className='mb-4'>
									Our cutting-edge platform empowers artists to thrive
									by selling their art, enables businesses to discover
									new revenue streams and clientele, and connects fine
									art collectors with the pulse of local art scenes.
								</p>

								<p className='mb-4'>
									You’ll discover that our platform not only
									simplifies the process of buying and selling art but
									also fosters a stronger art culture within
									communities.
								</p>

								<p className='mb-4'>
									Experience the future of art commerce with our
									sleek, user-friendly technology, designed to empower
									our users.
								</p>

								<strong>
									<p>Opnwal is where art meets opportunity.</p>
								</strong>
							</div>
						</div>
					</motion.div>

					{/* INFO CIRCLE */}

					<motion.div
						initial={{ opacity: 0, scale: 0.9, x: -30 }}
						whileInView={{
							opacity: 1,
							scale: 1,
							x: 0,
							y: 0,
						}}
						transition={{
							duration: 1.25,
							ease: 'easeOut',
						}}
						viewport={{ once: true }}
						className='
							flex
							z-15
							self-center
							items-center
							justify-self-center
							justify-center
							col-start-5
							col-end-7
							row-start-2
							row-end-4
							mt-12
							w-[81px]
							h-[81px]
							border-2
							rounded-full
							border-black
							bg-white
							'
					>
						<p className='m-auto flex self-center text-center text-3xl font-bold'>
							i
						</p>
					</motion.div>

					{/* SQUIGGLE DIV */}

					<motion.div
						initial={{ opacity: 0, scale: 0.9, x: 30 }}
						whileInView={{
							opacity: 1,
							scale: 1,
							x: 0,
						}}
						animate={{ opacity: 1, scale: 1 }}
						whileHover={{ x: 10 }}
						transition={{
							type: 'spring',
							damping: 3,
							stiffness: 50,
							restDelta: 0.001,
						}}
						viewport={{ once: true }}
						className='
							self-start
							justify-self-start
							mt-16
							col-start-6
							col-end-8
							row-start-1
							row-end-1
					'
					>
						<div>
							<Image
								className='relative'
								src='/squiggles/squiggle1.svg'
								width='272'
								height='31'
								alt='Squiggle'
							/>
						</div>
					</motion.div>
				</section>
				<h1>Main</h1>
			</main>
			<footer>
				<h1>Footer</h1>
			</footer>
		</div>
	);
};

export default LandingPage;
