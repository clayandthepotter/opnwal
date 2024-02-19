'use client';

import { motion } from 'framer-motion';
import { TextGenerateEffect } from '../../../global/text-generate-effect';

const HeroHeading = () => {
	return (
		<motion.div
			initial={{ opacity: 0, x: -150 }}
			animate={{
				opacity: 1,
				x: 0,
			}}
			transition={{
				delay: 0.2,
				duration: 1.25,
				ease: 'easeOut',
			}}
			id='hero-section-heading'
			className='
			drop-shadow-xl
			z-10
			border-2 border-black rounded-full
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

			2xl:w-[800px]
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
			<motion.div
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
				}}
				transition={{
					delay: 0.5,
					duration: 1.25,
					ease: 'easeOut',
				}}
			>
				<h1
					className='
									font-normal
									w-[200px]
									text-[3vw]
									xxs:w-[215px]
									xs:text-2xl
									xs:w-[275px]
									sm:text-3xl
									sm:w-[350px]
									md:text-4xl
									md:w-[425px]
									lg:text-6xl
									lg:w-[600px]
									2xl:text-[4vw]
									2xl:w-[800px]'
				>
					<TextGenerateEffect
						words={'Connecting Creativity and Commerce'}
					/>
				</h1>
			</motion.div>
		</motion.div>
	);
};
export default HeroHeading;
