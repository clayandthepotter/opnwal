'use client';

import { Button } from '@/components/global/button';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/global/carousel';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/global/dialog';
import { Textarea } from '@/components/global/textarea';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Comments from '@/components/ui/dashboard/feed/comments';
import { prisma } from '@/lib/db';
import { useState } from 'react';

export default async function Post({
	id,
	title,
	description,
	username,
	imageUrls,
	likes,
	comments,
}: {
	id: string;
	title: string;
	description: string;
	username: string;
	imageUrls: Array<String>;
	likes: any;
	comments: any;
}) {
	// const [content, setContent] = useState('');
	// const [userId, setUserId] = useState('');
	// const [postId, setPostId] = useState('');

	// const handleSubmit = async () => {
	// 	const comment = await prisma.comment.create({
	// 		data: {
	// 			content: { content },
	// 			userId: { userId },
	// 			postId: { postId },
	// 			productId: { productId },
	// 			username: { username },
	// 		},
	// 	});
	// };

	return (
		<div
			key={id}
			className='flex-col content-around justify-center relative bg-white row border my-5 px-3 py-4 border-black w-full min-h-[750px] rounded-[36px] drop-shadow-xl max-w-[1100px]'
		>
			<Link
				href={`/${username}`}
				className='font-bold text-3xl pt-2 hover:underline'
			>
				@{username}
			</Link>
			<Carousel className=''>
				<CarouselContent className='space-x-6'>
					{imageUrls.map(
						(url: String, index: number, array: String[]) => (
							<CarouselItem
								key={index}
								className='relative flex w-full h-full m-0 object-fill items-center justify-center bg-black'
							>
								<img
									className='object-fill overflow-hidden'
									src={url as string}
									alt='user post img'
								/>
							</CarouselItem>
						)
					)}
				</CarouselContent>
				<motion.div
					whileHover={{ scale: 1.01 }}
					whileTap={{ scale: 0.98 }}
					transition={{
						type: 'spring',
						damping: 10,
					}}
				>
					<CarouselPrevious />
				</motion.div>
				<motion.div
					whileHover={{ scale: 1.01 }}
					whileTap={{ scale: 0.98 }}
					transition={{
						type: 'spring',
						damping: 10,
					}}
				>
					<CarouselNext />
				</motion.div>
			</Carousel>

			<div className='mt-14 h-10 flex justify-start w-full'>
				<div className='flex w-7 h-7 self-center justify-self-end'>
					<motion.div
						className='div'
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.9 }}
						transition={{
							type: 'spring',
							damping: 10,
						}}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='28'
							height='28'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							stroke-width='1'
							stroke-linecap='round'
							stroke-linejoin='round'
							className='lucide lucide-heart hover:fill-red-300'
						>
							<path d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' />
						</svg>
					</motion.div>
				</div>
				<Dialog>
					<DialogTrigger>
						<div className='flex w-7 h-7 ml-4 self-center justify-self-end'>
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.9 }}
								transition={{
									type: 'spring',
									damping: 10,
								}}
								className='div'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='28'
									height='28'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									stroke-width='1'
									stroke-linecap='round'
									stroke-linejoin='round'
									className='lucide lucide-message-circle hover:fill-primaryBlue/30 hover:lucide-message-circle-plus'
								>
									<path d='M7.9 20A9 9 0 1 0 4 16.1L2 22Z' />
								</svg>
							</motion.div>
						</div>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Comments</DialogTitle>
							<DialogDescription>
								<div className='flex flex-col content-between'>
									<Comments comments={comments} />
									<div>
										<Textarea
											maxLength={250}
											placeholder='Add your comment...'
											className='mb-3 max-h-[125px]'
										/>
										<div className='flex w-full justify-end'>
											<Button variant='outline' onClick={() => {}}>
												Submit
											</Button>
										</div>
									</div>
								</div>
							</DialogDescription>
						</DialogHeader>
					</DialogContent>
				</Dialog>
			</div>

			<div className='mt-5 pl-2 flex-col border-l border-l-primaryBlue'>
				<h5 className='text-xl font-semibold'>{title}</h5>
				<p className='break-normal text-lg mt-1 h-[100px] overflow-scroll scroll'>
					{description}
				</p>
			</div>
		</div>
	);
}
