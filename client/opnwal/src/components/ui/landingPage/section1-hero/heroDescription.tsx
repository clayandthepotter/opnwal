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
        text-xs

        mobileSM:mr-1

        xxs:row-start-2
        xxs:row-end-4
        xxs:self-start
        xxs:pt-7

        xs:text-sm
        xs:relative

        sm:text-xl
        sm:font-normal
        sm:self-start
        sm:justify-self-start
        sm:col-start-1
        sm:col-end-5
        sm:row-start-2
        sm:row-end-4
        sm:mt-12
        sm:mr-0
        sm:pr-2
        sm:pt-0

        md:text-2xl
        md:font-medium
        md:self-start
        md:justify-self-start
        md:col-start-1
        md:col-end-6
        md:row-start-2
        md:row-end-4
        md:mt-20
        md:mr-10
        md:pt-0

        xl:mt-5
        xl:text-2xl
        xl:w-[600px]
        xl:h-[91px]
        xl:row-start-4
        xl:row-end-8
        xl:col-start-1
        xl:col-end-6

        2xl:self-start
        2xl:mt-20
        2xl:ml-24
        2xl:text-3xl
        2xl:w-[500px]
        2xl:h-auto
        2xl:row-start-3
        2xl:row-end-5
        2xl:col-start-1
        2xl:col-end-6
        
        row-start-2
        row-end-4
        col-start-1
        col-end-5
        justify-self-center
        self-start
        text-slate-800
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
