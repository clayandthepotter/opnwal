'use client';

import { motion } from 'framer-motion';

const S2MainContent = () => {
	return (
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
