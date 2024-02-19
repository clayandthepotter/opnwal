import { Button } from '@/components/global/button';
import { motion } from 'framer-motion';
import Link from 'next/link';

const JoinOpnwalButton = () => {
	return (
		<motion.div
			initial={{ scale: 0, y: 100 }}
			whileInView={{
				scale: 1,
				x: 0,
				y: 0,
			}}
			animate={{ scale: 1, y: 0 }}
			transition={{
				duration: 0.5,
				delay: 5,
				ease: 'easeOut',
			}}
			viewport={{ once: true }}
			className='div'
		>
			<Button
				variant='outlineBgGradient'
				color='amber'
				size='jumbo'
				className='drop-shadow-2xl border-2 z-30 -m-12 hover:border-4 hover:font-semibold'
				asChild
			>
				<Link href='/signup'>Join Opnwal</Link>
			</Button>
		</motion.div>
	);
};
export default JoinOpnwalButton;
