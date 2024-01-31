'use client';

import NavMain from '@/components/navMain';

const LandingPage = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
	return (
		<div>
			<NavMain isLoggedIn={isLoggedIn} />
			<h1>Landing Page</h1>
		</div>
	);
};

export default LandingPage;
