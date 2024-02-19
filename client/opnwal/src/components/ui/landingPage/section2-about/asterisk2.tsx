import { motion } from 'framer-motion';
import Image from 'next/image';

const Asterisk2 = () => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8, y: 30 }}
			whileInView={{
				opacity: 1,
				scale: 1,
				y: 0,
			}}
			animate={{ opacity: 1, scale: 1, y: 0 }}
			whileHover={{ scale: 1.2, rotate: 90 }}
			transition={{
				type: 'spring',
				damping: 3,
				stiffness: 50,
				restDelta: 0.001,
			}}
			viewport={{ once: true }}
			className='
        self-start
        justify-self-start
        mt-16
        mr-7
        col-start-8
        col-end-9
        row-start-1
        row-end-3'
		>
			<Image
				className='relative'
				src='/asterisks/asterisk85px.svg'
				width='85'
				height='85'
				alt='Asterisk'
			/>
		</motion.div>
	);
};
export default Asterisk2;
