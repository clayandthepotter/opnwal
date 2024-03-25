import { motion } from 'framer-motion';

const S4HeadingDiv = () => {
	return (
		<motion.div
			id='s4-heading-div'
			initial={{ scale: 0.9, y: 30 }}
			whileInView={{
				scale: 1,
				x: 0,
			}}
			transition={{
				duration: 1.75,
				ease: 'easeOut',
			}}
			viewport={{ once: true }}
			className='
											drop-shadow-2xl
											self-start
											col-start-1
											col-end-1
											row-start-1
											flex
											max-w-[808px]
											max-h-[197px]
											z-20
											mt-28
											mx-auto
											bg-primaryBlue
											border
											border-black
											rounded-full
										'
		>
			<h2
				className='
												text-center
												text-8xl
												font-normal
												m-auto
												justify-self-center
												self-center'
			>
				FAQs
			</h2>
		</motion.div>
	);
};

export default S4HeadingDiv;
