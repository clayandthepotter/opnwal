'use client';

import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

interface ProviderProps extends React.PropsWithChildren {
	session: Session | null;
}

export const AuthProvider = ({
	children,
	session,
}: ProviderProps) => {
	return <SessionProvider session={session}>{children}</SessionProvider>;
};
