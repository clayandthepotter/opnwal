import Post from '@/components/ui/dashboard/feed/post';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function getPosts() {
	const posts = await prisma.post.findMany({
		where: { published: true },
		include: {
			author: {
				select: { name: true },
			},
		},
	});
	return posts;
}

export default async function Feed() {
	const posts = await getPosts();
	console.log({ posts });
	return (
		<div className='flex flex-col justify-center'>
			<span className='font-bold text-4xl md:m-auto max-w-[550px] justify-self-center'>
				My Feed
			</span>
			{posts.map((post) => (
				<div className='m-auto min-w-[550px] min-h-[770px] justify-self-center'>
					<Post
						key={post.id}
						id={post.id}
						title={post.title}
						content={post.content}
						authorName={post.author?.name}
					/>
				</div>
			))}
			<div className='border-dashed border border-zinc-500 w-full h-64 rounded-lg'></div>
			<div className='border-dashed border border-zinc-500 w-full h-64 rounded-lg'></div>
			<div className='border-dashed border border-zinc-500 w-full h-64 rounded-lg'></div>
			<div className='border-dashed border border-zinc-500 w-full h-64 rounded-lg'></div>
			<div className='border-dashed border border-zinc-500 w-full h-64 rounded-lg'></div>
		</div>
	);
}
