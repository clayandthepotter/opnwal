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
					id='s3'
					className='
						grid
						grid-cols-8
						grid-rows-5
						max-h-[860px]
					'
				>
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
										z-10
										self-start
										justify-self-start
										mt-14
										ml-20
										col-start-1
										col-end-3
										row-start-1
										row-end-2
								'
					>
						<Image
							className='relative'
							src='/squiggles/squiggle1.svg'
							width='272'
							height='31'
							alt='Squiggle'
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, scale: 0.9, y: 50 }}
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
							drop-shadow-2xl	
							z-14					
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
								row-start-1
								object-cover
								mt-40
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
							<h2 className='text-8xl font-semibold'>
								How does it work?
							</h2>
						</div>
						<div
							id='s3Copy'
							className='
								col-start-8
								col-end-13
								max-w-[477px]
								ml-7
								mt-3
								text-xl
							'
						>
							<p className='mb-2'>
								<strong>For Artists:</strong>
							</p>
							<p className='mb-9'>
								Opnwal offers artists a unique opportunity to sell
								their art on our platform. By simply creating an
								account, uploading their work, and connecting with
								businesses for consignment opportunities, Opnwal
								enhances their exposure, income, and network.
							</p>
							<p className='mb-2'>
								<strong>For Businesses:</strong>
							</p>
							<p className='mb-9'>
								Businesses can engage with artists, agree on
								consignment terms, and earn commissions with Opnwal by
								integrating themselves into the local art scene,
								attracting unique visitors, and generating extra
								revenue.
							</p>
							<p className='mb-2'>
								<strong>For Collectors:</strong>
							</p>
							<p className='mb-9'>
								Collectors, who are crucial for the marketplace, enjoy
								a streamlined art shopping experience with advanced
								search filters and the option to view art in person,
								ensuring a perfect addition to their collections.
							</p>
							<strong>
								<p>Opnwal simplifies the art buying experience.</p>
							</strong>
						</div>
					</motion.div>
				</section>

				{/* FAQs SECTION */}

				<section
					id='faqs'
					className='
						h-[1100px]
						flex
						m-auto
						'
				>
					<div
						id='faqsContentDiv'
						className='
							h-[900px]
						'
					>
						<div id='s4header'>
							<h2>FAQs</h2>
						</div>
						<div id='faqsDiv'></div>
					</div>
				</section>
			</main>
			<footer>
				<h1>Footer</h1>
			</footer>
		</div>
	);
};

export default LandingPage;
