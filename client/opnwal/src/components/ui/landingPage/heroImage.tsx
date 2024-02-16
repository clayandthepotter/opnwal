import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroImage = () => {
	return (
		<motion.div
			initial={{ opacity: 0, x: 70 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{
				delay: 0.25,
				duration: 0.75,
				ease: 'easeOut',
			}}
			id='hero-image'
			className='
								drop-shadow-2xl
								z-0
								self-start
								justify-self-end
								mt-2
								col-start-5
								col-end-9
								row-start-1
								row-end-6
								
								sm:row-start-1
								sm:row-end-6
								sm:col-start-5
								sm:col-end-9
								sm:ml-7
								
								md:row-start-1
								md:row-end-8
								md:w-[325px]
								
								lg:row-start-1
								lg:row-end-10
								lg:w-[400px]

								xl:row-start-1
								xl:row-end-10
								xl:w-[500px]
								'
		>
			<Image
				src='/hero/hero-photo.png'
				width='498'
				height='747'
				alt='Hero Photo'
			/>
		</motion.div>
	);
};
export default HeroImage;
