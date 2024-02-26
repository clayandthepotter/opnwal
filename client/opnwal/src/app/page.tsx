'use client';

import { motion } from 'framer-motion';
import NavMain from '@/components/ui/landingPage/nav/navMain';
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
import Squiggle2 from '../components/ui/landingPage/section3-info/squiggle2';
import S3ContentDiv from '@/components/ui/landingPage/section3-info/s3ContentDiv';
import { TypewriterText } from '@/components/ui/landingPage/section5-cta/typewriterText';
import S4HeadingDiv from '@/components/ui/landingPage/section4-faqs/s4HeadingDiv';
import { FaqsDivContainer } from '@/components/ui/landingPage/section4-faqs/faqsDivContainer';
import S5HeadingWrapper from '@/components/ui/landingPage/section5-cta/s5HeadingWrapper';
import S5ImageWrapper from '@/components/ui/landingPage/section5-cta/s5ImageWrapper';
import S5Image from './../components/ui/landingPage/section5-cta/s5Image';
import LandingPageFooter from '@/components/ui/landingPage/footer/landingPageFooter';
import { SessionProvider } from 'next-auth/react';

const LandingPage = () => {
	return (
		<SessionProvider>
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
								id='faqsContentDiv'
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
								className='
											drop-shadow-2xl
											grid
											grid-cols-1
											grid-rows-1
											min-h-max
											mx-auto
										'
							>
								<S4HeadingDiv />
								<FaqsDivContainer />
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
							<S5HeadingWrapper>
								<TypewriterText />
							</S5HeadingWrapper>
							<S5ImageWrapper>
								<S5Image />
							</S5ImageWrapper>
							<JoinOpnwalButton />
							<div className='mt-26'>
								<Squiggle1 />
							</div>
						</section>
					</main>
					{/* FOOTER */}
					<LandingPageFooter />
				</div>
			</div>
		</SessionProvider>
	);
};

export default LandingPage;
