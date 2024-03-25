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
			col-start-1
			col-end-2
			row-start-1
			row-end-2
			border border-black rounded-full
			bg-primaryBlue
			relative
			self-start
			justify-self-center
			min-w-[260px]
			w-[54vw]
			max-h-[300px]
			mt-5
			py-[2vw]
			px-[2vw]
			
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
				className='
					w-[50vw]
					'
			>
				<h1
					className='
									max-w-[800px]
									font-medium
									text-[4vw]/[4vw]
									mx-[2vw]
									'
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
