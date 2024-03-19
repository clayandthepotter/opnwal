import Image from 'next/image';
import { motion } from 'framer-motion';

const S5Image = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
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
											border
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
	);
};
export default S5Image;
