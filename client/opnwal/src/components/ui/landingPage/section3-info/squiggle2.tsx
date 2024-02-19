import { motion } from 'framer-motion';
import Image from 'next/image';

const Squiggle2 = () => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.9, x: 30 }}
			whileInView={{
				opacity: 1,
				scale: 1,
				x: 0,
			}}
			animate={{ opacity: 1, scale: 1 }}
			whileHover={{ x: 10 }}
			transition={{
				type: 'spring',
				damping: 3,
				stiffness: 50,
				restDelta: 0.001,
			}}
			viewport={{ once: true }}
			className='
                      z-10
                      self-start
                      justify-self-start
                      mt-14
                      ml-20
                      col-start-1
                      col-end-3
                      row-start-1
                      row-end-2
                  '
		>
			<Image
				className='relative'
				src='/squiggles/squiggle1.svg'
				width='272'
				height='31'
				alt='Squiggle'
			/>
		</motion.div>
	);
};
export default Squiggle2;
