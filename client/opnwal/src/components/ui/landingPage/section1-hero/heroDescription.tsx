import { motion } from 'framer-motion';

const HeroDescription = () => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.9, y: 30 }}
			animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
			transition={{
				delay: 0.2,
				duration: 1,
				ease: 'easeOut',
			}}
			id='hero-section-description'
			className='
        relative
        font-semibold
        self-start
        2xl:text-[1.5vw]
        min-w-[225px]
        w-[26vw]
        h-auto
        ml-[4vw]
        justify-self-start
        text-slate-800
        z-10
        col-start-1
        col-end-2
        row-start-1
        row-end-2
        '
		>
			<p>
				Empowering artists, businesses, and collectors through
				innovative, marketplace technology.
			</p>
		</motion.div>
	);
};
export default HeroDescription;
