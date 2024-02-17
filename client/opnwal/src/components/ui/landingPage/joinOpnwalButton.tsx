import { Button } from '@/components/ui/button';
import Link from 'next/link';

const JoinOpnwalButton = () => {
	return (
		<Button
			variant='outlineBgGradient'
			color='amber'
			size='jumbo'
			className='drop-shadow-2xl border-2 z-30 -m-12'
			asChild
		>
			<Link href='/signup'>Join Opnwal</Link>
		</Button>
	);
};
export default JoinOpnwalButton;
