import { ReactNode } from 'react';

export default function PageWrapper({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<div className='flex m-auto pt-2 px-4 space-y-2 bg-zinc-100 flex-grow justify-center min-h-[100vh]'>
			<div className='max-w-[1380px] flex flex-col flex-grow pt-2 px-4 justify-start items-center space-y-2'>
				{children}
			</div>
		</div>
	);
}
