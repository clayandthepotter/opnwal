'use client';

import { motion } from 'framer-motion';

const S2MainContent = () => {
	return (
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

			<div>
				{/* SECTION HEADING */}

				<h2
					id='section2-heading'
					className='
									text-8xl
									max-w-[800px]
									font-semibold
									'
				>
					What is Opnwal?
				</h2>

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
			</div>
		</motion.div>
	);
};
export default S2MainContent;
