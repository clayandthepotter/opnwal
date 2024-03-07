import { Button } from '@/components/global/button';
import { options } from '@/lib/auth';
import { getServerSession } from 'next-auth';

const Home = async () => {
	const session = await getServerSession(options);
	if (!session) {
		return (
			<div
				className='
					relative
					p-5
					flex
					flex-col
					max-w-[500px]
					justify-center
					items-center
					bg-primaryBlue/10
					rounded-[30px]
					border
					border-black
					overflow-auto
					pb-10
				'
			>
				<h1 className='text-5xl mb-3 mt-5 flex min-w-min font-medium text-center'>
					Access Denied
				</h1>
				<h2 className='text-4xl mb-10 mt-5 flex min-w-min font-medium text-center'>
					You must be signed in to view this page
				</h2>
				<a href='/sign-in'>
					<Button>Sign In</Button>
				</a>
			</div>
		);
	}
	return (
		<>
			<span className='font-bold text-4xl'>Home</span>
			<div className='border-dashed border border-zinc-500 w-full h-12 rounded-lg'></div>
			<div className='border-dashed border border-zinc-500 w-full h-64 rounded-lg'></div>
			<div className='border-dashed border border-zinc-500 w-full h-64 rounded-lg'></div>
			<div className='border-dashed border border-zinc-500 w-full h-64 rounded-lg'></div>
			<div className='border-dashed border border-zinc-500 w-full h-64 rounded-lg'></div>
			<div className='border-dashed border border-zinc-500 w-full h-64 rounded-lg'></div>
		</>
	);
};

export default Home;
