const Comments = ({ comments }: { comments: any }) => {
	return (
		<div className='mt-4 mb-8 max-h-[300px] overflow-scroll'>
			{comments.map((comment: any) => (
				<div key={comment.id} className='flex flex-col py-1'>
					<p className='font-bold'>{comment.user.username}</p>
					<p>{comment.content}</p>
				</div>
			))}
		</div>
	);
};

export default Comments;
