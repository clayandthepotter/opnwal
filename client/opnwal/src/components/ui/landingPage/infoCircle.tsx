import { motion } from 'framer-motion';

const InfoCircle = () => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.9, x: -30 }}
			whileInView={{
				opacity: 1,
				scale: 1,
				x: 0,
				y: 0,
			}}
			transition={{
				duration: 1.25,
				ease: 'easeOut',
			}}
			viewport={{ once: true }}
			className='
							flex
							z-20
							self-center
							items-center
							justify-self-center
							justify-center
							col-start-5
							col-end-7
							row-start-2
							row-end-4
							mt-12
							w-[81px]
							h-[81px]
							border-2
							rounded-full
							border-black
							bg-white
							'
		>
			<p className='m-auto flex self-center text-center text-3xl font-bold'>
				i
			</p>
		</motion.div>
	);
};
export default InfoCircle;
