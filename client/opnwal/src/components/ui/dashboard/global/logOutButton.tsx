import { Button } from '@/components/global/button';
import { signOut } from 'next-auth/react';

export const LogOutButton = () => {
	return (
		<Button variant='outline' onClick={() => signOut()}>
			Log Out
		</Button>
	);
};
