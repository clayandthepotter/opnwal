'use client';

import { motion, useScroll } from 'framer-motion';
import NavMain from '@/components/navMain';
import Image from 'next/image';
import JoinOpnwalButton from '@/components/ui/landingPage/joinOpnwalButton';
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
import { FaqsAccordions } from './ui/landingPage/faqsAccordion';

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
					id='faqsSection'
					className='
						max-h-min
						flex
						m-auto
					'
				>
					<div
						id='faqsContentDiv'
						className='
							grid
							grid-cols-1
							grid-rows-1
							min-h-max
							mx-auto
						'
					>
						<div
							id='s4header'
							className='
								self-start
								col-start-1
								col-end-1
								row-start-1
								flex
								w-[808px]
								h-[197px]
								z-20
								mt-28
								mx-auto
								bg-primaryBlue
								border-2
								border-black
								rounded-full
							'
						>
							<h2
								className='
									text-center 
									text-8xl 
									font-semibold 
									m-auto 
									justify-self-center 
									self-center'
							>
								FAQs
							</h2>
						</div>
						<div
							id='faqsDivContainer'
							className='
								drop-shadow-2xl
								grid
								mt-52
								grid-cols-1
								grid-rows-1
								col-start-1
								col-end-1
								row-start-1
								self-start
								justify-self-center
								w-[1036px]
								h-auto
								z-15
								bg-primaryBlue
								border-2
								border-black
								rounded-[56px]
								overflow-hidden
								bg-gradient-to-br
								from-emerald-200
								via-purple-200
								to-sky-300
							'
						>
							<div className='z-20 col-start-1 row-start-1 p-20'>
								<hr
									id='divider'
									className='my-16 w-[892px] border border-black'
								/>
								<div>
									<FaqsAccordions />
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* SECTION 5 */}

				<section
					id='s5'
					className='
						pt-36
						relative
						grid 
						justify-items-center
					'
				>
					<div
						id='s5Header'
						className='
							drop-shadow-2xl
							flex
							w-auto
							h-[240px] 
							px-20
							bg-primaryBlue
							border-2
							border-black
							rounded-full
							mb-14
						'
					>
						<h2
							className='
								justify-self-center 
								self-center 
								w-full 
								text-8xl 
								text-center
								-mt-3	
							'
						>
							Step Into Something New
						</h2>
					</div>
					<div
						id='imageContainer'
						className='
							h-[1028px] 
							w-[1028px] 
							flex
							rounded-t-full
							bg-primaryBlue
							border-2
							border-black
							drop-shadow-2xl
							'
					>
						<div
							id='imageDiv'
							className='
								flex
								self-center
								m-auto
								h-[857px] 
								w-[857px] 
								rounded-t-full
								border-2
								border-black
								overflow-hidden
								object-fill
							'
						>
							<Image
								className='h-full w-full object-cover'
								src='/s5Image/pexels-anna-shvets-4483218.jpg'
								width='1920'
								height='1280'
								alt='Woman walking past art collection'
							/>
						</div>
					</div>
					<JoinOpnwalButton />
					<div className='mt-26'>
						<Squiggle1 />
					</div>
				</section>
			</main>

			{/* FOOTER */}

			<footer id='footer' className='py-28 flex-col'>
				<div
					id='socialIcons'
					className='mb-9 grid grid-cols-1 grid-rows-1 justify-items-center'
				>
					<Image
						className='justify-self-center'
						src='/socialIcons/instagramIcon.svg'
						width='50'
						height='50'
						alt='Instagram Icon'
					/>
				</div>
				<p className='text-center'>
					© 2024 Opnwal, All Rights Reserved
				</p>
			</footer>
		</div>
	);
};

export default LandingPage;
