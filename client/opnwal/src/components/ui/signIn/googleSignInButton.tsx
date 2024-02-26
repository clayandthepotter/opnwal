import { ReactNode } from 'react';
import { Button } from '@/components/global/button';
import { signIn } from 'next-auth/react';

const GoogleSignInButton = () => {
	return (
		<Button
			variant='defaultWidthFull'
			onClick={() => signIn('google', { callbackUrl: '/admin' })}
		>
			Continue with Google
		</Button>
	);
};
export default GoogleSignInButton;
