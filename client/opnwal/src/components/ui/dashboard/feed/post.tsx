export default function Post({
	id,
	title,
	description,
	username,
	likes,
	comments,
}: {
	id: string;
	title: string;
	description: string;
	username: string;
	likes: any;
	comments: any;
}) {
	return (
		<div
			key={id}
			className='flex-col content-around justify-center relative bg-white row border my-5 px-3 py-4 border-black w-full min-h-[750px] rounded-[36px] drop-shadow-xl max-w-[550px]'
		>
			<h3 className='font-bold text-3xl pt-2'>@{username}</h3>
			<div className='flex mt-5 overflow-hidden border justify-center align-middle bg-primaryBlue/10 border-black min-w-[50%] h-[400px] rounded-[30px]'>
				<p className='m-auto align-middle'>Image</p>
			</div>

			<div className='mt-5 h-10 flex justify-start w-full'>
				<div className='flex w-7 h-7 self-center justify-self-end'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='28'
						height='28'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						stroke-width='1.25'
						stroke-linecap='round'
						stroke-linejoin='round'
						className='lucide lucide-heart'
					>
						<path d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' />
					</svg>
				</div>
				<div className='flex w-7 h-7 ml-4 self-center justify-self-end'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='28'
						height='28'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						stroke-width='1.25'
						stroke-linecap='round'
						stroke-linejoin='round'
						className='lucide lucide-message-circle'
					>
						<path d='M7.9 20A9 9 0 1 0 4 16.1L2 22Z' />
					</svg>
				</div>
			</div>

			<div className='mt-5 pl-2 flex-col border-l border-l-primaryBlue'>
				<h5 className='text-xl font-semibold'>{title}</h5>
				<p className='break-normal text-lg mt-1 h-[100px] overflow-scroll'>
					{description}
				</p>
			</div>
		</div>
	);
}
