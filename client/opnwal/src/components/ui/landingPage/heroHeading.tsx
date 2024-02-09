'use client';

import { motion } from 'framer-motion';

const HeroHeading = () => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.9, x: -10 }}
			animate={{ opacity: 1, scale: 1, x: 0 }}
			transition={{
				duration: 0.25,
				ease: [0, 0.71, 0.2, 1.01],
			}}
			id='hero-section-heading'
			className='
							border border-black rounded-full
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

							xxs:w-[250px]

							xs:w-[300px]

							sm:justify-self-start
							sm:self-start
							sm:w-[450px]
							sm:py-4
							sm:px-8
							sm:mt-6

							md:justify-self-start
							md:w-[500px]
							md:col-start-1
							md:col-end-6
							md:row-start-1
							md:row-end-2
							md:mt-8
							md:ml-0
							md:py-5
							md:px-12
							
							lg:w-[700px]
							lg:mt-8
							lg:ml-7
							lg:py-9
							lg:px-16

							xl:w-[800]
							xl:mt-8
							xl:ml-7
							xl:py-9
							xl:px-16
							xl:col-start-1
							xl:col-end-7
							xl:row-start-1
							xl:row-end-2

							2xl:w-[803px]
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
			<h1
				className='
								font-semibold
								w-[200px]
								text-xl
								xxs:w-[215px]
								xs:text-2xl
								xs:w-[275px]
								sm:text-3xl								
								sm:w-[350px]
								md:text-4xl								
								md:w-[425px]
								lg:text-6xl
								lg:w-[600px]
								2xl:text-6xl								
								2xl:w-[703px]'
			>
				Connecting Creativity and Commerce
			</h1>
		</motion.div>
	);
};
export default HeroHeading;
