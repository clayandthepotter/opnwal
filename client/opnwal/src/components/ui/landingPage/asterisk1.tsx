import { motion } from 'framer-motion';
import Image from 'next/image';

const Asterisk1 = () => {
	return (
		<motion.div
			whileHover={{ scale: 1.2, rotate: 180 }}
			transition={{ type: 'spring' }}
			className='
        relative
        transform 
        hover:rotate-360 
        transition-transform 
        duration-1000 
        ease-in-out
        justify-self-center
        self-center
        col-start-3
        col-end-5
        row-start-5
        row-end-7
        max-w-[191px]
        h-auto
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
