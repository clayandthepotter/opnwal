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
			comments: {
				include: {
					user: {
						select: {
							username: true, // Fetches the username from the User model for each comment
						},
					},
				},
			},
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
			<span className='font-bold text-4xl hidden md:m-auto max-w-[550px] justify-self-center'>
				My Feed
			</span>
			{posts.map((post: any) => (
				<div
					key={post.id}
					className='m-auto max-w-[400px] min-h-[770px] justify-self-center'
				>
					<Post
						id={post.id.toString()}
						title={post.title ? post.title : ''}
						description={post.description ? post.description : ''}
						username={post.user.username ? post.user.username : ''}
						imageUrls={post.imageUrls}
						likes={post.likes}
						comments={post.comments}
					/>
				</div>
			))}
			<div className='pt-10 pb-14'>
				<p className='text-center'>You have reached the end</p>
			</div>
		</div>
	);
}
