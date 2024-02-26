const S5HeadingWrapper = ({ children }: any) => {
	return (
		<div
			id='s5Header'
			className='
        flex
        w-auto
        max-w-[1100px]
        border-b
        border-black
        mb-14
        py-3
      '
		>
			<h2
				className='
          justify-self-center
          self-center
          w-full
          text-8xl
          font-semibold
          text-center
          -mt-3
        '
			>
				{children}
			</h2>
		</div>
	);
};
export default S5HeadingWrapper;
