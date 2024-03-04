import Post from '@/components/ui/dashboard/feed/post';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function getPosts() {
	const posts = await prisma.post.findMany({
		where: {
			published: true,
		},
		include: {
			user: {
				select: {
					username: true, // Fetches the username from the User model
				},
			},
			comments: true, // Fetches all related comments for each post
			likes: true, // Fetches all related likes for each post
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
						id={post.id.toString()}
						title={post.title ? post.title : ''}
						description={post.description ? post.description : ''}
						username={post.user.username ? post.user.username : ''}
						likes={post.likes}
						comments={post.comments}
					/>
				</div>
			))}
		</div>
	);
}
