import { motion } from 'framer-motion';
import { Button } from '../button';

const HeroButton = () => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.9, y: 10 }}
			animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
			transition={{
				delay: 0.2,
				duration: 0.75,
				ease: 'easeOut',
			}}
			whileTap={{ scale: 0.7 }}
			className='
        ml-5
        self-center
        justify-self-start

        xxs:mt-8
        xxs:self-center
        xxs:row-start-3
        xxs:col-start-1
        xxs:col-end-2

        sm:self-center
        sm:justify-self-start
        sm:col-start-1
        sm:col-end-2
        sm:row-start-3
        sm:row-end-3
        sm:mt-20
        sm:ml-6

        md:self-center
        md:justify-self-start
        md:col-start-1
        md:col-end-2
        md:row-start-4
        md:row-end-4
        md:mt-5
        md:ml-24
        
        lg:self-center
        lg:justify-self-start
        lg:col-start-1
        lg:col-end-2
        lg:row-start-4
        lg:row-end-4
        lg:mt-5
        lg:ml-24	

        xl:self-center
        xl:justify-self-start
        xl:col-start-1
        xl:col-end-2
        xl:row-start-4
        xl:row-end-4
        xl:mt-5
        xl:ml-24	

        2xl:self-center
        2xl:justify-self-start
        2xl:col-start-1
        2xl:col-end-2
        2xl:row-start-4
        2xl:row-end-4
        2xl:mt-10
        2xl:ml-24	
      '
		>
			<Button
				className='
        hover:-translate-y-0.5
        hover:ease-out
        hover:duration-20'
				size='xl'
			>
				Sign Up
			</Button>
		</motion.div>
	);
};
export default HeroButton;
