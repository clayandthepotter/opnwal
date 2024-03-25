import { motion } from 'framer-motion';
import { Button } from '../../../global/button';

const HeroButton = () => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.9, y: 30 }}
			animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
			transition={{
				delay: 0.2,
				duration: 1,
				ease: 'easeOut',
			}}
			whileTap={{ scale: 0.7 }}
			className='
        ml-[4vw]
        self-center
        justify-self-center
        z-10
        col-start-1
        col-end-2
        row-start-1
        row-end-2
      '
		>
			<Button size='xl'>Sign Up</Button>
		</motion.div>
	);
};
export default HeroButton;
