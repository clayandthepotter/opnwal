import { motion } from 'framer-motion';
import Image from 'next/image';

const Asterisk1 = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1, y: 0 }}
			whileHover={{ scale: 1.1, rotate: 90 }}
			transition={{
				type: 'spring',
				damping: 5,
				stiffness: 50,
				restDelta: 0.001,
				delay: 0.2,
				duration: 1,
				ease: 'easeOut',
			}}
			className='
				z-20
        relative
        justify-self-center
        self-end
        col-start-3
        col-end-6
        row-start-4
        row-end-6
        min-w-max
        h-auto
				m-11
      '
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
export default Asterisk1;
