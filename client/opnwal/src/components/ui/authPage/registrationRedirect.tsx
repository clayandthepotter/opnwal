import { Button } from '@/components/global/button';
import Link from 'next/link';

const RegistrationRedirect = () => {
	return (
		<div
			className='
				relative
				p-5
				flex
				flex-col
				justify-center
				items-center
				bg-primaryBlue/10
				rounded-[30px]
				border
				border-black
				overflow-auto
				pb-20
			'
		>
			<h1 className='text-5xl mt-3 mb-5'>Success!</h1>
			<hr className='w-full mb-5 border border-black' />
			<div
				className='
					px-5 mt-2 flex-col justify-center
					min-w-[350px]'
			>
				<p className='text-xl my-3 text-center'>
					Your account is registered.
				</p>
				<br />
				<p className='text-xl text-center'>
					Please sign in using your credentials.
				</p>
			</div>
		</div>
	);
};

export default RegistrationRedirect;
