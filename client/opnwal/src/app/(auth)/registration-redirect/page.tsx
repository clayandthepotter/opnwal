import RegistrationRedirect from '@/components/ui/authPage/registrationRedirect';

const RegistrationRedirectPage = () => {
	return (
		<div
			className='
      w-[100vw]
      h-[100vh]
      bg-gradient-to-br from-sky-100 via-pink-100 to-amber-100
			justify-center
			items-center
			flex
    '
		>
			<div className='self-center justify-self-center'>
				<RegistrationRedirect />
			</div>
		</div>
	);
};

export default RegistrationRedirectPage;
