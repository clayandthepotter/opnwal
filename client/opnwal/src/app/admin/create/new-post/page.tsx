'use client';

import CreatePostForm from '@/components/ui/dashboard/create/createPostForm';
import { getSession } from 'next-auth/react';
const NewPost = () => {
	return (
		<div className='self-center justify-center mt-5'>
			<h1 className='font-bold text-4xl w-full text-center mb-8'>
				Create Post
			</h1>
			<CreatePostForm />
		</div>
	);
};
export default NewPost;
