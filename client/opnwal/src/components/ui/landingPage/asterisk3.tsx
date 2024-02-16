import { motion } from 'framer-motion';
import Image from 'next/image';

const Asterisk3 = () => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			whileHover={{ scale: 1.2, rotate: 90 }}
			transition={{
				type: 'spring',
				damping: 3,
				stiffness: 50,
				restDelta: 0.001,
			}}
			className='
							z-20
							self-center
							justify-self-end
							mt-20
							ml-7
							col-start-6
							col-end-8
							row-start-4
							row-end-6'
		>
			<Image
				className='relative'
				src='/asterisks/asterisk191px-noShadow_1.svg'
				width='191'
				height='191'
				alt='Asterisk'
			/>
		</motion.div>
	);
};
export default Asterisk3;
