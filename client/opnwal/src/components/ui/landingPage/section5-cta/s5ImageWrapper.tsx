import { motion } from 'framer-motion';

const S5ImageWrapper = ({ children }: any) => {
	return (
		<motion.div
			id='imageContainer'
			initial={{ opacity: 0}}
			whileInView={{
				opacity: 1
			}}
			transition={{
				delay: 2,
				duration: 1.75,
				ease: 'easeOut',
			}}
			viewport={{ once: true }}
			className='
										h-[1028px]
										w-[1028px]
										flex
										rounded-t-full
										bg-primaryBlue
										border
										border-black
										drop-shadow-2xl
										'
		>
			{children}
		</motion.div>
	);
};
export default S5ImageWrapper;
