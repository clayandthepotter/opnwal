import { motion } from 'framer-motion';
import Image from 'next/image';

const S3ContentDiv = () => {
	return (
		<motion.div
			initial={{ opacity: 0, x: 100 }}
			whileInView={{
				opacity: 1,
				x: 0,
			}}
			transition={{
				duration: 1.25,
				ease: 'easeOut',
			}}
			viewport={{ once: true }}
			className='
									drop-shadow-2xl
									z-14
									h-[852px]
									w-[1246px]
									border
									border-black
									rounded-l-full
									bg-primaryBlue
									col-start-1
									col-end-9
									justify-self-end
									row-start-1
									row-end-6
									self-center
									grid
									grid-cols-12
									grid-rows-12
								'
		>
			{/* IMAGE */}

			<div
				id='s3Image'
				className='
										drop-shadow-2xl
										flex
										col-start-2
										row-start-1
										object-cover
										mt-40
										p-0
										relative
										border
										border-black
										rounded-l-full
										h-[630px]
										w-[617px]
										overflow-hidden
									'
			>
				<Image
					style={{ alignSelf: 'end' }}
					src='/s3Image/pexels-rfstudio-3817580.jpg'
					width='667'
					height='932'
					alt='Woman with sculpture'
				/>
			</div>

			{/* S3 HEADING DIV */}

			<div
				id='s3h2'
				className='
										col-start-1
										col-end-13
										row-start-1
										row-end-3
										self-center
										mt-7
										mr-6
										justify-self-end
									'
			>
				<h2 className='text-8xl font-normal'>How does it work?</h2>
			</div>

			{/* S3 COPY DIV */}

			<div
				id='s3Copy'
				className='
										col-start-8
										col-end-13
										max-w-[477px]
										ml-7
										mt-3
										text-xl										
									text-slate-800
									'
			>
				<p className='mb-1'>
					<strong>For Artists:</strong>
				</p>
				<p className='mb-8'>
					Opnwal offers artists a unique opportunity to sell their art
					on our platform. By simply creating an account, uploading
					their work, and connecting with businesses for consignment
					opportunities, Opnwal enhances their exposure, income, and
					network.
				</p>
				<p className='mb-1'>
					<strong>For Businesses:</strong>
				</p>
				<p className='mb-8'>
					Businesses can engage with artists, agree on consignment
					terms, and earn commissions with Opnwal by integrating
					themselves into the local art scene, attracting unique
					visitors, and generating extra revenue.
				</p>
				<p className='mb-1'>
					<strong>For Collectors:</strong>
				</p>
				<p className='mb-8'>
					Collectors, who are crucial for the marketplace, enjoy a
					streamlined art shopping experience with advanced search
					filters and the option to view art in person, ensuring a
					perfect addition to their collections.
				</p>
				<strong>
					<p>Opnwal simplifies the art buying experience.</p>
				</strong>
			</div>
		</motion.div>
	);
};
export default S3ContentDiv;
