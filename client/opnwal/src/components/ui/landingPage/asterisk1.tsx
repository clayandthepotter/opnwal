import { motion } from 'framer-motion';
import Image from 'next/image';

const Asterisk1 = () => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			whileHover={{ scale: 1.2, rotate: 90 }}
			transition={{ type: 'spring', duration: 1, delay: 0.2 }}
			className='
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
