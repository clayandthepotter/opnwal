import { Button } from '@/components/global/button';
import Image from 'next/image';

const LandingPageFooter = () => {
	return (
		<footer id='footer' className='py-28 block'>
			<div
				id='socialIcons'
				className='mb-9 w-auto grid grid-cols-1 grid-rows-1 justify-items-center'
			>
				<a href='https://www.instagram.com/opnwal'>
					<Button
						variant='ghost'
						size='iconJumbo'
						className='hover:bg-primaryBlue/30'
					>
						<Image
							className='justify-self-center'
							src='/socialIcons/instagramIcon.svg'
							width='50'
							height='50'
							alt='Instagram Icon'
						/>
					</Button>
				</a>
			</div>
			<p className='text-center'>
				© 2024 Opnwal, All Rights Reserved
			</p>
		</footer>
	);
};
export default LandingPageFooter;
