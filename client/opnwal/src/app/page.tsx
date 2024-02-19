'use client';

import { motion } from 'framer-motion';
import NavMain from '@/components/navMain';
import Image from 'next/image';
import JoinOpnwalButton from '@/components/ui/landingPage/section5-cta/joinOpnwalButton';
import HeroHeading from '@/components/ui/landingPage/section1-hero/heroHeading';
import HeroDescription from '@/components/ui/landingPage/section1-hero/heroDescription';
import HeroButton from '@/components/ui/landingPage/section1-hero/heroButton';
import Asterisk1 from '@/components/ui/landingPage/section1-hero/asterisk1';
import Asterisk2 from '@/components/ui/landingPage/section2-about/asterisk2';
import HeroImage from '@/components/ui/landingPage/section1-hero/heroImage';
import S2MainContent from '@/components/ui/landingPage/section2-about/s2MainContent';
import InfoCircle from '@/components/ui/landingPage/section2-about/infoCircle';
import Squiggle1 from '@/components/ui/landingPage/section2-about/squiggle1';
import Asterisk3 from '@/components/ui/landingPage/section2-about/asterisk3';
import { FaqsAccordions } from '@/components/ui/landingPage/section4-faqs/faqsAccordion';
import Squiggle2 from '../components/ui/landingPage/section3-info/squiggle2';
import S3ContentDiv from '@/components/ui/landingPage/section3-info/s3ContentDiv';
import { Button } from '@/components/ui/button';
import { TypewriterText } from '@/components/ui/landingPage/section5-cta/typewriterText';

const LandingPage = () => {
	return (
		<div
			id='landing-page-body'
			className='bg-gradient-to-br from-sky-100 via-pink-100 to-amber-100'
		>
			<div className='p-5 max-w-[1400px] m-auto self-center'>
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
						<NavMain />
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
						<Squiggle2 />
						<S3ContentDiv />
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
						<motion.div
							initial={{ opacity: 0, scale: 0.9, y: 30 }}
							whileInView={{
								opacity: 1,
								scale: 1,
								x: 0,
								y: 0,
							}}
							transition={{
								duration: 1.75,
								ease: 'easeOut',
							}}
							viewport={{ once: true }}
							id='faqsContentDiv'
							className='
									drop-shadow-2xl
									grid
									grid-cols-1
									grid-rows-1
									min-h-max
									mx-auto
								'
						>
							<motion.div
								initial={{ scale: 0.9, y: 30 }}
								whileInView={{
									scale: 1,
									x: 0,
								}}
								transition={{
									duration: 1.75,
									ease: 'easeOut',
								}}
								viewport={{ once: true }}
								id='s4header'
								className='
										drop-shadow-2xl
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
											font-normal
											m-auto
											justify-self-center
											self-center'
								>
									FAQs
								</h2>
							</motion.div>
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
						</motion.div>
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
									flex
									w-auto
									max-w-[1100px]
									border-b-2
									border-black
									mb-14
									py-3
								'
						>
							<h2
								className='
										justify-self-center
										self-center
										w-full
										text-8xl
										font-semibold
										text-center
										-mt-3
									'
							>
								<TypewriterText />
							</h2>
						</div>
						<motion.div
							initial={{ opacity: 0, scale: 0.75 }}
							whileInView={{
								opacity: 1,
								scale: 1,
							}}
							transition={{
								delay: 2,
								duration: 1.75,
								ease: 'easeOut',
							}}
							viewport={{ once: true }}
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
							<motion.div
								initial={{ opacity: 0, scale: 0.9, y: 30 }}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
									y: 0,
								}}
								transition={{
									delay: 0.1,
									duration: 1.75,
									ease: 'easeOut',
								}}
								viewport={{ once: true }}
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
							</motion.div>
						</motion.div>
						<JoinOpnwalButton />
						<div className='mt-26'>
							<Squiggle1 />
						</div>
					</section>
				</main>

				{/* FOOTER */}

				<footer id='footer' className='py-28 block'>
					<div
						id='socialIcons'
						className='mb-9 w-auto grid grid-cols-1 grid-rows-1 justify-items-center'
					>
						<Button variant='ghost' size='iconJumbo'>
							<Image
								className='justify-self-center'
								src='/socialIcons/instagramIcon.svg'
								width='50'
								height='50'
								alt='Instagram Icon'
							/>
						</Button>
					</div>
					<p className='text-center'>
						© 2024 Opnwal, All Rights Reserved
					</p>
				</footer>
			</div>
		</div>
	);
};

export default LandingPage;

// <div className='flex'>
// 	<SideNav />
// 	<main className='flex-1'>
// 		<MarginWidthWrapper>
// 			<Header />
// 			<HeaderMobile />
// 			<PageWrapper>{children}</PageWrapper>
// 		</MarginWidthWrapper>
// 	</main>
// </div>;
