'use client';

import { motion } from 'framer-motion';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

const S2MainContent = () => {
	return (
		<motion.div
			initial={{ opacity: 0, x: -100 }}
			whileInView={{
				opacity: 1,
				x: 0,
				y: 0,
			}}
			transition={{
				delay: 0.2,
				duration: 1.5,
				ease: 'easeOut',
			}}
			viewport={{ once: true }}
			className='
							drop-shadow-2xl
							w-[962px] 
							h-[500px]
							self-start
							justify-self-start
							rounded-r-full
							bg-primaryBlue
							border-2
							border-black
							px-12
							py-6
							'
		>
			{/* SECTION CONTENT DIV */}

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{
					opacity: 1,
				}}
				transition={{
					delay: 0.2,
					duration: 1,
					ease: 'easeOut',
				}}
				viewport={{ once: true }}
			>
				<TextGenerateEffect
					className='
										text-8xl
										max-w-[800px]
										font-normal'
					words={'What is Opnwal?'}
				/>

				{/* SECTION DESCRIPTION DIV */}

				<div
					id='section2-description'
					className='
									max-w-[660px]
									text-lg
									mt-6
									ml-4
									text-slate-800
								'
				>
					<strong>
						<p className='mb-4'>
							Opnwal is revolutionizing the Art World.
						</p>
					</strong>
					<p className='mb-4'>
						Our cutting-edge platform empowers artists to thrive by
						selling their art, enables businesses to discover new
						revenue streams and clientele, and connects fine art
						collectors with the pulse of local art scenes.
					</p>

					<p className='mb-4'>
						You’ll discover that our platform not only simplifies the
						process of buying and selling art but also fosters a
						stronger art culture within communities.
					</p>

					<p className='mb-4'>
						Experience the future of art commerce with our sleek,
						user-friendly technology, designed to empower our users.
					</p>

					<strong>
						<p>Opnwal is where art meets opportunity.</p>
					</strong>
				</div>
			</motion.div>
		</motion.div>
	);
};
export default S2MainContent;
