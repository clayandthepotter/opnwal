import { ReactNode } from 'react';

export default function PageWrapper({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<div className='flex m-auto pt-2 px-4 space-y-2 bg-zinc-100 flex-grow justify-items-center'>
			<div className='max-w-[1380px] m-auto flex flex-col flex-grow pt-2 px-4 justify-self-center space-y-2'>
				{children}
			</div>
		</div>
	);
}
