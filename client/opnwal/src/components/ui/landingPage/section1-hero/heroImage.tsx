import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroImage = () => {
	return (
		<div
			className='
						z-0
						col-start-1
						col-end-2
						row-start-1
						row-end-2
						w-full
						h-full
						flex
		'
		>
			<motion.div
				initial={{ opacity: 0, x: 70 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{
					delay: 0.25,
					duration: 1,
					ease: 'easeOut',
				}}
				id='hero-image'
				className='
									overflow-hidden
									border
									border-black
									drop-shadow-2xl
									w-full
									max-h-full
									min-h-[400px]
									items-start
									'
			>
				<Image
					className='absolute '
					src='/hero/muhammad-rahim-ali-NRBBze-P0Sc-unsplash.jpg'
					style={{ objectFit: 'cover' }}
					fill={true}
					quality={100}
					alt='Hero Photo'
				/>
			</motion.div>
		</div>
	);
};
export default HeroImage;
